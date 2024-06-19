import axios from "axios";

const GET_LOGIN_ADMIN_URL="http://localhost:8081//Admin"


class LoginServices{

    getAdmin(){
        return axios.get(GET_LOGIN_ADMIN_URL);
    }
    getUser(url){
        return axios.get(url);
    }


}

export default new LoginServices()