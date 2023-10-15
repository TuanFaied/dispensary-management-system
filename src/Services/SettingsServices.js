import axios from "axios";

const URL="http://localhost:8080/Admin/Settings/update"

const GET_MANAGEMENT_URL="http://localhost:8080/Admin/Settings"

class SettingsServices{
    updateManagement(details){
        return axios.put(URL,details);
    }
    getAllManagement(){
        return axios.get(GET_MANAGEMENT_URL);
    }


}
export default new SettingsServices()