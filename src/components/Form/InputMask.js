import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { FormHelperText, TextField } from "@material-ui/core";
import ReactInputMask from "react-input-mask";

export default function InputMask({ name, disabled = false, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue("");
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <ReactInputMask
        ref={inputRef}
        defaultValue={defaultValue}
        disabled={disabled}
        {...rest}
      >
        {(inputProps) => (
          <TextField {...inputProps} error={!!error} disabled={disabled} />
        )}
      </ReactInputMask>

      {!!error && <FormHelperText error={!!error}>{error}</FormHelperText>}
    </>
  );
}
