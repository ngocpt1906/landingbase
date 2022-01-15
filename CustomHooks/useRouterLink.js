function useRouterLink(path, params) {
  let str = "";
  for (const key in params) {
    if (str != "") {
      str += "&";
    }
    str += key + "=" + encodeURIComponent(params[key]);
  }
  let returnUrl = path;
  if (str) returnUrl += `?${str}`
  return returnUrl;
}

export default useRouterLink;
