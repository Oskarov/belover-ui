import React from 'react';
import {useUniqId} from "../../utils/useUniqId";
import {FieldContext} from "./FieldContext";
import {Label} from "./Label";
import {Input} from "./Input";

export const Field: React.FC = ({children}) => {
    const id = useUniqId();
    return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>
}