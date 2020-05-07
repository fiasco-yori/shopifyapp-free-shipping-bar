const axios = require('axios')
export const getBackgroundList = () => {
    return axios
                .post('/fsb/api/fsb_backgrounds',{
                },{
                    headers: {'Content-Type': 'application-json'}
                })
                .then(res => {
                    return res.data
                })
             
}