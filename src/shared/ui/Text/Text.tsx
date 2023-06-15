import type { FC, ReactNode } from "react";
import { classNames } from "src/shared/lib/classNames";
import cls from "./style.module.scss";

interface TextProps {
    text?: string;
    children: ReactNode;
    className?: string;
}

export const Text: FC<TextProps> = (props) => {
  const { text, children, className } = props;

  return (
    <span
      className={classNames(cls.text, {}, [className])}
    >{text || children}</span>
  );
};