import i18next from "i18next";

export const hundleChangeLanguage = () => {
  const Language = localStorage.getItem("i18nextLng");
  if (Language === "en") {
    i18next.changeLanguage("tr");
    localStorage.setItem("i18nextLng", "tr");
  } else {
    i18next.changeLanguage("en");
    localStorage.setItem("i18nextLng", "en");
  }
};
