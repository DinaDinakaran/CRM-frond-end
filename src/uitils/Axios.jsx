import axios from "axios";




export default axios.create({
    baseURL:"http://localhost:4000/api/",
    headers:{
        Token:localStorage.getItem("token"),
        role:localStorage.getItem("role")
    }
    
})