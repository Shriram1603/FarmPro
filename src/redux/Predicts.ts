import {createSlice} from '@reduxjs/toolkit';

const PredictsSlice = createSlice({
  name: 'predicts',
  initialState: {
    Rec_Crop: 'null',
    Yield:0,
    Fertilizer:0
  },
  reducers: {
    setRec_Crop: (state, action) => {
      state.Rec_Crop = action.payload;
    },
    set_Yield: (state, action) => {
      state.Yield = action.payload;
    },
    setPFertilizer: (state, action) => {
      state.Fertilizer = action.payload;
    },
  },
});

export const {setRec_Crop,set_Yield,setPFertilizer} = PredictsSlice.actions;
export default PredictsSlice.reducer;