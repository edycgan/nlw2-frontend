import React, { InputHTMLAttributes } from "react";
import NumberFormat from "react-number-format";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value: string;
  maxLength: number;
  onValueChange: any;
}

const CurrencyInput: React.FC<InputProps> = ({
  name,
  label,
  value,
  maxLength,
  onValueChange,
}) => {
  return (
    <div className="currency-input-block">
      <label htmlFor={name}>{label}</label>
      <NumberFormat
        id={name}
        allowEmptyFormatting
        allowNegative={false}
        prefix="R$ "
        isNumericString
        maxLength={maxLength}
        value={value}
        decimalScale={2}
        onValueChange={onValueChange}
        thousandSeparator="."
        decimalSeparator=","
      />
    </div>
  );
};

export default CurrencyInput;
