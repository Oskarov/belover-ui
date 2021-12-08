import React from 'react';
import {StyledButton} from "./styles";

export interface DefaultButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    isFullWidth?: boolean;
}

const DefaultButton = React.forwardRef<HTMLButtonElement,
    DefaultButtonProps>(({
                             children,
                             ...props
                         }, ref) => {
    return <StyledButton type="button" ref={ref} {...props}>{children}</StyledButton>;
});

DefaultButton.defaultProps = {
    variant: 'primary',
    size: 'medium',
    isFullWidth: false,
}
DefaultButton.displayName = 'DefaultButton';

export default DefaultButton;
