
/** 蛇食物的类
 * @param {number} row canvas行数
 * @param {number} col canvas列数
 */
class SnakeFood {
  img: any;
  row: number;
  col: number;
  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }
}
/** 生成蛇对象类
 * @param {number} headRow 蛇头在canvas中的行位置
 * @param {number} headCol 蛇头在canvas中的列位置
 * @param {number} rowLength canvas行数
 * @param {number} colLength canvas列数
 */
class Snake {
  snakeArr: any[][] = [];
  rowLength: number;
  colLength: number;
  headRow: number;
  headCol: number;
  length = 1;
  direction: string = '';
  die: boolean = false;
  constructor(headRow: number, headCol: number, rowLength: number, colLength: number) {
    this.headRow = headRow;
    this.headCol = headCol;
    this.rowLength = rowLength;
    this.colLength = colLength;
    this.snakeArr.push([headRow, headCol])
  }
  setSnake() {
    // 超出边界
    if (this.headRow < 0 || this.headRow >= this.rowLength
      || this.headCol < 0 || this.headCol >= this.colLength) {
      this.die = true;
      return;
    }
    // 碰到自己
    this.snakeArr.forEach((item) => {
      const [row, col] = item;
      if (row == this.headRow && col == this.headCol) {
        this.die = true;
        return;
      }
    })
    // 设置蛇头位置
    this.snakeArr.unshift([this.headRow, this.headCol]);
    if (this.snakeArr.length > this.length) {
      // 删掉最后一个方块
      this.snakeArr.pop();
    }
  }
  move() {
    switch (this.direction) {
      case "up": this.headRow--; break;
      case "down": this.headRow++; break;
      case "left": this.headCol--; break;
      case "right": this.headCol++; break;
      default: return;
    }
  }
}
/** 贪吃蛇游戏类
 * @param { object } option 配置对象
 * @param { number } option.row 游戏行数
 * @param { number } option.col 游戏列数
 * @param { number } option.squareSize 游戏中每个方块的尺寸
 * @param { HTMLCanvasElement } option.canvas 挂载的canvas结点
 * @param { number } option.score 迟到食物的分值
 */
