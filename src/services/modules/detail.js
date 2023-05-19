import MyRequest from "..";

export function getEntireList(params) {
  return MyRequest.get({
    url: "/enire/list",
    params: params
  })
}