import type { FC } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import cls from "./style.module.scss";

interface CheckboxGroupFormProps {
    list: {
        id: string;
        label: string;
    }[];
    register?: UseFormRegisterReturn;
    error: string;
    mainLabel: string;
}

export const CheckboxGroup: FC<CheckboxGroupFormProps> = ({
  register,
  list,
  error,
  mainLabel
}) => (
  <div className={cls.container}>
    <span className={cls.mainLabel}>{mainLabel}</span>
    {list.map((language) => (
      <div key={language.id} className={cls.el}>
        <label className={cls.label}>
          <input
            type="checkbox"
            {...register}
            value={language.id}
            className={cls.checkbox}
          />
          {language.label}
        </label>
      </div>
    ))}
    {!!error.length && <span className={cls.error}>{error}</span>}
  </div>
);
