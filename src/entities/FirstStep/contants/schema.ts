import { phoneRegExp } from "src/shared/lib/regExps";
import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().required("Email является обязательным полем").email("Email заполнен не корректно"),
  phone: yup.string().required("Phone является обязательным полем").matches(phoneRegExp, "Телефонный номер на валидный")
});