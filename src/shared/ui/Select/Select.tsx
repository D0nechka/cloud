import type { FC } from "react";
import { useState, useMemo } from "react";
import { ArrowDownIcon } from "../icons";
import { classNames } from "src/shared/lib/classNames";
import { ListItem } from "src/shared/types/general";
import cls from "./style.module.scss";

interface SelectProps {
    labelText?: string;
    list: Array<ListItem>;
    handleSelectItem: (value: ListItem) => void;
    selectedValue: string | null;
    className?: string;
    classNameContainer?: string;
    errorText?: string;
}

const heightListItem = 36;

export const Select: FC<SelectProps> = (props) => {
  const { 
    labelText, 
    list, 
    selectedValue, 
    className, 
    handleSelectItem,
    classNameContainer,
    errorText
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleIsOpen = () => setIsOpen((prev) => !prev);

  const handleChangeValue = (value: ListItem) => {
    setIsOpen(false);

    handleSelectItem(value);
  };

  const currentSelectedItem: string = useMemo(() => 
    list.find((el) => el.value === selectedValue)?.text ?? "Не выбрано", 
  [selectedValue]);

  return (
    <div className={classNames(cls.container, {}, [classNameContainer])}>
      <span className={cls.label}>{labelText}</span>
      <div className={classNames(cls.field, { [cls.fieldError]: !!errorText?.length }, [className])}>
        <span>{currentSelectedItem}</span>
        <button type="button" onClick={handleToggleIsOpen} className={cls.btnOpen}>
          <ArrowDownIcon />
        </button>
      </div>
      <span className={cls.error}>
        {errorText}
      </span>
      {isOpen && (
        <div className={cls.list} style={{
          bottom: `-${list.length * heightListItem}px`
        }}>
          {list.map((el) => (
            <button 
              type="button"
              className={cls.listItem}
              key={el.value}
              onClick={() => handleChangeValue(el)}
            >{el.text}</button>
          ))}
        </div>
      )}
    </div>
  );
};