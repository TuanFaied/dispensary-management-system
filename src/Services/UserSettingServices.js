import axios from "axios";

const URL="http://localhost:8080/User/Settings/update"

const GET_MANAGEMENT_URL="http://localhost:8080/Admin/Settings"
const URL2="http://localhost:8080/User/Home"
const URL3="http://localhost:8080/User/home"
class SettingsServices{
    updatePatient(details){
        return axios.put(URL,details);
    }
    getAllManagement(){
        return axios.get(GET_MANAGEMENT_URL);
    }
    getAllBooked(){
        return axios.get(URL2)
    }
    booking(data){
        return axios.post(URL3, data)
    }
    status(status,seat_no){
        return axios.post(`http://localhost:8080/User/status/${status}/${seat_no}`)
    }
    reset(){
        return axios.delete("http://localhost:8080/User/delete")
    }


}
export default new SettingsServices()