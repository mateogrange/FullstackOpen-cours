import React from "react";

interface Message {
  message: string
}

const Error: React.FC<Message> = ({ message }) => {
  if (message === '') {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}
export default Error