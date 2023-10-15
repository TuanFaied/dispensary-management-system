import axios from "axios";

const PATIENT_API_BASE_URL="http://localhost:8080/Admin/PatientDetails"

class PatientServices{
    getPatients(){
        return axios.get(PATIENT_API_BASE_URL);
    }


}
export default new PatientServices()