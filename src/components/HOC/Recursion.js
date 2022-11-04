import React from 'react';

function Recursion(WrappedComponent, {data}) {
  const newRecursion = props => {
    Object.keys(data);

    return <WrappedComponent {...props} />;
  };

  return Recursion;
}
