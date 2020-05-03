const axios = require('axios')
const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, HOST, } = process.env;
export const getList = () => {
    return axios
                .post(`${HOST}/fsb/api/fsb_templates`,{
                    headers: {'Content-Type': 'application-json'}
                })
                .then(res => {
                    console.log(res.data)
                    var data = []
                    Object.key(res.data).forEach((key) => {
                        var val = res.data[key]
                        data.push([val.name], val.id)
                    })

                    return data
                })
             
}