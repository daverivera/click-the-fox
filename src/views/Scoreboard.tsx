import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks';
import styled from 'styled-components';
import { useUserValidator } from '@/hooks/useUserValidator';

const ScoreboardContainer = styled.div`
    max-width: 650px;
    margin: auto;
`;

const TableWrapper = styled.div`
    max-height: 60vh;
    overflow-x: hidden;
`;

export default function Scoreboard() {
    const navigate = useNavigate();
    const scoreboard = useAppSelector(state => state.scoreboard);

    useUserValidator();

    return (
        <ScoreboardContainer>
            <Typography variant="h4">SCOREBOARD</Typography>

            <TableWrapper>
                <TableContainer component={Paper} style={{ overflowX: 'hidden' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Rank</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {scoreboard.map((score, index) => {
                                return (
                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" data-testid="rank">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="right" data-testid="name">
                                            {score.name}
                                        </TableCell>
                                        <TableCell align="right" data-testid="date">
                                            {score.date}
                                        </TableCell>
                                        <TableCell align="right" data-testid="score">
                                            {score.score}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </TableWrapper>

            <Footer>
                <Button variant="outlined" onClick={() => navigate('/')} style={{ marginRight: '16px' }}>
                    To welcome screen
                </Button>

                <Button variant="outlined" onClick={() => navigate('/play')}>
                    Play
                </Button>
            </Footer>
        </ScoreboardContainer>
    );
}
