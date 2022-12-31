import { Text } from "@chakra-ui/react";
import FloatingItems from "Components/Animations/FloatingItems";
import CocktailForm from "Components/Form/CocktailForm";
import PersonalForm from "Components/Form/PersonalForm";
import Layout from "Components/Layout/Layout";
import CocktailDetailsPanel from "Components/Panel/CocktailDetailsPanel";
import CocktailResultPanel from "Components/Panel/CocktailResultPanel";
import { useAppDispatch } from "Hooks/useReduxHooks";
import { ISteps } from "Models/Cocktails/form-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchCocktailList } from "Redux/cocktails/cocktailList";

function App() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("translation");
  const [steps, setsteps] = useState<ISteps>({
    step: 1,
    form: {
      bar: "",
      email: "",
      fname: "",
      lname: "",
      phone: "",
      category: "",
      glass: "",
      ingredients: [],
      type: "",
    },
  });

  useEffect(() => {
    dispatch(fetchCocktailList());
  }, [dispatch]);

  return (
    <Layout>
      <div className="flex w-full justify-center items-center gap-3 flex-col">
        <FloatingItems />
        <Text as="p" className="text-3xl text-white">
          {t("welcome")}
        </Text>
        <Text as="h1" className="text-xl text-white">
          {t("find_out")}
        </Text>
        <div className="z-20 bg-white bg-opacity-25 rounded-2xl p-8">
          {(() => {
            switch (steps?.step) {
              case 1:
                return <PersonalForm steps={steps} setsteps={setsteps} />;
              case 2:
                return <CocktailForm steps={steps} setsteps={setsteps} />;
              case 3:
                return (
                  <CocktailDetailsPanel steps={steps} setsteps={setsteps} />
                );
              case 4:
                return (
                  <CocktailResultPanel setsteps={setsteps} steps={steps} />
                );
            }
          })()}
        </div>
      </div>
    </Layout>
  );
}

export default App;
