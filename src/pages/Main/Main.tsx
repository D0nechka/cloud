import { Profile, FirstStep } from "src/entities";
import cls from "./style.module.scss";

const Main = () => (
  <div className={cls.mainPage}>
    <div className={cls.content}>
      <Profile />
      <div className={cls.separator} />
      <FirstStep />
    </div>
  </div>
);

export default Main;