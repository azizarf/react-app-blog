import { dataUrl } from "../configuration/configUrl";

export const getTheData = async () => {
    try {
        const response = await getAPICall(dataUrl);
        return response.data;
    }
    catch(error){
        return error.response;
    }
}