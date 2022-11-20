import React, { useRef, useState, useEffect, memo } from "react";
import { debounce } from "lodash";
import { useField } from "@unform/core";
import {
  CircularProgress,
  Icon,
  Tooltip,
  FormHelperText,
} from "@material-ui/core";
import Select from "react-select";
import axios from "axios";

import Style, { customStyles } from "./style";

function SelectRequest({ name, url, configOptions, handleError, ...rest }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorIcon, setErrorIcon] = useState(false);
  const [retry, setRetry] = useState(false);

  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const classes = Style();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "state.value",
      clearValue: (ref) => {
        ref.select.clearValue();
      },
      setValue: (ref, value) => {
        let _tmp = ref.props.options.find(
          (option) => String(option.value) === String(value)
        );

        if (rest.isMulti) {
          _tmp = ref.props.options.filter(
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
  }, [fieldName, registerField, rest.isMulti]);

  useEffect(() => {
    const mapOptions = (data) => {
      const { label, value } = configOptions;

      return data
        .sort((a, b) => String(a[label]).localeCompare(String(b[label])))
        .map((options) => {
          return {
            label: options[label],
            value: options[value],
          };
        });
    };

    const load = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(url);
        setLoading(false);

        if (data && Array.isArray(data)) {
          const options = mapOptions(data);
          setOptions(options);
        } else {
          setErrorIcon(true);
          if (handleError) handleError(Error("Invalid response data"));
        }
      } catch (error) {
        console.log(`Error in select request: ${error}`);
        setLoading(false);
        setErrorIcon(true);
        if (handleError) handleError(error);
      }
    };

    load();
  }, [configOptions, handleError, url, retry]);

  const getDefaultValue = (defaultValue) => {
    if (!defaultValue) return null;
    if (!rest.isMulti) {
      return options.find(
        (option) => String(option.value) === String(defaultValue)
      );
    }

    return options.filter(
      (option) => String(option.value) === String(defaultValue)
    );
  };

  return (
    <>
      <div className={classes.container}>
        <Select
          ref={selectRef}
          defaultValue={getDefaultValue(defaultValue)}
          options={options}
          styles={customStyles}
          {...rest}
        />

        {loading && <CircularProgress className={classes.progress} />}
        {errorIcon && (
          <Tooltip title="Retry" placement="bottom">
            <Icon
              className={classes.errorIcon}
              onClick={debounce(() => setRetry(!retry), 1000)}
            >
              error
            </Icon>
          </Tooltip>
        )}
      </div>

      {!!error && <FormHelperText error={!!error}>{error}</FormHelperText>}
    </>
  );
}

export default memo(SelectRequest, (prevProps, nextProps) => {
  if (
    prevProps.configOptions.label !== nextProps.configOptions.label ||
    prevProps.configOptions.value !== nextProps.configOptions.value
  ) {
    return false;
  }

  return true;
});
