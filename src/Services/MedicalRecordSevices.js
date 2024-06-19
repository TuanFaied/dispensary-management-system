import axios from "axios";

const URL="http://localhost:8081/Admin/Pos"

class MedicalRecordServices{
    getRecords(){
        return axios.get(URL);
    }
    getUserRecords(url){
        return axios.get(url)
    }


}

export default new MedicalRecordServices()