import React, { createContext, useState, useMemo } from 'react';

const DebugContext = createContext();

function DebugProvider({ children }) {
  const [debug, setDebug] = useState(false);
  const value = useMemo(
    () => ({
      debug,
      setDebug,
    }),
    [debug],
  );

  return (
    <DebugContext.Provider value={value}>{children}</DebugContext.Provider>
  );
}

export { DebugContext, DebugProvider };
