import { createSlice } from "@reduxjs/toolkit";

const startState = {
  candidates: [
    {
      id: 1,
      votes: 0,
      percentage: 0,
      name: "Candidate 1",
    },
    {
      id: 2,
      votes: 0,
      percentage: 0,
      name: "Candidate 2",
    },
    {
      id: 3,
      votes: 0,
      percentage: 0,
      name: "Candidate 3",
    },
    {
      id: 4,
      votes: 0,
      percentage: 0,
      name: "Candidate 4",
    },
  ],
  totalVotes: 0,
  selectFilter: 'all',
  isPercentage: false,
};

export const candidatesSlice = createSlice({
  name: "candidates",
  initialState: startState,
  reducers: {
    addTotalVotes: state => {
      state.totalVotes += 1;
    },
    addVote: (state, action) => {
      state.candidates[state.candidates.findIndex( item => item.id == action.payload)].votes += 1;
      state.candidates.map(candidate => {
        return (candidate.percentage = candidate.votes / state.totalVotes);
      });
    },
    filterByPercentage: (state, action) => {
      state.isPercentage = action.payload;
    },

    selectFilter: (state, action) => {
      state.selectFilter = action.payload;
    },
  }
})

export const { addTotalVotes, addVote, filterByPercentage, selectFilter } = candidatesSlice.actions;

export default candidatesSlice.reducer;
