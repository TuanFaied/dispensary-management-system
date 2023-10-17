import axios from "axios";

const URL="http://localhost:8080/User/Settings/update"

const GET_MANAGEMENT_URL="http://localhost:8080/Admin/Settings"

class SettingsServices{
    updatePatient(details){
        return axios.put(URL,details);
    }
    getAllManagement(){
        return axios.get(GET_MANAGEMENT_URL);
    }


}
export default new SettingsServices()