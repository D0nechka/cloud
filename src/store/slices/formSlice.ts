import type { PayloadAction } from "@reduxjs/toolkit";
import type { AllStepsType, FirstStepValues, FourthStepValues, SecondStepValues, ThirdStepValues } from "src/shared/types/form";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: AllStepsType = {
  phone: "",
  email: "",
  sex: "",
  nickName: "",
  surname: "",
  name: "",
  about: "",
  checkbox: [],
  radio: null,
  advantages: [
    {
      value: ""
    }
  ]
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeFirstStep: (state, action: PayloadAction<FirstStepValues>) => {
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    changeSecondStep: (state, action: PayloadAction<SecondStepValues>) => {
      state.sex = action.payload.sex;
      state.nickName = action.payload.nickName;
      state.surname = action.payload.surname;
      state.name = action.payload.name;
    },
    changeThirdStep: (state, action: PayloadAction<ThirdStepValues>) => {
      state.advantages = action.payload.advantages;
      state.checkbox = action.payload.checkbox;
      state.radio = action.payload.radio;
    },
    changeFourthStep: (state, action: PayloadAction<FourthStepValues>) => {
      state.about = action.payload.about;
    },
    resetForm: () => initialState
  }
});

export const { changeFirstStep, changeSecondStep, changeThirdStep, changeFourthStep, resetForm } = formSlice.actions;

export const selectFormEmail = (state: RootState) => state.form.email;
export const selectFormPhone = (state: RootState) => state.form.phone;
export const selectFormName = (state: RootState) => state.form.name;
export const selectFormNickName = (state: RootState) => state.form.nickName;
export const selectFormSex = (state: RootState) => state.form.sex;
export const selectFormSurname = (state: RootState) => state.form.surname;
export const selectFormAdvatages = (state: RootState) => state.form.advantages;
export const selectFormCheckbox = (state: RootState) => state.form.checkbox;
export const selectFormRadio = (state: RootState) => state.form.radio;
export const selectFormAbout = (state: RootState) => state.form.about;
export const selectFormState = (state: RootState) => state.form;

export const formReducer = formSlice.reducer;