import { handleResponse, handleError } from "./utils/apiUtils";
import { HOST } from "../../config/dev";

export const searchUser = async(key) =>{
  return await fetch(HOST + "/v1/axe/?search=" + key)
    .then(handleResponse)
    .catch(handleError);
}
