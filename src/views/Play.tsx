import styled from 'styled-components';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Board } from '@/components/Board';
import { useNavigate } from 'react-router-dom';
import { addNewScore } from '@/store/scoreboardSlice';
import { fetchNextImageSet, loadNextImagesSet } from '@/store/imagesSlice';
import { useUserValidator } from '@/hooks/useUserValidator';

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
    const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { images, userName, isLoadingImages } = useAppSelector(state => ({
        images: state.images.currentSet,
        isLoadingImages: state.images.loading,
        userName: state.user.value,
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        if (timeLeft === 0) {
            clearInterval(interval);

            // Add score to Scoreboard
            dispatch(addNewScore({ score, name: userName }));
            // Navigate to scoreboard
            navigate('/scoreboard');
        }

        return () => clearInterval(interval);
    }, [timeLeft]);

    useEffect(() => {
        setShowLoadingIndicator(images.length === 0 && isLoadingImages);
    }, [images, isLoadingImages]);

    useUserValidator();

    const onImageClicked = (type: string) => {
        if (type === 'fox') {
            setScore(score + 1);
        } else if (score > 0) {
            setScore(score - 1);
        }

        // Render new images set
        dispatch(loadNextImagesSet());
        dispatch(fetchNextImageSet());
    };

    if (showLoadingIndicator) {
        return (
            <GameContainer>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </GameContainer>
        );
    }

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

            <Board images={images} onImageClicked={onImageClicked}></Board>
        </GameContainer>
    );
}
