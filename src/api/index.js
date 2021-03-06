// 这个文件用来管理所有的请求
import request from "@/utils/request";

// 首页API
export const getIndexSwiper = () => request.get("home/swiperdata");
export const getIndexCat = () => request.get("home/catitems");
export const getIndexFloor = () => request.get("home/floordata");
// 分类页API
export const getCategories = () => request.get("categories");
// 商品API
export const getGoodsQsearch = obj => request.get("goods/qsearch", obj);
export const getGoodsSearch = obj => request.get("goods/search", obj);
export const getGoodsDetail = obj => request.get("goods/detail", obj);

// 根据微信用户信息换取 token 的登录接口
export const getToken = obj => request.post("users/wxlogin", obj);
