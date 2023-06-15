import React from "react";
import { NavigateFunction } from "react-router-dom";

export type ListItem = {
    value: string;
    text: string;
}

export type FormStepProps = {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    handleBack: () => void;
}