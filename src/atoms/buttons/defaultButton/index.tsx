import React from 'react';

/*export interface DefaultButtonProps {
    disabled: boolean,
    children?: ((props: any) => React.ReactNode) | React.ReactNode | string;
}*/

const DefaultButton = React.forwardRef<HTMLButtonElement,
    React.ComponentPropsWithoutRef<'button'>>(({
                                                   children,
                                                   ...props
                                               }, ref) => {
    return <button type="button" ref={ref} {...props}>{children}</button>;
});

DefaultButton.displayName = 'DefaultButton';

export default DefaultButton;
