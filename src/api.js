import axios from 'axios'

const api = (url,method,body)=>{
    
    var config = {
        method: method,
        url: `https://6dx4acv5kc.execute-api.us-east-1.amazonaws.com/dev/${url}`,
        headers: { 
            
            'Content-Type': 'application/json',
            'Accept':"*/*",
        },
        data:body
    };
    
    return axios(config)    

    
}
        
export default api
