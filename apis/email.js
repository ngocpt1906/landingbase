import ApiService from "../Services/ApiService";
class EmailApi {

  constructor() {
    this.service = new ApiService("/techsearch/v1/email","https://techsearch.com.au/blog/wp-json");
  }

  sendEmail = (payload) => {
    return this.service.postRequest(payload, "");
  }
}

export default EmailApi;
