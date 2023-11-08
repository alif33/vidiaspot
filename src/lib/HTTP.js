import axios from "axios";
import { toast } from "react-hot-toast";

const api = axios.create({
  baseURL: "https://newsite.vidiaspot.com/api",
});

export default async (method, endPoint, formData, token) => {
    try {
        const __f__ = formData? formData: {}
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Content-Language': 'en',
            'X-AppApiToken': 'Uk1DSFlVUVhIRXpHbWt6d2pIZjlPTG15akRPN2tJTUs=',
            'X-AppType': 'docs',

        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const { data } = await api[method](endPoint, __f__, { headers });
        return data;
    } catch (error) {
        toast.error(`${error?.response?.data?.message}`);
        return error;
    }
};
