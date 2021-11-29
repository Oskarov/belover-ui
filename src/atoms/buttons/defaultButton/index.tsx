import React from 'react';

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
    return <button type="button" ref={ref} {...props}>{children}</button>;
});

DefaultButton.defaultProps = {
    variant: 'primary',
    size: 'medium',
    isFullWidth: false,
}
DefaultButton.displayName = 'DefaultButton';

export default DefaultButton;
