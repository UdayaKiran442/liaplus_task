import React from 'react'

const H2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl font-extrabold text-gray-800 mb-1 text-center">
      {children}
    </h2>
  );
}

export default H2