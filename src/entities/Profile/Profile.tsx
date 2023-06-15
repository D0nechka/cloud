import { FolderIcon, Text } from "src/shared/ui";
import { Link } from "react-router-dom";
import { links } from "./constants/links";
import cls from "./style.module.scss";

export const Profile = () => (
  <div className={cls.container}>
    <div className={cls.avatar}>
      <Text className={cls.inicials}>ДА</Text>
    </div>
    <div className={cls.info}>
      <Text>Алексеев Данил</Text>
      <div className={cls.links}>
        {links.map((item) => (
          <div className={cls.itemLink} key={item.to}>
            <FolderIcon />
            <Link 
              to={item.to} 
              target="_blank"
              className={cls.linkTo}
            >
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);