import axios from "axios";

const ALL_MEDICINE_URL="http://localhost:8080/Admin/Stock"

const POST_MEDICINE_DETAILS_URL="http://localhost:8080/Admin/Stock/add"

class StockServices{
    getAllMedicine(){
        return axios.get(ALL_MEDICINE_URL);
    }
    createMedicine(medicine){
        return axios.post(POST_MEDICINE_DETAILS_URL,medicine);
    }

    
}

export default new StockServices()