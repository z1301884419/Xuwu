import http from './http';

// 搜索
export async function useSearch(keyword: string = "稻香"){
  const res = await http.get('/msearchcdn/api/v3/search/song',{
    "showtype":14,
    "highlight": "em",
    "pagesize":15,
    "tag_aggr":1,
    "tagtype":"全部",
    "plat":0,
    "sver":5,
    "keyword": keyword,
    "correct":1,
    "api_ver":1,
    "version":9108,
    "page":1,
    "area_code":1,
    "tag":1,
    "with_res_tag":1
  })
  return res.replace(/<!--.{10,20}-->/gim,'');
}

// 热门推荐
export async function useHotRecommend() {
  const res = await http.get('/mobilecdnbj/api/v3/tag/recommend?showtype=3&apiver=2&plat=0')
  return res
}

// 推荐歌单
export async function useRecommendOrder() {
  return await http.get('/mobilecdnbj/api/v3/tag/specialList?plat=0&page=1&tagid=12&pagesize=30&ugc=1&id=68&sort=2')
}

// 热门歌单
export async function useHotOrder() {
  const res = await http.get('/mobilecdnbj/api/v3/rank/list?version=9108&plat=0&showtype=2&parentid=0&apiver=6&area_code=1&withsong=1&with_res_tag=1')
  return JSON.parse(res.replace(/<!--.{1,30}-->/gim,''));
}

