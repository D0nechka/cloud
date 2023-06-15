import type { FC } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import cls from "./style.module.scss";

interface RadioGroupProps {
    register: UseFormRegisterReturn;
    list: {
        value: string | number;
        label: string;
    }[];
    error: string;
    mainLabel: string;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  register,
  list,
  error,
  mainLabel
}) => (
  <div className={cls.container}>
    <span className={cls.mainLabel}>{mainLabel}</span>
    <div className={cls.list}>
      {list.map((el) => (
        <label className={cls.label} key={el.value}>
          <div className={cls.radioContainer}>
            <div className={cls.divRadio} />
            <input
              className={cls.radio}
              type="radio"
              {...register}
              value={el.value}
            />
          </div>
          {el.label}
        </label>
      ))}
    </div>
    {!!error.length && <span className={cls.error}>{error}</span>}
  </div>
);