import axios from "axios";

export const requests = {
    post: (url, data)=> axios.post(url, data).then((res)=> res.data)
}
