import  {React, useState}  from 'react';
import './App.css'; 
export default function App()
{
  const [counter, setCounter] = useState(0);
  
  const increse=()=> {

    setCounter(counter => counter +3 );

  }

  const decrese=()=> {
    setCounter(counter => counter - 3 )
  }
  
  return (
  
    <div className='con'>  
      <p className='t-cntr'>Counter</p>
  <div className='counter'>
    <button className='btn' onClick={decrese}>-   </button>
    <div className='counter-output'>{counter} </div>
    <button className='btn' onClick={increse}>+</button>
  
  </div>
  </div>
  );
};

