import axios from "axios";
 
const TotalUser_URL="http://localhost:8080/Admin/Dashboard"

class DashboardServices{
    getTotalUser(){
        return axios.get(TotalUser_URL);
    }
}
export default new DashboardServices()