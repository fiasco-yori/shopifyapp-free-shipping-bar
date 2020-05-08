
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
export const duplicateBar = (id) => {
    return axios.post(`/fsb/api/fsb_duplicatebar`, {id})
                .then((res) => {
                    return res.data
                })
}
export const deleteBar = (id) => {
    return axios.post(`/fsb/api/fsb_deletebar`, {id})
                .then((res) => {
                    return res.data
                })
}
export const activateBar = (data) => {
    return axios.post(`/fsb/api/fsb_activate`, {data})
           .then((res) => {
               return res.data
           })
}
export const pauseBar = (data) => {
    return axios.post(`/fsb/api/fsb_pause`, {data})
           .then((res) => {
               return res.data
           })
}
