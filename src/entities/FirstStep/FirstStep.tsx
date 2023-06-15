import type { FirstStepValues } from "src/shared/types/form";
import type { ChangeEvent } from "react";
import { RoutesNames } from "src/shared/types/router";
import { Button, Input } from "src/shared/ui";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { changeFirstStep, selectFormEmail, selectFormPhone } from "src/store/slices";
import { getPhoneMask } from "src/shared/lib/masks";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./contants/schema";
import cls from "./style.module.scss";

export const FirstStep = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const email = useAppSelector(selectFormEmail);
  const phone = useAppSelector(selectFormPhone);

  const { handleSubmit, register, formState: { errors }, setValue } = useForm<FirstStepValues>({
    defaultValues: {
      email,
      phone
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FirstStepValues) => {
    dispatch(changeFirstStep(data));
    navigate(RoutesNames.FORM);
  };

  const changePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("phone", getPhoneMask(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        classNameContainer={cls.inputContainer}
        placeholder="+7 999 999-99-99" 
        labelText="Номер телефона" 
        register={{ ...register("phone", {
          onChange: changePhone
        }) }}
        errorText={errors.phone?.message ?? ""}
        classNameInput={cls.input}
      />
      <Input 
        classNameContainer={cls.inputContainer}
        placeholder="dan_amerikan@example.com" 
        labelText="Email" 
        register={{ ...register("email") }}
        errorText={errors.email?.message ?? ""}
        classNameInput={cls.input}
      />
      <Button 
        className={cls.btnStart}
        type="submit"
      >
        Начать
      </Button>
    </form>
  );
};