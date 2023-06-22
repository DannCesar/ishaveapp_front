import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import ReactTooltip from "react-tooltip"

import 'react-tooltip/dist/react-tooltip.css'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  form: any;
  name: string;
  label: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  form,
  name,
  label,
  type,
  placeholder,
  ...rest
}) => {
  return (
    <Container>
      <div className="inputContainer">
      <label htmlFor={label}>{label}</label>
        <input
          id={name}
          placeholder={placeholder}
          type={type}
          onChange={(e) => form.setFieldValue(name, e.target.value)}
          value={form.values[name]}
          {...rest}
        />
      </div>
      <div>
      {/* {
        form.error[name] &&(
          <div className="tooltipError">
            <p data-for="tool" data-tip="heello">Tooltip</p>
             <ReactTooltip type="error" id="tool"/>
          </div>
        )
      } */}
      
      </div>
    </Container>
  );
};
