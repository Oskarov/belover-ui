import React from 'react';
import {StyledButton} from "./styles";
import PropTypes from "prop-types";

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

DefaultButton.propTypes = {
    children: PropTypes.any,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    isFullWidth: PropTypes.bool
}

DefaultButton.defaultProps = {
    variant: 'primary',
    size: 'medium',
    isFullWidth: false,
}
DefaultButton.displayName = 'DefaultButton';

export default DefaultButton;
