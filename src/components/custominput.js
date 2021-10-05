import { useState } from "react";

const Input = (validate) => {
  const [EnteredValue, SetEnteredvalue] = useState("");
  const [focus, setfocus] = useState(null);
  const ValueIsValid = validate(EnteredValue);
  const HasError = !ValueIsValid && focus;
  const valueInputChangeHandler = (e) => {
    SetEnteredvalue(e.target.value);
    setfocus(true);
  };
  const blurHandler = () => {
    setfocus(true);
  };
  const reset = () => {
    SetEnteredvalue("");
    setfocus(false);
  };
  return {
    EnteredValue,
    focus,
    setfocus,
    SetEnteredvalue,
    ValueIsValid,
    HasError,
    valueInputChangeHandler,
    blurHandler,
    reset,
  };
};
export default Input;
