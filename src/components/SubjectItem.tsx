import { Subject } from './SubjectContainer.tsx';

interface SubjectItemProps {
  index: number;
  subject: Subject;
}

const SubjectItem = ({ index, subject }: SubjectItemProps) => {
  // Cor da nota
  const getColor = (grade: number) => {
    if (grade >= 8) return 'green';
    if (grade >= 7) return 'orange';
    return 'red';
  };

  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '15px',
      margin: '5px 0',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <strong>{subject.name}</strong>
        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
          {subject.grade >= 7 ? '✅ Passou' : '❌ Reprovou'}
        </p>
      </div>
      
      <div style={{
        backgroundColor: getColor(subject.grade),
        color: 'white',
        padding: '8px 12px',
        borderRadius: '15px',
        fontWeight: 'bold'
      }}>
        {subject.grade}
      </div>
    </div>
  );
};

export default SubjectItem;
