const getFeatureImageSource = (postData) => {
  return postData?.["_embedded"]?.["wp:featuredmedia"]?.[0]?.source_url;
}

export { getFeatureImageSource };