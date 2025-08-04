import React from 'react';
import ListItem from './ListItem.tsx';

// Lista constante de strings
const frutas: string[] = [
  'Maçã',
  'Banana',
  'Laranja',
  'Uva',
  'Morango',
  'Abacaxi',
  'Manga',
  'Pêra'
];

const ListContainer: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Lista de Frutas 🍎
      </h2>
      <ul className="space-y-2">
        {frutas.map((fruta, index) => (
          <ListItem 
            key={index} 
            index={index} 
            name={fruta} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ListContainer;
