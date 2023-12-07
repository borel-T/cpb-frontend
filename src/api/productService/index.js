// products service
import httpClient from "../httpClient";

export default {
  getById: (id) => httpClient.getRequest(`/api/products/${id}`),
  getAll: () => httpClient.getRequest("/api/products"),
};
