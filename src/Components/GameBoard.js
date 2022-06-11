import './Styles/GameBoard.css';
import './Styles/AllComponents.css';

function GameBoard({ children, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="game-board" onClick={handleClick}>
      {children}
    </div>
  );  
}

export { GameBoard };