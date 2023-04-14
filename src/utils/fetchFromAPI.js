import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  url: BASE_URL,
  params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
  headers: {
    'X-RapidAPI-Key': '6bc447b26cmshb29177237b65cafp1d28f1jsnf1fe3c6bf330',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url)=>{
   const {data} =  await axios.get(`${BASE_URL}/${url}`,options)
   return data
}