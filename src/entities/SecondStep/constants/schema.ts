import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Поле является обязательным").max(50, "Максимальная длина 50"),
  surname: yup.string().required("Поле является обязательным").max(50, "Максимальная длина 50"),
  nickName: yup.string()
    .required("Поле является обязательным").max(30, "Максимальная длина 30")
    .matches(/^[a-zA-Z0-9\s]+$/, "Нельзя использовать спец символы"),
  sex: yup.string().required("Это поле обязательное")
});