
const axios = require('axios')
export const getShopInfo = () => {
    let url = "/fsb/api/get_shop_info"
    return axios
                .post(url, {
                    headers: {'Content-Type': 'application-json'}
                })
                .then(res => {
                    return res.data
                })
}