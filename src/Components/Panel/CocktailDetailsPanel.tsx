import { Button, FormLabel } from "@chakra-ui/react";
import Loader from "Components/Animations/Loader";
import { ISteps } from "Models/Cocktails/form-types";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface CocktailDetailsPanelProps {
  steps: ISteps;
  setsteps: Dispatch<SetStateAction<ISteps>>;
}

const CocktailDetailsPanel: React.FunctionComponent<
  CocktailDetailsPanelProps
> = ({ steps, setsteps }) => {
  const { t } = useTranslation("translation");

  const hundleSubmit = () => {
    setsteps({ ...steps, step: 4 });
  };
  return (
    <form className="flex flex-col my-4 container mx-auto">
      {steps.form.category === "" ? (
        <Loader />
      ) : (
        <>
          <div className="grid md:grid-cols-2 px-10 lg:px-0 justify-items-start lg:justify-items-center grid-cols-1 gap-4 text-secondary">
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-xl text-black">
                Personal Details
              </h3>
              <FormLabel>
                {t("pub_name")}:
                <span className="px-2 text-white"> {steps.form.bar}</span>
              </FormLabel>
              <FormLabel>
                {t("owner_fname")}:
                <span className="px-2 text-white"> {steps.form.fname}</span>
              </FormLabel>
              <FormLabel>
                {t("owner_lname")}:
                <span className="px-2 text-white"> {steps.form.lname}</span>
              </FormLabel>
              <FormLabel>
                {t("phone_number")}:
                <span className="px-2 text-white"> {steps.form.phone}</span>
              </FormLabel>
              <FormLabel>
                Email:
                <span className="px-2 text-white">{steps.form.email}</span>
              </FormLabel>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-xl text-black">
                Cocktail Details
              </h3>

              <FormLabel>
                {t("category")}:
                <span className="px-2 text-white"> {steps.form.category}</span>
              </FormLabel>
              <FormLabel>
                {t("type")}:
                <span className="px-2 text-white"> {steps.form.type}</span>
              </FormLabel>
              <FormLabel>
                {t("glass")}:
                <span className="px-2 text-white"> {steps.form.glass}</span>
              </FormLabel>
              <FormLabel>
                {t("ingredients")}:
                <span className="px-2 text-white">
                  {" "}
                  {steps.form.ingredients}
                </span>
              </FormLabel>
            </div>
          </div>
          <Button
            w="32"
            onClick={() => {
              hundleSubmit();
            }}
            alignSelf="center"
          >
            {t("result")}
          </Button>
        </>
      )}
    </form>
  );
};

export default CocktailDetailsPanel;
