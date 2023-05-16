import MyRequest from "..";

export function getHomeGoodPriceData(params) {
  return MyRequest.get({
    url: "/home/goodprice"
  })
}