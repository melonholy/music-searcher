import axios from "axios";

class HttpService {
  baseConfig = {
    headers: {
      Accept: "application/json"
    }
  };
  service = axios.create({ ...this.baseConfig });

  get = async ({ url, id, params, config }) => {
    const path = id ? `${url}/${id}` : `${url}`;

    const response = await this.service.request({
      method: "get",
      url: path,
      params,
      ...config
    });

    return response;
  };

  post = async ({ url, data, params, config }) => {
    const path = `${url}`;

    const response = await this.service.request({
      method: "post",
      url: path,
      data,
      params,
      ...config
    });

    return response;
  };
}

export const httpService = new HttpService();
