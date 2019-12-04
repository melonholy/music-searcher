import { httpService } from "./httpService";

export const getChart = async next => {
  try {
    const { data } = await httpService.get({
      url: next
        ? next
        : `https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks`,
      params: {
        limit: 20
      },
      config: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
