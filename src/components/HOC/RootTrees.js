import React from 'react';
import {food} from '../recursion/type';

export function RootTrees(WrappedComponent) {
  const NewRecursion = props => {
    const root = Object.keys(food).map((item, i) => {});
    // const values = Object.values(food);

    return <WrappedComponent {...props} />;
  };

  return NewRecursion;
}
