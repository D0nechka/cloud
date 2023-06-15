import type { FC } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { classNames } from "src/shared/lib/classNames";
import { Button, ButtonVariant } from "../Button/Button";
import { DeleteIcon } from "../icons";
import cls from "./style.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    errorText?: string;
    register?: UseFormRegisterReturn;
    handleRemove?: () => void;
}

export const Input: FC<InputProps> = (props) => {
  const {
    labelText,
    classNameInput,
    classNameLabel,
    classNameContainer,
    register,
    errorText,
    handleRemove,
    ...otherProps
  } = props;

  return (
    <div className={classNames(cls.container, {}, [classNameContainer])}>
      <span className={classNames(cls.label, {}, [classNameLabel])}>
        {labelText}
      </span>
      <div className={cls.containerActions}>
        <input
          className={classNames(cls.input, { [cls.inputError]: !!errorText?.length }, [classNameInput])}
          autoComplete="off"
          {...otherProps}
          {...register}
        />
        {handleRemove && (
          <Button
            variant={ButtonVariant.NOLINE}
            onClick={handleRemove}
            className={cls.btnRemove}
          >
            <DeleteIcon />
          </Button>
        )}
      </div>
      <span className={cls.error}>
        {errorText}
      </span>
    </div>
  );
};