import { useRef, useState, useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = () => {
  const socketRef = useRef();

  const [members, setMembers] = useState([]);

  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_SERVER);

    socketRef.current.on('connection', params => {
      setMembers(prev => [params === socketRef.current.id ? `This is you: ${params}` : `Welcome ${params}`, ...prev]);
    });

    return () => socketRef.current.disconnect();
  }, []);

  return { members };
};

export default useSocket;
