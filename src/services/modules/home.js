import MyRequest from "..";

export function getHomeGoodPriceData(params) {
  return MyRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData(params) {
  return MyRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData(params) {
  return MyRequest.get({
    url: "/home/discount"
  })
}

export function getHomeRecommendData(params) {
  return MyRequest.get({
    url: "/home/recommend"
  })
}

export function getHomeLongforData(params) {
  return MyRequest.get({
    url: "/home/longfor"
  })
}