import React from 'react'

export const ScrollDown = ({ absolute = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${absolute ? 'absolute ' : ''} bottom-2 my-4 w-6 h-6 animate-bounce text-primario dark:text-secundario`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
      />
    </svg>
  )
}
