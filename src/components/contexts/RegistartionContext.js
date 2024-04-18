import React, { createContext, useState } from 'react';

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: '',
    registered: false,
  });

  const updateRegistrationData = (newData) => {
    setRegistrationData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const resetRegistrationData = () => {
    setRegistrationData({
      username: '',
      password: '',
      registered: false,
    });
  };

  return (
    <RegistrationContext.Provider
      value={{ registrationData, updateRegistrationData, resetRegistrationData }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;
