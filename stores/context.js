import React from "react";
import PostAPI from "../apis/posts";
import EmailApi from "../apis/email";
import { PER_PAGE, CATEGORY_ID } from "../utils/Constants";

export const StoreContext = React.createContext(null);

const ContextStore = ({ children }) => {

  const [listItem, setListItem] = React.useState([]);
  const [headLines, setHeadLines] = React.useState([]);
  const [testimonial, setTestimonial] = React.useState([]);
  const [aboutUs, setAboutUs] = React.useState([]);
  const [services, setServices] = React.useState([]);
  const [slogan, setSlogan] = React.useState(null);
  const [blogDetail, setBlogDetail] = React.useState(null);
  const [serviceDetail, setServiceDetail] = React.useState(null);
  const [page, setPage] = React.useState(5);
  const [totalPage, setTotalPage] = React.useState(0);
  const [emailResponse, setEmailResponse] = React.useState(null);
  const [emailLoading, setEmailLoading] = React.useState(false);

  const postApi = new PostAPI();
  const emailApi = new EmailApi();

  const getAll = async () => {
    let response = await postApi.getAll({ categories: [CATEGORY_ID.blog], "_embed": true, per_page: PER_PAGE, page: 1 });
    if (response) {
      setListItem(response.data);
      setTotalPage(parseInt(response.headers["x-wp-totalpages"]));
      setPage(1);
    }
  }

  const getMoreBlog = async () => {
    let response = await postApi.getAll({ categories: [CATEGORY_ID.blog], "_embed": true, page: page + 1, per_page: PER_PAGE });
    if (response) {
      setListItem([...listItem, ...response.data]);
      setTotalPage(parseInt(response.headers["x-wp-totalpages"]));
    }
    setPage(page + 1);
  }

  const getHeadLines = async () => {
    let response = await postApi.getAll({ categories: [CATEGORY_ID.headline], "_embed": true });
    if (response) setHeadLines(response.data);
  }

  const getTestimonial = async () => {
    let response = await postApi.getAll({ categories: [CATEGORY_ID.testimonial], "_embed": true });
    if (response) setTestimonial(response.data);
  }

  const getAboutUs = async () => {
    let response = await postApi.getAll({ categories: [CATEGORY_ID.aboutus], "_embed": true });
    if (response) setAboutUs(response.data);
  }
  const getServices = async () => {
    let response = await postApi.getAll({ categories: [CATEGORY_ID.services], "_embed": true });
    if (response) setServices(response.data);
  }

  const getSlogan = async () => {
    let response = await postApi.getAll({ categories: [CATEGORY_ID.slogan], "_embed": true });
    if (response) setSlogan(response.data?.[0]);
  }

  const getBlogDetail = async (id) => {
    let response = await postApi.getById(id, { "_embed": true });
    if (response) setBlogDetail(response.data);
  }

  const getServiceDetail = async (id) => {
    let response = await postApi.getById(id, { "_embed": true });
    if (response) setServiceDetail(response.data);
  }

  const sendEmail = async (payload) => {
    setEmailResponse(null);
    setEmailLoading(true);
    let response = await emailApi.sendEmail(payload);
    if (response) {
      setEmailResponse(response.data?.data);
      setEmailLoading(false);
    }else{
      setEmailLoading(false);
    }
  }

  const store = {
    listItem,
    getAll,
    getBlogDetail,
    blogDetail,
    getSlogan,
    slogan,
    headLines,
    getHeadLines,
    testimonial,
    getTestimonial,
    aboutUs,
    getAboutUs,
    page,
    getMoreBlog,
    totalPage, services, getServices,
    emailResponse, sendEmail, emailLoading,
    getServiceDetail, serviceDetail,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );

}

export default ContextStore;