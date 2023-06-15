import type { FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculatePercents } from "src/shared/lib/countPercent";
import { createNumberArray } from "src/shared/lib/arrays";
import { generateDot } from "./utils/generateDot";
import { classNames } from "src/shared/lib/classNames";
import { FormStepProps } from "src/shared/types/general";
import cls from "./style.module.scss";

interface ProgressBarProps {
  countSteps: number;
  listComponents: FC<FormStepProps>[];
}

export const ProgressBar: FC<ProgressBarProps> = ({
  countSteps,
  listComponents
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleBack = () => {
    if(currentStep === 0) {
      navigate(-1);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const widthPercents = calculatePercents(currentStep, countSteps - 1);
  const arrayNumber = createNumberArray(countSteps);
  const CurrentElement = listComponents[currentStep];

  return (
    <div className={cls.container}>
      <div className={cls.progress}>
        <div 
          className={cls.colorProgress} 
          style={{ width: `${widthPercents}%` }} 
        />
        <div className={cls.containerDots}>
          {arrayNumber.map((num) => {
            const Element = generateDot(currentStep + 1, num);

            return <Element key={num} />;
          })}
        </div>
      </div>
      <div className={cls.containerNumber}>
        {arrayNumber.map((el) => (
          <div 
            key={el} 
            className={classNames(cls.numberEl, { [cls.numberElActive]: el <= currentStep + 1 }, [])}
          >{el}</div>
        ))}
      </div>
      {CurrentElement ? (
        <CurrentElement 
          setCurrentStep={setCurrentStep}
          handleBack={handleBack}
        />
      ) : null}
    </div>
  );
};