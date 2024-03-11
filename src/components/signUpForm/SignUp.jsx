import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../feature/userSlice';
import UserTable from '../UserTable';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const Navigate = useNavigate()
  const dispatch = useDispatch();


  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser({ userName, email, password }));
    
    setUserName('');
    setEmail('');
    setPassword('');

    // Navigate('/usertable');
  }

  return (
  <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>

     
    </form>
    <div>
      <UserTable/>
    </div>
  </>

  );
};

export default SignUp;