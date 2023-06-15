import { useState, type FC } from "react";
import type { FormStepProps } from "src/shared/types/general";
import type { FourthStepValues } from "src/shared/types/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { changeFourthStep, resetForm, selectFormAbout, selectFormState } from "src/store/slices";
import { Button, ButtonVariant, Text, TextArea } from "src/shared/ui";
import { countCharacters } from "src/shared/lib/string";
import { ModalSuccess, ModalError } from "src/widget";
import { useMutation } from "react-query";
import { sendInfoForm } from "src/services/form/sendInfoForm";
import { schema } from "./constants/schema";
import cls from "./style.module.scss";

export const FourthStep: FC<FormStepProps> = ({
  handleBack
}) => {
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);
  const dispatch = useAppDispatch();

  const about = useAppSelector(selectFormAbout);
  const state = useAppSelector(selectFormState);

  const { register, formState: { errors }, handleSubmit, watch } = useForm<FourthStepValues>({
    defaultValues: {
      about
    },
    resolver: yupResolver(schema)
  });

  const { mutate, isLoading } = useMutation(sendInfoForm, {
    onSuccess: () => {
      setIsOpenSuccess(true);
      dispatch(resetForm());
    },
    onError: () => {
      setIsOpenError(true);
    }
  });

  const onSubmit = (data: FourthStepValues) => {
    dispatch(changeFourthStep(data));
    mutate(state);
  };

  const handleCloseSuccess = () => {
    setIsOpenSuccess(false);
  };

  const handleCloseError = () => {
    setIsOpenError(false);
  };

  const textareaValue = watch("about");

  return (
    <div className={cls.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextArea
          classNameContainer={cls.textAreaContainer}
          placeholder="About me"
          labelText="About"
          register={{ ...register("about") }}
          errorText={errors.about?.message ?? ""}
        />
        <div className={cls.containerCounter}>
          <Text className={cls.counter}>
            {countCharacters(textareaValue)} / 200
          </Text>
        </div>
        <div className={cls.actionContainer} >
          <Button type="button" onClick={handleBack} variant={ButtonVariant.OUTLINE}>Назад</Button>
          <Button type="submit" disabled={isLoading}>Отправить</Button>
        </div>
      </form>
      <ModalSuccess isOpen={isOpenSuccess} onClose={handleCloseSuccess} />
      <ModalError isOpen={isOpenError} onClose={handleCloseError} />
    </div>
  );
};