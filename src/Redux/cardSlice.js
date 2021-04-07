import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards:[
      { cardNumber: 1234567890123456, 
        name: "Elin Erlandsson", 
        date: "06/22",
        ccvNumber: 123,
        vendor: "Mastercard",
        active: true
      }
    ],
  },
  reducers: {
    addCard: (state, action) => {
       state.cards = state.cards.concat(action.payload)
    }
  }
});
const { actions, reducer } = cardSlice;
export const { addCard } = actions;

export default reducer;