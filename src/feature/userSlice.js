
import { createSlice , nanoid } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  
  
 
  };



export  const userSlice = createSlice({
  name: 'user', 
  initialState,

  reducers: {
    addUser: (state, action) => {
      const { userName, email, password } = action.payload;
      const newUser  = { 
        id: nanoid(),
        userName,
        email,
        password
    
      };
      state.users.push(newUser)},

    removeUser:(state,action) => {
      state.users = state.users.filter((user)=> user.id !== action.payload)
    },

    updateUserDetails :(state,action) => {
      const {id , updatedUserData} = action.payload;
      const userIndex = state.users.findIndex(user=> user.id === id)

      
      if(userIndex !== -1){
        state.users[userIndex] = { ...state.users[userIndex], ...updatedUserData };
      }
    }
  },
  
});

export  const {addUser,removeUser , updateUserDetails} = userSlice.actions  
export default  userSlice.reducer

