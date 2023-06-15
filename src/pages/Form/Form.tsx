import { ProgressBar } from "src/widget";
import { FourthStep, SecondStep, TrirdStep } from "src/entities";
import cls from "./style.module.scss";

const Form = () => (
  <div className={cls.formPage}>
    <div className={cls.content}>
      <ProgressBar 
        countSteps={3}
        listComponents={[SecondStep, TrirdStep, FourthStep]}
      />
    </div>
  </div>
);
  
export default Form;