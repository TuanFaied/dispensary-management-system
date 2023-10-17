import axios from "axios";
 
const TotalUser_URL="http://localhost:8080/Admin/Dashboard"
const ALL_MEDICINE_URL="http://localhost:8080/Admin/Stock"

class DashboardServices{
    getTotalUser(){
        return axios.get(TotalUser_URL);
    }
    getAllMedicine(){
        return axios.get(ALL_MEDICINE_URL);
    }
}
export default new DashboardServices()