import axios from "axios";

const URL="http://localhost:8080/Admin/Pos/Add"

class AddMedicalRecordServices{
    createRecords(record){
        return axios.post(URL,record);
    }
}

export default new AddMedicalRecordServices()