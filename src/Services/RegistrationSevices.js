import axios from "axios";

const REGISTER_URL = "http://localhost:8081//Register"

class RegistationServices{

    registor(post){
        return axios.post(REGISTER_URL,post);
    }
    


}

export default new RegistationServices()