import axios from "axios";
import { Photo } from "../types";

const API_KEY = 'i9wbXvFd-cu6QxKyhooRASCj8VWy50rtQG-9BbauSY4';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;

interface ApiResponse {
  results: Photo[];
  total_pages: number;
}

export const getPhotos = async (query: string, page = 1, per_page = 20): Promise<ApiResponse> => {
  const { data } = await axios.get<ApiResponse>('search/photos', {
    params: {
      query,
      page,
      per_page,
    },
  });

  return data;
};


