import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllAnimalImages } from '@/utils/api';

function shuffleArray(array) {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}

/**
 * Loads the images for the current run and the next run
 */
export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
    return {
        currentSet: shuffleArray(await getAllAnimalImages()),
        nextSet: shuffleArray(await getAllAnimalImages()),
    };
});

export const fetchNextImageSet = createAsyncThunk('images/loadNextSet', async () => {
    return shuffleArray(await getAllAnimalImages());
});

interface Images {
    currentSet: Array<string>;
    nextSet: Array<string>;
    loading: boolean;
}

const initialState: Images = {
    currentSet: [],
    nextSet: [],
    loading: false,
};

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        loadNextImagesSet: state => {
            state.currentSet = state.nextSet;
            state.nextSet = [];
        },
    },
    extraReducers: builder => {
        builder
            // fetchImages
            .addCase(fetchImages.pending, state => {
                state.loading = true;
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.currentSet = action.payload.currentSet;
                state.nextSet = action.payload.nextSet;
                state.loading = false;
            })
            // fetchNextImageSet
            .addCase(fetchNextImageSet.pending, state => {
                state.loading = true;
            })
            .addCase(fetchNextImageSet.fulfilled, (state, action) => {
                state.nextSet = action.payload;
                state.loading = false;
            });
    },
});

export const { loadNextImagesSet } = imagesSlice.actions;
export default imagesSlice.reducer;
