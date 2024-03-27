import { Button, Typography } from '@mui/material';
import styled from 'styled-components';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setName } from '@/store/userSlice';
import { useEffect, useState } from 'react';
import NameInput from '@/components/NameInput';

const InputContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;
    justify-content: center;
`;

const WelcomeContainer = styled.div`
    max-width: 650px;
    margin: auto;
`;

export default function Welcome() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userName = useAppSelector(state => state.user.value);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        setIsButtonDisabled(!userName);
    }, [userName]);

    const onNameChange = (userName: string) => {
        dispatch(setName(userName));
    };

    return (
        <WelcomeContainer>
            <InputContainer>
                <Typography variant="body1">Name:</Typography>
                <NameInput userName={userName} onNameChange={onNameChange} />
            </InputContainer>

            <Footer>
                <Button variant="outlined" onClick={() => navigate('/play')} disabled={isButtonDisabled}>
                    Play
                </Button>
            </Footer>
        </WelcomeContainer>
    );
}
