import { useState } from 'react';

const CheckText = () => {
  const [marcado, setMarcado] = useState(false);

  const mudouCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarcado(event.target.checked);
  };

  return (
    <div style={{
      border: '2px solid #ddd',
      padding: '20px',
      margin: '10px',
      borderRadius: '10px'
    }}>
      <h2>✓ Checkbox com Texto</h2>

      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '10px',
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        <input
          type="checkbox"
          id="meuCheckbox"
          checked={marcado}
          onChange={mudouCheckbox}
          style={{
            width: '20px',
            height: '20px',
            cursor: 'pointer'
          }}
        />
        
        <label 
          htmlFor="meuCheckbox" 
          style={{
            fontSize: '18px',
            textDecoration: marcado ? 'line-through' : 'none',
            color: marcado ? '#666' : '#333',
            cursor: 'pointer'
          }}
        >
          📝 Fazer os exercícios de React
        </label>
      </div>

      <div style={{
        textAlign: 'center',
        padding: '10px',
        backgroundColor: marcado ? '#d4edda' : '#f8d7da',
        color: marcado ? '#155724' : '#721c24',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}>
        {marcado ? '✅ Tarefa Concluída!' : '⏳ Tarefa Pendente'}
      </div>

      <p style={{
        fontSize: '12px',
        color: '#666',
        textAlign: 'center',
        marginTop: '10px'
      }}>
        {marcado ? 'Texto riscado porque está marcado' : 'Marque para riscar o texto'}
      </p>
    </div>
  );
};

export default CheckText;
