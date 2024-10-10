import React from "react";

interface Message {
  message: string
}

const Notification: React.FC<Message> = ({ message }) => {
  if (message === '') {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}
export default Notification