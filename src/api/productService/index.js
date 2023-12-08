// products service
import httpClient from "../httpClient";
import { PRODUCT_API } from "../httpClient/endpoints";

export default {
  getById: (id) => httpClient.getRequest(`${PRODUCT_API}/${id}`),
  getAll: () => httpClient.getRequest(`${PRODUCT_API}`),
};
