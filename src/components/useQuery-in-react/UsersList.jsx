import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getUsers } from '../../services/usersApi';

const UsersList = () => {
    const [newUsers, setNewUsers] = useState('');
    const queryClient = useQueryClient();

    const {
        isLoading,
        isError,
        error,
        data: users
    } = useQuery('users', getUsers);

    let content;
    if (isLoading) {
        content = <p>Loading....</p>
    }else if (isError) {
        content = <p>{error.message}.</p>
    }else{
        content = users.map((user) => {
            return(
                <p key={user.id}>{user.name}</p>
            )
        })
    }
  return (
    <div>
        <h1>UsersList</h1>
        {content}
    </div>
  )
}

export default UsersList