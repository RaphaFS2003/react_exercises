import Greeting from './components/Greeting.tsx';
import ListContainer from './components/ListContainer.tsx';
import SubjectContainer from './components/SubjectContainer.tsx';
import Countdown from './components/Countdown.tsx';
import Random from './components/Random.tsx';
import ToggleText from './components/ToggleText.tsx';
import CheckText from './components/CheckText.tsx';

const App = () => {
  // Lista personalizada para o Random
  const minhasLinguagens = ['React', 'TypeScript', 'JavaScript', 'Python', 'Java'];

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
        fontSize: '2rem'
      }}>
        🚀 Meus Exercícios React
      </h1>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3>Exercício 2: Saudação com Nome e Idade</h3>
          <Greeting />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Exercício 3: Lista de Frutas</h3>
          <ListContainer />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Exercício 4: Boletim de Notas</h3>
          <SubjectContainer />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Exercício 5: Contador Regressivo</h3>
          <Countdown />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Exercício 6: Sorteio Aleatório</h3>
          <Random items={minhasLinguagens} />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Exercício 7: Trocar Texto</h3>
          <ToggleText />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Exercício 8: Checkbox com Texto</h3>
          <CheckText />
        </div>

      </div>
    </div>
  );
};

export default App;
