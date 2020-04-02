import { useState } from "react";

export default initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleValueChanges = event => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleValueChanges, reset];
};
