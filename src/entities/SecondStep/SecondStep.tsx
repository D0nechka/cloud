import type { FC } from "react";
import type { FormStepProps, ListItem } from "src/shared/types/general";
import { useForm, Controller } from "react-hook-form";
import { SecondStepValues } from "src/shared/types/form";
import { Button, ButtonVariant, Input, Select } from "src/shared/ui";
import { listSex } from "./constants/listSex";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { changeSecondStep, selectFormName, selectFormNickName, selectFormSex, selectFormSurname } from "src/store/slices";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./constants/schema";
import cls from "./style.module.scss";

export const SecondStep: FC<FormStepProps> = ({
  setCurrentStep,
  handleBack
}) => {
  const dispatch = useAppDispatch();

  const sex = useAppSelector(selectFormSex);
  const name = useAppSelector(selectFormName);
  const surname = useAppSelector(selectFormSurname);
  const nickName = useAppSelector(selectFormNickName);

  const { register, getValues, setValue, control, formState: { errors }, handleSubmit, setError } = useForm<SecondStepValues>({
    defaultValues: {
      sex,
      name,
      surname,
      nickName
    },
    resolver: yupResolver(schema)
  });

  const handleSelectItem = (item: ListItem) => {
    setError("sex", {
      message: ""
    });
    setValue("sex", item.value);
  };

  const handleNext = (data: SecondStepValues) => {
    dispatch(changeSecondStep(data));
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className={cls.container}>
      <form onSubmit={handleSubmit(handleNext)}>
        <Input
          labelText="Nickname"
          placeholder="demon228"
          classNameInput={cls.input}
          classNameContainer={cls.firstInputContainer}
          errorText={errors.nickName?.message ?? ""}
          register={{ ...register("nickName") }}
        />
        <Input
          labelText="Name"
          placeholder="Dan"
          classNameContainer={cls.inputContainer}
          classNameInput={cls.input}
          errorText={errors.name?.message ?? ""}
          register={{ ...register("name") }}
        />
        <Input
          labelText="Surname"
          placeholder="Amerikan"
          classNameContainer={cls.inputContainer}
          classNameInput={cls.input}
          errorText={errors.surname?.message ?? ""}
          register={{ ...register("surname") }}
        />
        <Controller
          control={control}
          name="sex"
          render={() => (
            <Select
              list={listSex}
              selectedValue={getValues("sex")}
              handleSelectItem={handleSelectItem}
              classNameContainer={cls.selectContainer}
              errorText={errors.sex?.message ?? ""}
              labelText="Sex"
            />
          )}
        />
        <div className={cls.actionContainer} >
          <Button type="button" onClick={handleBack} variant={ButtonVariant.OUTLINE}>Назад</Button>
          <Button type="submit">Далее</Button>
        </div>
      </form>
    </div>
  );
};