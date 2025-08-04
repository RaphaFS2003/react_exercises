import React from 'react';
import Greeting from './components/Greeting';

const App: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333',
        marginBottom: '30px',
        fontSize: '2.5rem'
      }}>
        Exercícios React TypeScript
      </h1>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#666', marginBottom: '20px' }}>
          Exercício 1: Componente Greeting
        </h2>
        <Greeting />
      </div>
    </div>
  );
};

export default App;