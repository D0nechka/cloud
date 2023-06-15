import type { ReactNode } from "react";
import { classNames } from "src/shared/lib/classNames";
import cls from "./style.module.scss";

export interface ModalProps {
    onClose: () => void;
    isOpen: boolean;
    children: ReactNode;
    className?: string;
    classNameWrapper?: string;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, children, onClose, className, classNameWrapper } = props;

  const onDismiss = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if(!isOpen) {
    return null;
  }

  return (
    <div
      className={classNames(cls.modal, {}, [className])}
      onClick={onClose}
    >
      <div
        className={classNames(cls.modalWrapper, {}, [classNameWrapper])}
        onClick={onDismiss}
      >
        {children}
      </div>
    </div>
  );
};