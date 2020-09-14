import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  
  const { fieldName, defaultValue, registerField, error } = useField(name);
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      id={fieldName}
      ref={inputRef}
      defaultValue={defaultValue}
      error={error?.length}
      helperText={error}
      {...rest}
    />
  );
}

export { Input };