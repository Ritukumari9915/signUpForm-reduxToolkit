import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateUserDetails } from '../feature/userSlice';

function UpdateUser() {
  const location = useLocation();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const userData = useSelector(state=> state.user)


  // const updatedUserData = location.state.updatedUserData;
  // console.log('updatedUserData', updatedUserData)


  const [userName, setUserName] = useState(userData.userName );
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);

  useEffect(() => {
    // Update state when userData changes
    setUserName(userData.userName || '');
    setEmail(userData.email || '');
    setPassword(userData.password || '');
}, [userData]);


  const handleUpdate = (e) => {
    e.preventDefault();
    try {
      const updatedData = {
          userName,
          email,
          password
      };

      // Assuming updateUserDetails action creator is correctly implemented
      dispatch(updateUserDetails({ id: userData.id, updatedUserData: updatedData }));
      Navigate('/signup');
  } catch (error) {
      console.error('Failed to update user:', error);
  }

  }
  return (
    <>
      <form onSubmit={(id)=>handleUpdate(id)}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}s
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Update</button>


      </form>
    </>
  )
}

export default UpdateUser;
