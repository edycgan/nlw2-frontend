import React, { InputHTMLAttributes } from "react";
import NumberFormat from "react-number-format";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value: string;
  onValueChange: any;
}

const PhoneNumberInput: React.FC<InputProps> = ({
  name,
  label,
  value,
  onValueChange,
}) => {
  return (
    <div className="phone-number-input-block">
      <label htmlFor={name}>{label}</label>
      <NumberFormat
        id={name}
        isNumericString
        value={value}
        format="(##) # #### ####"
        onValueChange={onValueChange}
      />
    </div>
  );
};

export default PhoneNumberInput;
