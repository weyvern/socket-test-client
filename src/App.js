import useSocket from './hooks/useSocket';

const App = () => {
  const { members } = useSocket();

  return (
    <div>
      {members.map(member => (
        <div key={member}>{member}</div>
      ))}
    </div>
  );
};

export default App;
