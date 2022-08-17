import axios from "axios";

export const api = axios.create({
  baseURL: "https://8081-saulofelipe-studyingrea-xonpi6uv2oc.ws-us61.gitpod.io"
});


api.interceptors.request.use(
  request => { // Send request
    return request;
  }, 
  error => { // If receive error
    return error;
  }
);

api.interceptors.response.use(
  response => { // Receive response
    return response;
  },
  error => { // If receive error
    return error.response;
  }
);