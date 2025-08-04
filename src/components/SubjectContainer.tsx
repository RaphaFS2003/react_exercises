import React from 'react';
import SubjectItem from './SubjectItem.tsx';

// Tipo do objeto Subject
interface Subject {
  name: string;
  grade: number;
}

// Lista constante de matérias
const subjects: Subject[] = [
  { name: 'Matemática', grade: 8.5 },
  { name: 'Português', grade: 9.0 },
  { name: 'História', grade: 7.8 },
  { name: 'Geografia', grade: 8.2 },
  { name: 'Ciências', grade: 9.3 },
  { name: 'Inglês', grade: 8.7 },
  { name: 'Educação Física', grade: 9.5 },
  { name: 'Arte', grade: 8.0 }
];

const SubjectContainer: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Boletim Escolar 📚
      </h2>
      <div className="grid gap-3">
        {subjects.map((subject, index) => (
          <SubjectItem 
            key={index} 
            index={index}
            subject={subject} 
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectContainer;
export type { Subject };
