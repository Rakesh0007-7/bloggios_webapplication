import {useEffect, useRef, useState} from "react";

const useIsInputFocused = () => {
    const inputRef = useRef(null);
    const [isInputFocused, setIsInputFocused] = useState(false);

    useEffect(() => {
        const inputElement = inputRef.current;

        if (inputElement) {
            inputElement.addEventListener("focus", ()=> setIsInputFocused(true));
            inputElement.addEventListener("blur", () => setIsInputFocused(false));
        }

        return () => {
            if (inputElement) {
                inputElement.removeEventListener('focus', ()=> setIsInputFocused(true));
                inputElement.removeEventListener('blur', ()=> setIsInputFocused(false));
            }
        }
    }, []);

    return [inputRef, isInputFocused];
};

export default useIsInputFocused;