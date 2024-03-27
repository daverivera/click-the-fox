import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

interface NameInputProps {
    userName: string | undefined;
    onNameChange: (userName: string) => void;
}

export default function NameInput({ userName, onNameChange }: NameInputProps) {
    const [showInputField, setShowInputField] = useState(false);

    useEffect(() => {
        setShowInputField(!!userName);
    }, []);

    if (showInputField) {
        return (
            <TextField
                variant="standard"
                value={userName}
                onClick={() => {
                    // Show the input field
                    setShowInputField(false);
                }}
            />
        );
    }

    return (
        <TextField
            autoFocus
            variant="outlined"
            value={userName}
            onChange={event => {
                onNameChange(event.target.value);
            }}
        />
    );
}
