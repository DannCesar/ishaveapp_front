import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

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
    </Container>
  );
};
