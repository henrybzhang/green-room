import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { ActionContext } from './ActionProvider';
import background1 from '../images/1.jpeg';
import background2 from '../images/2.jpeg';
import background3 from '../images/3.jpeg';
import background4 from '../images/4.jpeg';
import background5 from '../images/5.gif';
import background6 from '../images/6.gif';

const backgrounds = [
  background1,
  background2,
  background3,
  background4,
  background5,
  background6,
];

const BackgroundContext = createContext();

function BackgroundProvider({ children }) {
  const { environmentLevel } = useContext(ActionContext);
  const [backgroundImage, setBackgroundImage] = useState(background1);

  useEffect(() => {
    backgrounds.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  }, []);

  useEffect(() => {
    switch (environmentLevel) {
      case 1:
        setBackgroundImage(background1);
        break;
      case 2:
        setBackgroundImage(background2);
        break;
      case 3:
        setBackgroundImage(background3);
        break;
      case 4:
        setBackgroundImage(background4);
        break;
      case 5:
        setBackgroundImage(background5);
        break;
      case 6:
        setBackgroundImage(background6);
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
