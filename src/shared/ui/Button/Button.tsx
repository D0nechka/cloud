import type { FC, ReactNode } from "react";
import { classNames } from "src/shared/lib/classNames";
import cls from "./style.module.scss";

export enum ButtonVariant {
    PRIMARY = "primary",
    OUTLINE = "outline",
    NOLINE = "noline"
}

type ButtonProps = {
    children?: ReactNode;
    text?: string;
    variant?: ButtonVariant;
    className?: string,
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    text,
    variant = ButtonVariant.PRIMARY,
    className,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.button, {}, [ className, cls[variant] ])}
      {...otherProps}
    >
      {children || text}
    </button>
  );
};