//import React from 'react';

// Tipo das props
interface GreetingProps {
  name: string;
  age: number;
}

// a) Utilizando uma function normal
export function GreetingFunction({ name, age }: GreetingProps) {
  return (
    <div style={{
      backgroundColor: 'lightblue',
      padding: '15px',
      margin: '10px',
      borderRadius: '10px'
    }}>
      <h3>Oi {name}!</h3>
      <p>Você tem {age} anos. Feito com function normal.</p>
    </div>
  );
}

// b) Utilizando uma arrow function
export const GreetingArrow = ({ name, age }: GreetingProps) => {
  return (
    <div style={{
      backgroundColor: 'lightgreen',
      padding: '15px',
      margin: '10px',
      borderRadius: '10px'
    }}>
      <h3>Olá {name}!</h3>
      <p>Você tem {age} anos. Feito com arrow function.</p>
    </div>
  );
};

// Componente principal
const Greeting = () => {
  return (
    <div>
      <GreetingFunction name="Ana" age={20} />
      <GreetingArrow name="Pedro" age={25} />
    </div>
  );
};

export default Greeting;
