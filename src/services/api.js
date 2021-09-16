//'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd'
import Axios from "axios";

const KuppiApi = {
    async getAll(){
        return await Axios({
            method: "get",
            url: "https://dev-api.kuppi.com.br/example/products",
            headers: {
                'auth-token' : 'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd'
            }
        })
    },

    async getOne(id){
        return await Axios({
            method: "get",
            url: `https://dev-api.kuppi.com.br/example/products/${id}`,
            headers: {
                'auth-token' : 'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd'
            }
        })
    }
}
export default KuppiApi