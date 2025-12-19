import { 
    FloatingInputDiv,
    InputName,
    NameInp,
    InputLabel
} from "../../styles/components/FloatingInput"
import { useState, type ChangeEvent } from "react";

interface FloatingInputProps {
    label: string;
    value: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FloatingInput({ label, value, onChange, type }: FloatingInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const isUp = isFocused || value.length > 0;

    return (
        <>
            <FloatingInputDiv>
                <InputName 
                />
                <NameInp 
                    type={type} 
                    value={value} 
                    onChange={onChange} 
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <InputLabel up={isUp}>{label}</InputLabel>
            </FloatingInputDiv>
        </>
    )
}