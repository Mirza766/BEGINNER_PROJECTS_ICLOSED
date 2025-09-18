import axios from "axios"

const API_KEY = "2113b9af9a5a7832bcc4ff6a8ca7dc9c";

const api=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})


const FetchData=async(movie)=>{
    try{
  const res=await api.get(`search/movie?api_key=${API_KEY}&query=${movie}`);
  return res.data
    }
  catch(error){
    console.error(error)
    throw error
  }
}

export default FetchData