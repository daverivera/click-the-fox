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
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getFormattedDate } from '../utils/date';

const ScoreboardContainer = styled.div`
    max-width: 650px;
    margin: auto;
`;

export default function Scoreboard() {
    const navigate = useNavigate();

    const data = [
        { rank: 1, name: 'Jeniffer', date: new Date(), score: 6 },
        { rank: 2, name: 'Sjors', date: new Date(), score: 4 },
        { rank: 3, name: 'Jeniffer', date: new Date(), score: 3 },
    ];

    return (
        <ScoreboardContainer>
            <Typography variant="h4">SCOREBOARD</Typography>

            <div>
                <TableContainer component={Paper}>
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
                            {data.map(row => {
                                return (
                                    <TableRow key={row.rank} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {row.rank}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{getFormattedDate(row.date)}</TableCell>
                                        <TableCell align="right">{row.score}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <Footer>
                <Button variant="outlined" onClick={() => navigate('/')}>
                    To welcome screen
                </Button>

                {/* TODO: Navigate to "play" with the username */}
                <Button variant="outlined" onClick={() => navigate('/play')}>
                    Play
                </Button>
            </Footer>
        </ScoreboardContainer>
    );
}
