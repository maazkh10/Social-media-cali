import React from 'react'

function Button({ text, onClick, type = "button" }) {
  return (
    <button
      onClick={onClick}
      className="btn-main"
      type={type}
    >
      {text}
    </button>
  )
}

export default Button
