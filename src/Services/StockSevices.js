import axios from "axios";

const ALL_MEDICINE_URL="http://localhost:8080/Admin/Stock"

class StockServices{
    getAllMedicine(){
        return axios.get(ALL_MEDICINE_URL);
    }
}

export default new StockServices()