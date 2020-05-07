
const axios = require('axios')
export const getFontList = () => {
    return axios
                .post(`/fsb/api/fsb_fonts`,{
                    headers: {'Content-Type': 'application-json'}
                })
                .then(res => {
                    return res.data
                })
             
}