import { useField } from "@formiz/core";
import { useState } from "react";

const FieldText = (props) => {
  const {
    errorMessage,
    id,
    isValid,
    isPristine,
    isSubmitted,
    resetKey,
    setValue,
    value,
  } = useField(props);
  const { label, type, required } = props;
  const [isFocused, setIsFocused] = useState(false);
  const showError = !isValid && !isFocused && (!isPristine || isSubmitted);

  return (
    <div className={`demo-form-group ${showError ? "is-error" : ""}`}>
      <label className="demo-label" htmlFor={id}>
        {label}
      </label>
      <div style={{ diplay: "flex" ,fontSize:"15px"}}>
        <input
          key={resetKey}
          id={id}
          type={type || "text"}
          value={value || ""}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={!isValid}
          aria-describedby={!isValid ? `error-${id}` : null}
        />
        {showError && <div id={`${id}`}>{errorMessage}</div>}
      </div>
    </div>
  );
};

export default FieldText;
