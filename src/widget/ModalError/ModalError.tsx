import type { FC } from "react";
import { Button, ButtonVariant, CloseIcon, ErrorIcon, Modal, ModalProps, Text } from "src/shared/ui";
import cls from "./style.module.scss";

export const ModalError: FC<Omit<ModalProps, "children">> = (props) => (
  <Modal
    {...props}
    classNameWrapper={cls.container}
  >
    <div className={cls.header}>
      <Text className={cls.title}>Ошибка</Text>
      <Button variant={ButtonVariant.NOLINE} onClick={props.onClose}><CloseIcon /></Button>
    </div>
    <div className={cls.iconContainer}><ErrorIcon /></div>
    <Button onClick={props.onClose} className={cls.btnClose}>Закрыть</Button>
  </Modal>
);