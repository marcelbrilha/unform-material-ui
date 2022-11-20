import React, { useRef, useEffect } from "react";
import ReactSelect from "react-select";
import { useField } from "@unform/core";
import { FormHelperText } from "@material-ui/core";

export default function Select({ name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "state.value",
      clearValue: (ref) => {
        ref.select.clearValue();
      },
      setValue: (ref, value) => {
        let _tmp = rest.options.find(
          (option) => String(option.value) === String(value)
        );

        if (rest.isMulti) {
          _tmp = rest.options.filter(
            (option) => String(option.value) === String(value)
          );
        }

        ref.select.setValue(_tmp);
      },
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) return [];
          return ref.state.value.map((option) => option.value);
        } else {
          if (!ref.state.value) return "";
          return ref.state.value.value;
        }
      },
    });
  }, [defaultValue, fieldName, registerField, rest.isMulti, rest.options]);

  const getDefaultValue = (defaultValue) => {
    if (!defaultValue) return null;
    if (!rest.isMulti) {
      return rest.options.find(
        (option) => String(option.value) === String(defaultValue)
      );
    }

    return rest.options.filter(
      (option) => String(option.value) === String(defaultValue)
    );
  };

  return (
    <>
      <ReactSelect
        defaultValue={getDefaultValue(defaultValue)}
        ref={selectRef}
        {...rest}
      />
      {!!error && <FormHelperText error={!!error}>{error}</FormHelperText>}
    </>
  );
}
