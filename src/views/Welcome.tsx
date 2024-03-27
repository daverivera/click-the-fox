import { Button, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const InputContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;
    justify-content: center;
`;

export default function Welcome() {
    const navigate = useNavigate();

    return (
        <>
            <InputContainer>
                <Typography variant="body1">Name:</Typography>
                <TextField variant="outlined" />
            </InputContainer>

            <Footer>
                <Button variant="outlined" onClick={() => navigate('/play')}>
                    Play
                </Button>
            </Footer>
        </>
    );
}
