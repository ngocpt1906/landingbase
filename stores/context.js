import React from "react";
import PostAPI from "../apis/posts";
import { CATEGORY_ID } from "../utils/Constants";

export const StoreContext = React.createContext(null);

const ContextStore = ({ children }) => {
  const [slogan, setSlogan] = React.useState(null);

  const postApi = new PostAPI();

  const getSlogan = async () => {
    let response = await postApi.getAll({ categories: [CATEGORY_ID.slogan], "_embed": true });
    if (response) setSlogan(response.data?.[0]);
  }

  const store = {
    getSlogan,
    slogan,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );

}

export default ContextStore;