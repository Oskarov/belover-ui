import {customAlphabet} from "nanoid/non-secure";
import {useState} from "react";

const nanoid = customAlphabet('ladfjd24242klfj', 10);

export const useUniqId = (): string => {
    const [id] = useState(nanoid);
    return id;
}