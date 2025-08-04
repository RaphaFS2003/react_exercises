import { useState } from 'react';

const ToggleText = () => {
  const [mostrarPrimeiro, setMostrarPrimeiro] = useState(true);

  const alternar = () => {
    setMostrarPrimeiro(!mostrarPrimeiro);
  };

  const texto1 = "🌞 Modo claro ativado!";
  const texto2 = "🌙 Modo escuro ativado!";

  return (
    <div style={{
      border: '2px solid #ddd',
      padding: '20px',
      margin: '10px',
      borderRadius: '10px',
      textAlign: 'center',
      backgroundColor: mostrarPrimeiro ? '#f8f9fa' : '#343a40',
      color: mostrarPrimeiro ? '#333' : '#fff'
    }}>
      <h2>🔄 Alternar Texto</h2>
      
      <div style={{
        backgroundColor: mostrarPrimeiro ? '#e9ecef' : '#495057',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
        {mostrarPrimeiro ? texto1 : texto2}
      </div>

      <button
        onClick={alternar}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: mostrarPrimeiro ? '#007bff' : '#fd7e14',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        {mostrarPrimeiro ? 'Mudar para Escuro' : 'Mudar para Claro'}
      </button>

      <p style={{ marginTop: '10px', fontSize: '14px', opacity: 0.7 }}>
        Modo: {mostrarPrimeiro ? 'Claro ☀️' : 'Escuro 🌙'}
      </p>
    </div>
  );
};

export default ToggleText;
