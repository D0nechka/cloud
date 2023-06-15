import axios from "axios";
import { AllStepsType } from "src/shared/types/form";

export const sendInfoForm = async (data: AllStepsType) => {
  const { data: response } = await axios.post("https://api.sbercloud.ru/content/v1/bootcamp/frontend", data);
  return response.data;
};