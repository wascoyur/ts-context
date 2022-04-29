import React, { FC, useContext } from 'react';
import { themes } from './theme-context';

interface IThemedButton {
  props?: any;
}

const ThemedButton: FC = ({ props }: any) => {
  const theme = useContext<themes>(themes.dark);
  return (
    <div>
      <h3>ThemedButton</h3>
      <button {...props}>Click</button>
    </div>
  );
};

export default ThemedButton;
