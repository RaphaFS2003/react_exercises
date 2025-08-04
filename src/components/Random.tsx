import { useState } from 'react';

interface RandomProps {
  items?: string[];
}

const Random = ({ items }: RandomProps) => {
  const [numero, setNumero] = useState<number | null>(null);
  const [item, setItem] = useState<string | null>(null);

  // Lista padrão
  const listaDefault = ['Pizza', 'Hambúrguer', 'Sushi', 'Tacos', 'Sorvete'];
  const listaFinal = items || listaDefault;

  const sortearNumero = () => {
    const num = Math.floor(Math.random() * 101);
    setNumero(num);
    setItem(null);
  };

  const sortearItem = () => {
    const indice = Math.floor(Math.random() * listaFinal.length);
    setItem(listaFinal[indice]);
    setNumero(null);
  };

  return (
    <div style={{
      border: '2px solid #ddd',
      padding: '20px',
      margin: '10px',
      borderRadius: '10px',
      textAlign: 'center'
    }}>
      <h2>🎲 Sorteio</h2>

      <div style={{
        backgroundColor: '#f0f0f0',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '10px',
        minHeight: '60px'
      }}>
        {numero !== null && (
          <div>
            <p>Número sorteado:</p>
            <h3 style={{ color: 'green', fontSize: '36px' }}>{numero}</h3>
          </div>
        )}
        
        {item !== null && (
          <div>
            <p>Item sorteado:</p>
            <h3 style={{ color: 'purple', fontSize: '24px' }}>🎯 {item}</h3>
          </div>
        )}

        {numero === null && item === null && (
          <p style={{ color: '#666' }}>Clique para sortear!</p>
        )}
      </div>

      <button
        onClick={sortearNumero}
        style={{
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Sortear Número (0-100)
      </button>

      <button
        onClick={sortearItem}
        style={{
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: '#6f42c1',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Sortear Item
      </button>

      <div style={{ marginTop: '15px', fontSize: '12px', color: '#666' }}>
        <p>Itens: {listaFinal.join(', ')}</p>
      </div>
    </div>
  );
};

export default Random;