class GreedySnakeCanvas {
  row: number;
  col: number;
  squareSize: number;
  canvas: HTMLCanvasElement | null;
  score: number;
  ctx: any;
  keyDirection: string = '';
  private DirectionMap = new Map([
    ['up', 1],
    ['down', -1],
    ['left', 2],
    ['right', -2],
  ])
  private squareArr: number[][] = []
  private snake: Snake = new Snake(0, 0, 0, 0);
  private snakeFood: SnakeFood = new SnakeFood(0, 0);
  private timer: number = 0;
  private speed: number = 700;
  private grade: number = 0;
  constructor(option: { row: number, col: number, squareSize: number, canvas: HTMLCanvasElement, score?: number }) {
    const { row, col, squareSize, canvas, score } = option;
    this.row = row;
    this.col = col;
    this.squareSize = squareSize;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.score = score || 1;
    this.init();
  }
  init() {
    this.speed = 700;
    this.grade = 0;
    this.keyDirection = '';
    this.canvas.width = this.col * this.squareSize;
    this.canvas.height = this.row * this.squareSize;
    // 实例化蛇
    let headRow = this.row / 2 | 0;
    let headCol = this.col / 2 | 0;
    this.snake = new Snake(headRow, headCol, this.row, this.col);
    // 实例化食物
    let foodRow = (Math.random() * this.row) | 0;
    let foodCol = (Math.random() * this.col) | 0;
    if (foodRow == headRow && foodCol == headCol) {
      foodRow++;
      foodCol++;
    }
    this.snakeFood = new SnakeFood(foodRow, foodCol);
    // 填充所有方块
    this.squareArr = [];
    for (let i = 0; i < this.row; i++) {
      this.squareArr.push([])
      for (let j = 0; j < this.col; j++) {
        this.squareArr[i].push(0)
      }
    }
    this.draw();
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = "normal 200 30px Serif";
    this.ctx.fillText('按任意方向键开始游戏', this.canvas.width / 2, this.canvas.height / 2);
    this.interval();
  }
  interval() {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      if (!this.snake.die) {
        this.keyDirection && this.move()
      } else {
        this.gameover()
      }
    }, this.speed);
  }
  gameover() {
    clearInterval(this.timer);
    window.removeEventListener('keydown', window);
    alert(`游戏结束，得分：${this.grade}`);
    this.init();
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let x;
    let y;
    // 画蛇
    this.ctx.fillStyle = 'blue';
    for (let snakeSquare of this.snake?.snakeArr) {
      const [row, col] = snakeSquare;
      x = col * this.squareSize;
      y = row * this.squareSize;
      this.ctx.fillRect(x, y, this.squareSize, this.squareSize)
    }
    // 画食物
    this.ctx.fillStyle = 'red';
    x = this.snakeFood.col * this.squareSize;
    y = this.snakeFood.row * this.squareSize;
    this.ctx.fillRect(x, y, this.squareSize, this.squareSize);
  }
  private setSpeed() {
    if (this.snake.length > this.squareArr.length * 0.7) { this.speed = 300; }
    else if (this.snake.length > this.squareArr.length * 0.5) { this.speed = 400; }
    else if (this.snake.length > this.squareArr.length * 0.3) { this.speed = 500; }
    else if (this.snake.length > this.squareArr.length * 0.1) { this.speed = 600; }
    this.interval()
  }
  move() {
    // 方向判定
    let snakeDirectionMapValue = this.DirectionMap.get(this.snake.direction) || 0;
    let keyDirectionMapValue = this.DirectionMap.get(this.keyDirection) || 0;
    if (this.snake.length > 1 && snakeDirectionMapValue == -keyDirectionMapValue) {
      this.snake.move();
    }
    else {
      this.snake.direction = this.keyDirection;
      this.snake.move();
    }
    // 吃到食物
    if (this.snake.headRow == this.snakeFood.row && this.snake.headCol == this.snakeFood.col) {
      this.snake.length++;
      this.grade += this.score;
      this.snake.setSnake();
      // 设置速度
      this.setSpeed();
      // 记录蛇占用的方块
      this.snake.snakeArr.forEach((item) => {
        const [row, col] = item;
        this.squareArr[row][col] = 1;
      })
      /** 空闲可用的方块 */
      let zeroSquare: any[] = []
      this.squareArr.forEach((rowItem, rowIndex) => {
        rowItem.forEach((colItem, colIndex) => {
          if (colItem == 0) {
            zeroSquare.push([rowIndex, colIndex])
          }
        })
      })
      // 改变食物位置
      let zeroSquareIndex = Math.random() * zeroSquare.length | 0
      const [foodRow, foodCol] = zeroSquare[zeroSquareIndex];
      this.snakeFood.row = foodRow;
      this.snakeFood.col = foodCol;
    } else {
      this.snake.setSnake();
    }
    this.draw();
  }
}
const SnakeFoodHtml = `/** 蛇食物的类
* @param {number} row canvas行数
* @param {number} col canvas列数
*/
class SnakeFood {
 img: any;
 row: number;
 col: number;
 constructor(row: number, col: number) {
   this.row = row;
   this.col = col;
 }
}`
const snakeHtml = `/** 生成蛇对象类
* @param {number} headRow 蛇头在canvas中的行位置
* @param {number} headCol 蛇头在canvas中的列位置
* @param {number} rowLength canvas行数
* @param {number} colLength canvas列数
*/
class Snake {
 snakeArr: any[][] = [];
 rowLength: number;
 colLength: number;
 headRow: number;
 headCol: number;
 length = 1;
 direction: string = '';
 die: boolean = false;
 constructor(headRow: number, headCol: number, rowLength: number, colLength: number) {
   this.headRow = headRow;
   this.headCol = headCol;
   this.rowLength = rowLength;
   this.colLength = colLength;
   this.snakeArr.push([headRow, headCol])
 }
 setSnake() {
   // 超出边界
   if (this.headRow < 0 || this.headRow >= this.rowLength
     || this.headCol < 0 || this.headCol >= this.colLength) {
     this.die = true;
     return;
   }
   // 碰到自己
   this.snakeArr.forEach((item) => {
     const [row, col] = item;
     if (row == this.headRow && col == this.headCol) {
       this.die = true;
       return;
     }
   })
   // 设置蛇头位置
   this.snakeArr.unshift([this.headRow, this.headCol]);
   if (this.snakeArr.length > this.length) {
     // 删掉最后一个方块
     this.snakeArr.pop();
   }
 }
 move() {
   switch (this.direction) {
     case "up": this.headRow--; break;
     case "down": this.headRow++; break;
     case "left": this.headCol--; break;
     case "right": this.headCol++; break;
     default: return;
   }
 }
}`
const greedySnakeCanvasHtml = `/** 贪吃蛇游戏类
* @param { object } option 配置对象
* @param { number } option.row 游戏行数
* @param { number } option.col 游戏列数
* @param { number } option.squareSize 游戏中每个方块的尺寸
* @param { HTMLCanvasElement } option.canvas 挂载的canvas结点
* @param { number } option.score 迟到食物的分值
*/
class GreedySnakeCanvas {
 row: number;
 col: number;
 squareSize: number;
 canvas: HTMLCanvasElement | null;
 score: number;
 ctx: any;
 keyDirection: string = '';
 private DirectionMap = new Map([
   ['up', 1],
   ['down', -1],
   ['left', 2],
   ['right', -2],
 ])
 private squareArr: number[][] = []
 private snake: Snake = new Snake(0, 0, 0, 0);
 private snakeFood: SnakeFood = new SnakeFood(0, 0);
 private timer: number = 0;
 private speed: number = 700;
 private grade: number = 0;
 constructor(option: { row: number, col: number, squareSize: number, canvas: HTMLCanvasElement, score?: number }) {
   const { row, col, squareSize, canvas, score } = option;
   this.row = row;
   this.col = col;
   this.squareSize = squareSize;
   this.canvas = canvas;
   this.ctx = this.canvas.getContext('2d');
   this.score = score || 1;
   this.init();
 }
 init() {
   this.speed = 700;
   this.grade = 0;
   this.keyDirection = '';
   this.canvas.width = this.col * this.squareSize;
   this.canvas.height = this.row * this.squareSize;
   // 实例化蛇
   let headRow = this.row / 2 | 0;
   let headCol = this.col / 2 | 0;
   this.snake = new Snake(headRow, headCol, this.row, this.col);
   // 实例化食物
   let foodRow = (Math.random() * this.row) | 0;
   let foodCol = (Math.random() * this.col) | 0;
   if (foodRow == headRow && foodCol == headCol) {
     foodRow++;
     foodCol++;
   }
   this.snakeFood = new SnakeFood(foodRow, foodCol);
   // 填充所有方块
   this.squareArr = [];
   for (let i = 0; i < this.row; i++) {
     this.squareArr.push([])
     for (let j = 0; j < this.col; j++) {
       this.squareArr[i].push(0)
     }
   }
   this.draw();
   this.ctx.textAlign = 'center';
   this.ctx.textBaseline = 'middle';
   this.ctx.font = "normal 200 30px Serif";
   this.ctx.fillText('按任意方向键开始游戏', this.canvas.width / 2, this.canvas.height / 2);
   this.interval();
 }
 interval() {
   clearInterval(this.timer)
   this.timer = setInterval(() => {
     if (!this.snake.die) {
       this.keyDirection && this.move()
     } else {
       this.gameover()
     }
   }, this.speed);
 }
 gameover() {
   clearInterval(this.timer);
   alert(\`游戏结束，得分：\${this.grade}\`);
   this.init();
 }
 draw() {
   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
   let x;
   let y;
   // 画蛇
   this.ctx.fillStyle = 'blue';
   for (let snakeSquare of this.snake?.snakeArr) {
     const [row, col] = snakeSquare;
     x = col * this.squareSize;
     y = row * this.squareSize;
     this.ctx.fillRect(x, y, this.squareSize, this.squareSize)
   }
   // 画食物
   this.ctx.fillStyle = 'red';
   x = this.snakeFood.col * this.squareSize;
   y = this.snakeFood.row * this.squareSize;
   this.ctx.fillRect(x, y, this.squareSize, this.squareSize);
 }
 private setSpeed() {
   if (this.snake.length > this.squareArr.length * 0.7) { this.speed = 300; }
   else if (this.snake.length > this.squareArr.length * 0.5) { this.speed = 400; }
   else if (this.snake.length > this.squareArr.length * 0.3) { this.speed = 500; }
   else if (this.snake.length > this.squareArr.length * 0.1) { this.speed = 600; }
   this.interval()
 }
 move() {
   // 方向判定
   let snakeDirectionMapValue = this.DirectionMap.get(this.snake.direction) || 0;
   let keyDirectionMapValue = this.DirectionMap.get(this.keyDirection) || 0;
   if (this.snake.length > 1 && snakeDirectionMapValue == -keyDirectionMapValue) {
     this.snake.move();
   }
   else {
     this.snake.direction = this.keyDirection;
     this.snake.move();
   }
   // 吃到食物
   if (this.snake.headRow == this.snakeFood.row && this.snake.headCol == this.snakeFood.col) {
     this.snake.length++;
     this.grade += this.score;
     this.snake.setSnake();
     // 设置速度
     this.setSpeed();
     // 记录蛇占用的方块
     this.snake.snakeArr.forEach((item) => {
       const [row, col] = item;
       this.squareArr[row][col] = 1;
     })
     /** 空闲可用的方块 */
     let zeroSquare: any[] = []
     this.squareArr.forEach((rowItem, rowIndex) => {
       rowItem.forEach((colItem, colIndex) => {
         if (colItem == 0) {
           zeroSquare.push([rowIndex, colIndex])
         }
       })
     })
     // 改变食物位置
     let zeroSquareIndex = Math.random() * zeroSquare.length | 0
     const [foodRow, foodCol] = zeroSquare[zeroSquareIndex];
     this.snakeFood.row = foodRow;
     this.snakeFood.col = foodCol;
   } else {
     this.snake.setSnake();
   }
   this.draw();
 }
}`
export {
  SnakeFood,
  Snake,
  GreedySnakeCanvas,
  SnakeFoodHtml,
  snakeHtml,
  greedySnakeCanvasHtml,
}