import React, {useContext} from "react";
import {FieldContext} from "./FieldContext";
import {StyledInput} from "./styles";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>((props, ref) => {
    const id = useContext(FieldContext);
    return <StyledInput id={id} ref={ref} {...props}/>
});

Input.displayName = 'Field.Input'