import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards:[
      { cardNumber: "4398 7489 7328 8327", 
        name: "Elin Erlandsson", 
        date: "06/22",
        ccvNumber: 123,
        vendor: "Mastercard",
        active: true
      },
    ],
  },
  reducers: {
    addCard: (state, action) => {
       state.cards = state.cards.concat(action.payload)
    },
    changeActive: (state, action) => {
      console.log("click")
      state.cards.map((card) => {
        if (card.active === true) {
          card.active = false;
        }
        if (card.cardNumber === action.payload) {
          card.active = true;
        }
        return null;
      })
    }
  }
});
const { actions, reducer } = cardSlice;
export const { addCard, changeActive } = actions;

export default reducer;