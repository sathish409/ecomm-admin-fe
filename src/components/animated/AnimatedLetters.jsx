import React from 'react'

export const AnimatedLetters = (text) => {
  return (
<span>
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          className="letter-drop"
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}
