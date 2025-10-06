import React, { createContext, useState } from 'react'

// 1. Create Context
export const Usercontext = createContext();

export default function Userprovider({ children }) {
  const [user, setUser] = useState(null);

  return (
    // 2. Provide value
    <Usercontext.Provider value={{ user, setUser }}>
      {children}
    </Usercontext.Provider>
  );
}
