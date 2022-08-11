import React from 'react'


export default function AddFriendButton({friendId}) {

  const addFriend = () => {
    let config = null;
    if (localStorage.getItem('token') !== null) {
      config = {
        method: "PATCH",
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      };
    }
    fetch('http://localhost:8080/profile/' + friendId, config)
    }

  const handleClick = () => {
    console.log({friendId})
    addFriend(friendId)
  }

  return (
    <button onClick={() => {handleClick()}}>
      Add Friend
      </button>
  )
}
