import { Button } from "@chakra-ui/react";
import Loader from "Components/Animations/Loader";
import { useAppSelector } from "Hooks/useReduxHooks";
import { useSelectCocktail } from "Hooks/useSelectCocktail";
import { ICocktailsList } from "Models/Cocktails/cocktails-types";
import { ISteps } from "Models/Cocktails/form-types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface CocktailResultPanelProps {
  steps: ISteps;
  setsteps: Dispatch<SetStateAction<ISteps>>;
}

const CocktailResultPanel: React.FunctionComponent<
  CocktailResultPanelProps
> = ({ steps, setsteps }) => {
  const cocktails = useAppSelector((state) => state.cocktails);
  const { selectCocktail } = useSelectCocktail(cocktails.drinks);
  //Only to show the Loader
  const [loader, setloader] = useState(true);
  const [cocktail, setCocktail] = useState<ICocktailsList["drinks"]>();

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
      setCocktail(selectCocktail(steps.form));
    }, 2000);
  }, [selectCocktail, steps.form]);

  const hundleReset = () => {
    setsteps({
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
  };
  return (
    <form className="flex flex-col my-4 container mx-auto">
      {loader ? (
        <Loader />
      ) : (
        <div className="grid px-10 lg:px-0 justify-items-center grid-cols-1 gap-4 text-secondary">
          {cocktail?.length === 0 ? (
            <>
              <span className="text-center text-xl">
                No Cocktail matches your seletions
              </span>
              <Button
                onClick={() => {
                  hundleReset();
                }}
              >
                Reset
              </Button>
            </>
          ) : (
            <div className="flex flex-col gap-5 items-center justify-center w-full">
              <h4>
                Drink Name :{" "}
                <span className="text-white">{cocktail?.[0].strDrink}</span>
              </h4>
              <img
                className="w-80"
                src={cocktail?.[0].strDrinkThumb}
                alt={cocktail?.[0].strDrink}
              />
              <Button
                onClick={() => {
                  hundleReset();
                }}
              >
                Start Again
              </Button>
            </div>
          )}
        </div>
      )}
    </form>
  );
};

export default CocktailResultPanel;
