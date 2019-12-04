import { httpService } from "./httpService";

export const getNewReleases = async next => {
  try {
    const { data } = await httpService.get({
      url: next ? next : "https://api.spotify.com/v1/browse/new-releases",
      params: {
        country: "us",
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

export const getCategories = async () => {
  try {
    const { data } = await httpService.get({
      url: "https://api.spotify.com/v1/browse/categories",
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

export const getLyrics = async (name, artist) => {
  try {
    const {
      data: {
        result: {
          track: { text }
        }
      }
    } = await httpService.get({
      url: `https://orion.apiseeds.com/api/music/lyric/${artist}/${name}`,
      params: {
        apikey: process.env.VUE_APP_LYRICS_API_KEY
      }
    });
    return text;
  } catch (err) {
    return null;
  }
};
