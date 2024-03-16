import React, { useState } from "react";

interface AuthInputsProp {
  type: string;
}

const AuthInputs: React.FC<AuthInputsProp> = ({ type }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

  if (type === "email") {
    return (
      <input
        placeholder="Enter your email"
        type="email"
        name="email"
        className={`transition-all ease-in-out duration-500 border-[3px] ${emailFocus ? 'border-[#5ACBC9]' : 'border-[#ffffff]'} rounded-[10px] bg-[#B1B4B3] bg-opacity-15 mb-[25px] h-[68.17px] lg:w-[585.64px] pl-[27px] text-white text-opacity-50`}
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
      />
    );
  } else if (type === "password") {
    return (
      <input
        placeholder="Enter your password"
        type="password"
        name="email"
        className={`transition-all ease-in-out duration-500 border-[3px] ${passwordFocus ? 'border-[#5ACBC9]' : 'border-[#ffffff]'} rounded-[10px] bg-[#B1B4B3] bg-opacity-15 mb-[25px] h-[68.17px] lg:w-[585.64px] pl-[27px] text-white text-opacity-50`}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
      />
    );
  } else {
    return null;
  }
};

export default AuthInputs;
