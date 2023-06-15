import * as yup from "yup";

export const schema = yup.object().shape({
  about: yup
    .string()
    .required("Является обязательным полем")
    .test("no-spaces", "Текст не может содержать только пробелы", (value) => {
      if (!value) return true;
      return value.replace(/\s/g, "").length > 0;
    })
    .test(
      "max-length",
      "Максимальное кол-во символов",
      (value) => {
        if (!value) return true;
        return value.replace(/\s/g, "").length <= 200;
      }
    )
});