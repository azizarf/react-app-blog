// API Axios Get Call 
import axios from "axios";
 const getAPICall = (url) =>{
    return axios.get(url); 
}

// API Axios Post Call 

 const postAPICall = (url, data) => {
    return axios.post(url,data)
}

// API Axios Put Call 
 const putAPICall=(url,data) =>{
    return axios.put(url,data)
}

//API Axios Delete Call 

 const deleteAPICall = (url) =>{
    return axios.delete(url)
}
export default {getAPICall,postAPICall,putAPICall,deleteAPICall}