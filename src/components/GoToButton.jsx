import React from 'react'

const GoToButton = () => {
  return (
    <div className="mt-8 w- flex gap-x-4 sm:justify-center">
    <a
      href="#"
      className="inline-block rounded-lg
      bg-red-600 px-4 py-1.5 text-xs
        font-semibold leading-7 text-white shadow-sm
        ring-1 ring-black-600 hover:bg-black
       hover:ring-red-700"
    >
      Go TO Section{' '}
      <span className="text-indigo-200" aria-hidden="true">
        &rarr;
      </span>
    </a>
  </div>
  )
}

export default GoToButton