import type { FC } from "react";
import type { FormStepProps } from "src/shared/types/general";
import { useForm, useFieldArray } from "react-hook-form";
import { ThirdStepValues } from "src/shared/types/form";
import { Button, ButtonVariant, CheckboxGroup, Input, Text, RadioGroup } from "src/shared/ui";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { changeThirdStep, selectFormAdvatages, selectFormCheckbox, selectFormRadio } from "src/store/slices";
import { listCheckbox, listRadio } from "./contants/lists";
import cls from "./style.module.scss";

export const TrirdStep: FC<FormStepProps> = ({
  setCurrentStep,
  handleBack
}) => {
  const dispatch = useAppDispatch();

  const advantages = useAppSelector(selectFormAdvatages);
  const checkbox = useAppSelector(selectFormCheckbox);
  const radio = useAppSelector(selectFormRadio);

  const { register, control, handleSubmit, getValues, formState: { errors } } = useForm<ThirdStepValues>({
    defaultValues: {
      advantages,
      checkbox,
      radio
    }
  });
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
    rules: {
      required: {
        value: true,
        message: "Добавьте хотя-бы один элемент"
      }
    }
  });

  const handleNext = (data: ThirdStepValues) => {
    dispatch(changeThirdStep(data));
    setCurrentStep((prev) => prev + 1);
  };

  const rootAdvError = errors.advantages?.root?.message;
  const checkBoxError = errors.checkbox?.message;
  const radioError = errors.radio?.message;

  return (
    <div className={cls.container}>
      <form onSubmit={handleSubmit(handleNext)}>
        {!!getValues("advantages")?.length && (
          <Text className={cls.label}>Advantages</Text>
        )}
        {fields.map((field, index) => (
          <div key={field.id} className={cls.inputEl}>
            <Input
              classNameInput={cls.input}
              placeholder="React"
              errorText={errors?.advantages ? errors?.advantages[index]?.value?.message : ""}
              handleRemove={() => remove(index)}
              register={{ ...register(`advantages.${index}.value`, {
                required: { value: true, message: "Поле обязательное" }
              }) }}
            />
          </div>
        ))}
        {!!rootAdvError?.length && <Text className={cls.rootError}>{rootAdvError}</Text>}
        <Button 
          type="button" 
          onClick={() => append({ value: "" })}
          variant={ButtonVariant.OUTLINE}
          className={cls.btnAdd}
        >+</Button>
        <CheckboxGroup
          list={listCheckbox}
          error={checkBoxError ?? ""}
          register={{ ...register("checkbox", {
            required: { value: true, message: "Должен быть выбран хотя бы один элемент" }
          }) }}
          mainLabel="Checkbox group"
        />
        <RadioGroup
          register={{ ...register("radio", {
            required: { value: true, message: "Должен быть выбран хотя бы один элемент" }
          }) }}
          list={listRadio}
          error={radioError ?? ""}
          mainLabel="Radio group"
        />
        <div className={cls.actionContainer} >
          <Button type="button" onClick={handleBack} variant={ButtonVariant.OUTLINE}>Назад</Button>
          <Button type="submit">Далее</Button>
        </div>
      </form>
    </div>
  );
};