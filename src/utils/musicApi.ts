import http from "./http";

// 搜索
export async function useSearch(keyword: string = "稻香") {
  const res: any = await http.get("/msearchcdn/api/v3/search/song", {
    highlight: "mark",
    pagesize: 15,
    tagtype: "全部",
    keyword: keyword,
    page: 1,
  });
  return res.data;
}

// 热门推荐
export async function useHotRecommend() {
  const res:any = await http.get(
    "/mobilecdnbj/api/v3/tag/recommend?showtype=3&apiver=2"
  );
  return res.data;
}

// 推荐歌单
export async function useRecommendOrder() {
  const res:any = await http.get("/mobilecdnbj/api/v3/tag/specialList", {
    page: 1,
    tagid: 12,
    pagesize: 30,
    ugc: 1,
    id: 68,
    sort: 2,
  });
  return res.data;
}

// 热门歌单
export async function useHotOrder() {
  const res: any = await http.get("/mobilecdnbj/api/v3/rank/list", {
    parentid: 0,
    withsong: 1,
  });
  return res.data;
}

// 新歌推荐
export async function useNewSong(type: any = 'china') {
  // china：华语新歌, western：欧美新歌， JapanAndKorea:日韩新歌
  enum typeEnum {
    china = 1,
    western,
    j_and_k,
  }
  const res: any = await http.get("/mobilecdnbj/api/v3/rank/newsong", {
    with_cover: 1,
    pagesize: 10,
    page: 1,
    type: typeEnum[type],
  });
  return res.data;
}
