import axios from "axios";

const URL="http://localhost:8080/Admin/Pos/Add"

class AddMedicalRecordServices{
    getRecords(){
        return axios.post(URL);
    }
}

export default new AddMedicalRecordServices()