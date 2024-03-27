import styled from 'styled-components';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const GameContainer = styled.div`
    max-width: 400px;
    margin: auto;
`;

const PlayHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function Game() {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        if (timeLeft === 0) {
            clearInterval(interval);

            // TODO: Navigate to scoreboard with the score
        }

        return () => clearInterval(interval);
    }, [timeLeft]);

    return (
        <GameContainer>
            <PlayHeader>
                <div>
                    <Typography variant="body1">Score: {score}</Typography>
                </div>
                <div>
                    <Typography variant="body1">Time left: {timeLeft}</Typography>
                </div>
            </PlayHeader>

            <div>BOARD</div>
        </GameContainer>
    );
}
