import { httpService } from "./httpService";

export const getPlaylistByCategory = async category_id => {
  try {
    const { data } = await httpService.get({
      url: `https://api.spotify.com/v1/browse/categories/${category_id}/playlists`,
      params: {
        limit: 40
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
