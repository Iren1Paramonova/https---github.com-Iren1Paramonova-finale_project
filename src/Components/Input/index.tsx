import React, { ChangeEvent, useState } from 'react';

export const Input = () => {
  const [value, setValue] = useState(' ');

  const chahgeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className="imput_wrapper">
      <h1>{`INPUT VALUE ${value}`}</h1>
      <input value={value} className="input" onChange={chahgeHandler} />
    </div>
  );
};
