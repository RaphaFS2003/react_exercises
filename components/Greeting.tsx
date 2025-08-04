import React from 'react';

// Definindo o tipo das props
interface GreetingProps {
  name: string;
  age: number;
}

// a) Utilizando uma function
export function GreetingFunction({ name, age }: GreetingProps): JSX.Element {
  const greetingStyle: React.CSSProperties = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    margin: '10px 0',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease'
  };

  return (
    <div style={greetingStyle}>
      <h2>Olá {name}! Bem-vindo ao React com TypeScript! 🚀</h2>
      <p>Você tem {age} anos e este componente foi criado usando uma function declaration.</p>
    </div>
  );
}

// b) Utilizando uma arrow function
export const GreetingArrow: React.FC<GreetingProps> = ({ name, age }) => {
  const greetingStyle: React.CSSProperties = {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    margin: '10px 0',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease'
  };

  return (
    <div style={greetingStyle}>
      <h2>Saudações {name}! Aprendendo TypeScript! ⚡</h2>
      <p>Aos {age} anos, este componente foi criado usando uma arrow function.</p>
    </div>
  );
};

// Componente principal que exporta ambas as versões
const Greeting: React.FC = () => {
  return (
    <div>
      <GreetingFunction name="Maria" age={25} />
      <GreetingArrow name="João" age={30} />
    </div>
  );
};

export default Greeting;
