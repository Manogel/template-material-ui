import React, { useEffect, useRef } from 'react';

import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { useField } from '@unform/core';

type IParams = TextFieldProps & {
  name: string;
};

const MyInput: React.FC<IParams> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);
  return (
    <TextField
      inputRef={inputRef}
      name={name}
      id={fieldName}
      variant="outlined"
      fullWidth
      defaultValue={defaultValue}
      error={!!error}
      {...rest}
      helperText={error}
    />
  );
};
export default MyInput;
