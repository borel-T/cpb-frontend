import axios from "axios";
import { BASE_URL } from "./endpoints";

axios.defaults.baseURL = BASE_URL;

/********* HTTP Helper Methods *********/

// HTTP req error object
class RequestError {
  constructor(status, statusText, data) {
    this.status = status;
    this.data = data;
    this.statusText = statusText;
    this.name = "ApiRequestError";
  }
}

// HTTP error handler
function httpErrorHandler(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw new RequestError(
      error.response.status,
      error.response.statusText,
      error.response.data
    );
  } else if (error.request) {
    // The http error was trigerred during request setting up
    throw new RequestError(500, null, "Server Error");
  }
}

/**************** PUBLIC HTTP REQUEST METHODS *****************/

// Axios HTTTP GET Request
export function getRequest(path, params = {}) {
  return axios
    .get(path, { params })
    .then((response) => {
      // The request success range of 2xx
      const { status, statusText, data, headers } = response;
      return {
        headers: headers,
        status: status,
        statusText: statusText,
        data: data,
      };
    })
    .catch((error) => {
      httpErrorHandler(error);
    });
}

export default { getRequest };
