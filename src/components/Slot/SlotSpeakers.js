import React, { useEffect, useState } from 'react';
import secrets from '../../../secrets';

const cvpartnerUrl = 'https://knowit.cvpartner.com/api/v1/users';
const SlotSpeakers = ({ userIds }) => {
  const [users, setUsers] = useState([]);
  /*const fetchUsers = async () => {
    try {
      const result = await Promise.all(
        userIds.map(userId =>
          fetch(`${cvpartnerUrl}/${userId}`, {
            headers: {
              Authorization: `Token token=${secrets.CVPARTNER.token}`,
              'Content-Type': 'application/json',
            },
          }),
        ),
      );
      console.log(result);
      const json = await result.json();
      setUsers(json);
    } catch (err) {
      setUsers([]);
    }
    const users = await fetch();
    setUsers(users);
  };
  console.log('HEY', users);
  useEffect(
    () => {
      fetchUsers();
    },
    [userIds],
  );*/
  return userIds.map(userId => <span key={userId}>{userId}</span>);
};

export default SlotSpeakers;
