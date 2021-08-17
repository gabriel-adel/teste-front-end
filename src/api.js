import axios from 'axios'

const api = (path,method,body)=>{
    
    var config = {
        method: method,
        url: `https://2ib0rv99m0.execute-api.us-east-1.amazonaws.com/dev/${path}`,
        headers: { 
            
            'Content-Type': 'application/json',
            'Accept':"*/*",
        },
        data:body
    };
    
    return axios(config)    

    
}
        
export default api
