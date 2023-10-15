import axios from "axios";

const URL="http://localhost:8080/Admin/Pos"

class MedicalRecordServices{
    getRecords(){
        return axios.get(URL);
    }
}

export default new MedicalRecordServices()