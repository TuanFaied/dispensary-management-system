import axios from "axios";

const ALL_MEDICINE_URL="http://localhost:8081/Admin/Stock"

const POST_MEDICINE_DETAILS_URL="http://localhost:8081/Admin/Stock/add"

const PUT_MEDICINE_DETAILS_URL="http://localhost:8081/Admin/Stock/update"

const DELETE_MEDICINE_DETAILS_URL="http://localhost:8081/Admin/Stock/"
class StockServices{
    getAllMedicine(){
        return axios.get(ALL_MEDICINE_URL);
    }
    createMedicine(medicine){
        return axios.post(POST_MEDICINE_DETAILS_URL,medicine);
    }
    updateMedicine(medicine){
        return axios.put(PUT_MEDICINE_DETAILS_URL,medicine);
    }

    deleteMedicine(id){
        return axios.delete(DELETE_MEDICINE_DETAILS_URL + id)
    }


    
}

export default new StockServices()