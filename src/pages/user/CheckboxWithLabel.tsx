import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ checked }) => (checked ? "#007bff" : "#ccc")};
  background-color: ${({ checked }) => (checked ? "#007bff" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;

  &:after {
    content: "✔";
    font-size: 14px;
    color: white;
    display: ${({ checked }) => (checked ? "block" : "none")};
  }
`;

const Label = styled.span`
  font-size: 16px;
  color: #333;
`;

const CheckboxWithLabel = React.memo(
  ({
    checked,
    onChange,
    label,
  }: {
    checked: boolean;
    onChange: () => void;
    label: string;
  }) => {
    return (
      <CheckboxContainer>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked} />
        <Label>{label}</Label>
      </CheckboxContainer>
    );
  }
);

export default CheckboxWithLabel;
