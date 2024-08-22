import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const updateUser = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <FormContext.Provider value={{ user, updateUser }}>
      {children}
    </FormContext.Provider>
  );
};
