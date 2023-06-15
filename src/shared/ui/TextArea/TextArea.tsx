import type { FC } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { classNames } from "src/shared/lib/classNames";
import cls from "./style.module.scss";

interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
    labelText?: string;
    onChange?: (value: string) => void;
    classNameTextArea?: string;
    register?: UseFormRegisterReturn;
    classNameContainer?: string;
    classNameLabel?: string;
    errorText?: string;
}

export const TextArea: FC<TextAreaProps> = (props) => {
  const {
    labelText,
    onChange,
    classNameTextArea,
    classNameLabel,
    register,
    classNameContainer,
    errorText,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    onChange?.(value);
  };

  return (
    <div className={classNames(cls.container, {}, [classNameContainer])}>
      <span className={classNames(cls.label, {}, [classNameLabel])}>
        {labelText}
      </span>
      <textarea
        onChange={onChangeHandler}
        className={classNames(cls.textArea, { [cls.inputError]: !!errorText?.length }, [classNameTextArea])}
        {...otherProps}
        {...register}
      />
      <span className={cls.error}>
        {errorText}
      </span>
    </div>
  );
};