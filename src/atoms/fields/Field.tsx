import React from 'react';
import {useUniqId} from "../../utils/useUniqId";
import {FieldContext} from "./FieldContext";
import {Label} from "./Label";
import {Input} from "./Input";
import {Textarea} from "./Textarea";

interface IFieldComposition {
    Label: typeof Label
    Input: typeof Input,
    TextArea: typeof Textarea
}

export const Field: React.FC & IFieldComposition = ({children}) => {
    const id = useUniqId();
    return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>
}

Field.Label = Label;
Field.Input = Input;
Field.TextArea = Textarea;