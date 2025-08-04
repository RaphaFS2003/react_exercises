import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [count, setCount] = useState<number>(10);

  // useEffect para exibir mensagem no console toda vez que count mudar
  useEffect(() => {
    console.log(`Contagem atual: ${count}`);
  }, [count]);

  const handleClick = (): void => {
    if (count > 0) {
      setCount(count - 1);
      console.log(`Botão clicado! Novo valor: ${count - 1}`);
    }
  };

  const resetCountdown = (): void => {
    setCount(10);
    console.log('Countdown resetado para 10');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Countdown ⏰
      </h2>
      
      <div className="mb-6">
        <span className={`text-6xl font-bold ${count === 0 ? 'text-red-500' : 'text-blue-500'}`}>
          {count}
        </span>
      </div>

      {count === 0 && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          🎉 Contagem finalizada!
        </div>
      )}

      <div className="space-y-3">
        <button
          onClick={handleClick}
          disabled={count === 0}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
            count === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md'
          }`}
        >
          {count === 0 ? 'Finalizado' : 'Decrementar'}
        </button>

        <button
          onClick={resetCountdown}
          className="w-full py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
        >
          Resetar
        </button>
      </div>
    </div>
  );
};

export default Countdown;
