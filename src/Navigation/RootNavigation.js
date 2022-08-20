import * as React from 'react';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  return navigationRef.current.navigate(name, params);
};
