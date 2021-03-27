import React, {useState} from 'react';
import './calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState([]);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);

  const calculation = () => {};

  return (
    <>
      <div className='calContainer'>
        <div className='calDisplay' aria-placeholder='8'>
          {display.length ? display : 0}
        </div>
        <div className='btnContainer'>
          <div className='firstRow'>
            <button onClick={() => setDisplay([...display, 7])}>7</button>
            <button onClick={() => setDisplay([...display, 8])}>8</button>
            <button onClick={() => setDisplay([...display, 9])}>9</button>
            <button onClick={() => setDisplay([...display, '+'])}>+</button>
          </div>
          <div className='secondRow'>
            <button onClick={() => setDisplay([...display, 4])}>4</button>
            <button onClick={() => setDisplay([...display, 5])}>5</button>
            <button onClick={() => setDisplay([...display, 6])}>6</button>
            <button onClick={() => setDisplay([...display, '-'])}>-</button>
          </div>
          <div className='thirdRow'>
            <button onClick={() => setDisplay([...display, 1])}>1</button>
            <button onClick={() => setDisplay([...display, 2])}>2</button>
            <button onClick={() => setDisplay([...display, 3])}>3</button>
            <button className='equalBtn' onClick={() => calculation()}>
              =
            </button>
          </div>
          <div className='fourthRow'>
            <button onClick={() => setDisplay([])}>AC</button>
            <button onClick={() => setDisplay([...display, 0])}>0</button>
            <button onClick={() => setDisplay([...display, '.'])}>.</button>
          </div>
        </div>
      </div>
    </>
  );
};

export {Calculator};

// const calculate = () => {
//   try {
//     const result = eval(display.join(''));
//     setDisplay([result]);
//   } catch (error) {
//     console.log(error);
//     setDisplay([]);
//   }
// };
