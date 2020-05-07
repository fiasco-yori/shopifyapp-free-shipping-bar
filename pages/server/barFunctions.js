
const axios = require('axios')
export const getBarList = () => {
    return axios
                .post(`/fsb/api/fsb_bardatas`,{
                    headers: {'Content-Type': 'application-json'}
                })
                .then(res => {
                    return res.data
                })
             
}

export const addBar = (bar) => {
    return axios.post(`/fsb/api/fsb_addbar`,{bar})
            .then((res) => {
                return res.data
            })
}

export const activateBar = (id) => {
    return axios.post(`/fsb/api/fsb_activate`, {id})
           .then((res) => {
               return res.data
           }
}