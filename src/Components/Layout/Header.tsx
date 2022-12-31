import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { hundleChangeLanguage } from "Ulitis/I18nMethods";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const Language = localStorage.getItem("i18nextLng");
  const { t } = useTranslation("translation");

  return (
    <nav className="w-full flex justify-between px-4 lg:px-20 py-2 items-center">
      <ul className="flex justify-center gap-5  items-center text-white">
        <li className="cursor-pointer">{t("beer")}</li>
        <li className="cursor-pointer">{t("food")}</li>
        <li className="cursor-pointer">{t("event")}</li>
      </ul>

      <Button
        onClick={() => {
          hundleChangeLanguage();
        }}
      >
        {Language?.toLocaleUpperCase()}
      </Button>
    </nav>
  );
};

export default Header;
