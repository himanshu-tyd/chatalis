import React, { useEffect, useRef, useState } from "react";

const InputOpt = ({ length, onOptSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(0, 1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleClick = () => {
    onOptSubmit(otp.join(""));
    setOtp(new Array(length).fill(""));
    inputRef.current[0].focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(input) => {
            inputRef.current[index] = input;
          }}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          type="text"
          value={value}
          className="border-2 m-1 w-20 h-14 text-center rounded-[5px] border-gray outline-blue-200"
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default InputOpt;
