import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser,updateUserDetails } from "../feature/userSlice";
import { useNavigate } from "react-router-dom";
import { createSelector } from '@reduxjs/toolkit';

const UserTable = () => {
    const Navigate = useNavigate();
    const users = useSelector((state) => state.user.users);
    const dispatch = useDispatch();

    
  const handleUpdateUser = (id, updatedUserData) => {

    console.log('id updateUserData',id);
dispatch(updateUserDetails({id:id ,updatedUserData}));
Navigate('/updateUser' , { state: { updatedUserData } })
  }

    return (
        <table>
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>

                        <td> <button onClick={() => dispatch(removeUser(user.id))}>X</button>
                        </td>
                        <td> <button onClick={handleUpdateUser}>Update</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserTable;
