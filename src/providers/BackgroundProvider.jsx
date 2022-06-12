import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { ActionContext } from './ActionProvider';

const BackgroundContext = createContext();

function BackgroundProvider({ children }) {
  const { environmentLevel } = useContext(ActionContext);
  const [backgroundImage, setBackgroundImage] = useState('1.jpeg');

  useEffect(() => {
    switch (environmentLevel) {
      case 1:
        setBackgroundImage('start.jpeg');
        break;
      case 2:
        setBackgroundImage('initialClear.jpeg');
        break;
      case 3:
        setBackgroundImage('builtAirFilter.jpeg');
        break;
      case 4:
        setBackgroundImage('plantSeeds.jpeg');
        break;
      case 5:
        setBackgroundImage('cleanRiver.jpeg');
        break;
      case 6:
        setBackgroundImage('builtBridge.gif');
        break;
      case 7:
        setBackgroundImage('final.gif');
        break;
      default:
        break;
    }
  }, [environmentLevel]);

  const value = useMemo(
    () => ({
      backgroundImage,
    }),
    [backgroundImage],
  );

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
}

export { BackgroundContext, BackgroundProvider };
