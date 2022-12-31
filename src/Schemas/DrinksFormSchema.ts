import * as yup from "yup";
const lang = localStorage.getItem("i18nextLng");
export const DrinksFormSchema = yup.object({
  bar: yup
    .string()
    .required(lang === "en" ? "Bar name is required" : "Pub adı gerekli"),
  fname: yup
    .string()
    .required(lang === "en" ? "First name is required" : "Ad gereklidir"),
  lname: yup
    .string()
    .required(lang === "en" ? "Last name is required" : "Soyadı gereklidir"),
  email: yup
    .string()
    .email(lang === "en" ? "Email must be valid" : "E-posta geçerli olmalıdır")
    .required(lang === "en" ? "Email is required" : "Email gereklidir"),
  phone: yup
    .string()
    .required(
      lang === "en" ? "Phone Number is required" : "Telefon Numarası gerekli"
    ),
});

export const CocktailFormSchema = yup.object({
  category: yup
    .string()
    .required(lang === "en" ? "Category is required" : "Kategori gerekli"),
  type: yup
    .string()
    .required(
      lang === "en" ? "Drink Type is required" : "İçecek Türü gereklidir"
    ),
  glass: yup
    .string()
    .required(lang === "en" ? "Glass Type is required" : "Cam Türü gereklidir"),
  ingredients: yup
    .array()
    .required(
      lang === "en"
        ? "Please check one or more Ingredients"
        : "Lütfen bir veya daha fazla Malzemeyi kontrol edin"
    ),
});
