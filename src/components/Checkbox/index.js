import React from "react";

import { InputContainer } from "./styles";

function Checkbox({ value, onChange, checked }) {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={onChange}
        type="checkbox"
        checked={checked}
      />
    </InputContainer>
  );
}

export default Checkbox;
