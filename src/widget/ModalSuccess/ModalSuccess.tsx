import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesNames } from "src/shared/types/router";
import { Button, Modal, ModalProps, SuccessIcon, Text } from "src/shared/ui";
import cls from "./style.module.scss";

export const ModalSuccess: FC<Omit<ModalProps, "children">> = (props) => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate(RoutesNames.MAIN);
    props.onClose();
  };

  return (
    <Modal
      {...props}
      classNameWrapper={cls.container}
    >
      <Text className={cls.title}>Форма успешно отправлено</Text>
      <div className={cls.iconContainer}><SuccessIcon /></div>
      <Button onClick={goToMainPage}>На главную</Button>
    </Modal>
  );
};