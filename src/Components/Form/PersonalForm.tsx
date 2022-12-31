import { useForm } from "react-hook-form";
import { DrinksFormSchema } from "Schemas/DrinksFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";
import { IPersonalForm, ISteps } from "Models/Cocktails/form-types";
import { ErrorMessage } from "@hookform/error-message";
import { motion } from "framer-motion";

interface PersonalFormProps {
  setsteps: Dispatch<SetStateAction<ISteps>>;
  steps: ISteps;
}

const PersonalForm: React.FunctionComponent<PersonalFormProps> = ({
  setsteps,
  steps,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(DrinksFormSchema),
  });

  const { t } = useTranslation("translation");

  const onSubmit = (data: IPersonalForm) => {
    setsteps({ step: 2, form: { ...steps.form, ...data } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-8 my-4 container mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col gap-3">
            <Input
              {...register("bar")}
              variant="filled"
              type="text"
              name="bar"
              _focus={{ bgColor: "white" }}
              placeholder={`${t("pub_name")}`}
            />
            <span className="text-red-600">
              <motion.div
                animate={{ x: [null, -15, 15, 0] }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              >
                <ErrorMessage errors={errors} name="bar" />
              </motion.div>
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <Input
              {...register("fname")}
              variant="filled"
              type="text"
              name="fname"
              _focus={{ bgColor: "white" }}
              placeholder={`${t("owner_fname")}`}
            />
            <span className="text-red-600">
              <motion.div
                animate={{ x: [null, -15, 15, 0] }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              >
                <ErrorMessage errors={errors} name="fname" />
              </motion.div>
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <Input
              {...register("lname")}
              variant="filled"
              type="text"
              name="lname"
              _focus={{ bgColor: "white" }}
              placeholder={`${t("owner_lname")}`}
            />
            <span className="text-red-600">
              <motion.div
                animate={{ x: [null, -15, 15, 0] }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              >
                <ErrorMessage errors={errors} name="lname" />
              </motion.div>
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <Input
              {...register("phone")}
              variant="filled"
              type="text"
              name="phone"
              _focus={{ bgColor: "white" }}
              placeholder={`${t("phone_number")}`}
            />
            <span className="text-red-600">
              <motion.div
                animate={{ x: [null, -15, 15, 0] }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              >
                <ErrorMessage errors={errors} name="phone" />
              </motion.div>
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <Input
              {...register("email")}
              variant="filled"
              type="text"
              name="email"
              _focus={{ bgColor: "white" }}
              placeholder={`${t("Email")}`}
            />
            <span className="text-red-600">
              <motion.div
                animate={{ x: [null, -15, 15, 0] }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              >
                <ErrorMessage errors={errors} name="email" />
              </motion.div>
            </span>
          </div>
        </div>
      </div>
      <Button float="right" type="submit">
        {t("next")}
      </Button>
    </form>
  );
};

export default PersonalForm;
