import axios from "axios";
import { toast } from "react-hot-toast";

export default async(method, endPoint, token)=>{
    try {
        let config = {
            method,
            maxBodyLength: Infinity,
            url: `https://newsite.vidiaspot.com/api/${endPoint}`,
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json', 
                'Content-Language': 'en', 
                'X-AppApiToken': 'Uk1DSFlVUVhIRXpHbWt6d2pIZjlPTG15akRPN2tJTUs=', 
                'X-AppType': 'docs', 
                'Authorization': `Bearer ${token}`
            }
        };
        const { data } = await axios.request(config)
        return data;
    } catch (error) {
        toast.error(`${error?.response?.data?.message}`);
        return error;
    }
}


   