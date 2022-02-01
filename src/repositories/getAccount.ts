import axios from "axios"

export const getAccount =(): Promise<any>=>{
    return new Promise<any>((resolve, reject) => {
        const url="http://localhost:8081/getAccount"
        axios.get(url).then(x=>{
            resolve(x.data)
        })
    });
}
