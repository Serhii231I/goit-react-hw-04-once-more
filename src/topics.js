import axios from "axios";
const ACCESS_KEY = "hPSd_YdcdR-y-7K9YCLUf7GqX1DmigU28igAbGQfZzA";

axios.defaults.baseURL = `https://api.unsplash.com`;

export const fetchTopics = async (topic, page = 1) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: topic,
      page: page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data.results;
};
