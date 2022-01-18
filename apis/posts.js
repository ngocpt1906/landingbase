import ApiService from "../Services/ApiService";
class PostApi {

  constructor() {
    this.service = new ApiService("posts");
  }

  getAll = (payload) => {
    return this.service.getRequest(payload, "");
  }

  getById = (id, payload) => {
    return this.service.getRequest(payload, "/" + id);
  }
  
}

export default PostApi;
