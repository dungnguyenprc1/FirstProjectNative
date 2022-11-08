import React, {useState} from 'react';

export function ShowContent(WrappedComponent) {
  const NewWrapped = props => {
    const [show, setShow] = useState();
    const handleClick = () => {
      setShow(!show);
    };

    return (
      <WrappedComponent {...props} handleClick={handleClick} show={show} />
    );
  };

  return NewWrapped;
}
