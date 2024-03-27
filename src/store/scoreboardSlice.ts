import { createSlice } from '@reduxjs/toolkit';
import { getFormattedDate } from '@/utils/date';

interface Score {
    name: string;
    date: string;
    score: number;
}

type Scoreboard = Array<Score>;

const initialState: Scoreboard = [];
// const initialState: Scoreboard = [
//     { name: 'Jeniffer', date: getFormattedDate(new Date()), score: 6 },
//     { name: 'Sjors', date: getFormattedDate(new Date()), score: 4 },
//     { name: 'Jeniffer', date: getFormattedDate(new Date()), score: 3 },
// ];

export const scoreboardSlice = createSlice({
    name: 'scoreboard',
    initialState,
    reducers: {
        addNewScore(state, action) {
            const { score, name } = action.payload;
            // TODO: Implement a more performant addition algorithm.
            // Add item on an ordered list (ideas: B-Tree, use splice)
            // https://stackoverflow.com/questions/1344500/efficient-way-to-insert-a-number-into-a-sorted-array-of-numbers
            state.push({
                score,
                name,
                date: getFormattedDate(new Date()),
            });
            state.sort((a, b) => b.score - a.score);
        },
    },
});

export const { addNewScore } = scoreboardSlice.actions;
export default scoreboardSlice.reducer;
