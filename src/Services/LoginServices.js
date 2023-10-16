import axios from "axios";

const GET_LOGIN_ADMIN_URL="http://localhost:8080//Admin"
const GET_LOGIN_USER_URL="http://localhost:8080//User"

class LoginServices{

    getAdmin(){
        return axios.get(GET_LOGIN_ADMIN_URL);
    }
    getUser(){
        return axios.get(GET_LOGIN_USER_URL);
    }


}

export default new LoginServices()