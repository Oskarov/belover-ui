import React from 'react';

export interface DefaultButtonProps {
  disabled: boolean,
  children?: ((props: any) => React.ReactNode) | React.ReactNode | string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({disabled, children}) => {
  return <button disabled={disabled}>{children}</button>;
};

export default DefaultButton;
