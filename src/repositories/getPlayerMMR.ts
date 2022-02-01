import axios from "axios";

export const getPlayerMMR = (): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    const url = "http://localhost:8081/getPlayerMMR";
    axios.get(url).then((x) => {
      resolve(x.data);
    });
  });
};
