import { httpService } from "./httpService";
import qs from "querystring";

export const getAccessToken = async () => {
  try {
    const {
      data: { access_token }
    } = await httpService.post({
      url: "/api/token",
      data: qs.stringify({
        grant_type: "client_credentials"
      }),
      params: {},
      config: {
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        },
        auth: {
          username: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
          password: process.env.VUE_APP_SPOTIFY_CLIENT_SECRET
        }
      }
    });
    localStorage.setItem("token", access_token);
  } catch (err) {
    console.log(err);
  }
};
