import { httpService } from "./httpService";

export const getSingleAlbumInfo = async id => {
  try {
    const { data } = await httpService.get({
      url: `https://api.spotify.com/v1/albums/${id}`,
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

export const getArtistAlbums = async id => {
  try {
    const { data } = await httpService.get({
      url: `https://api.spotify.com/v1/artists/${id}/albums`,
      params: {
        include_groups: "album",
        market: "DE"
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

export const getRecommendations = async id => {
  try {
    const { data } = await httpService.get({
      url: `https://api.spotify.com/v1/recommendations`,
      params: {
        seed_artists: id
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

export const getPlaylist = async playlist_id => {
  try {
    const { data } = await httpService.get({
      url: `https://api.spotify.com/v1/playlists/${playlist_id}`,
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
