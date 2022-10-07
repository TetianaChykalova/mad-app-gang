import * as axios from "axios";

let apiData;
export const getApi = () => {
    axios.get('https://api.spacexdata.com/v4/dragons')
        .then(response => {
            apiData = response;
            return apiData;
        })
}
