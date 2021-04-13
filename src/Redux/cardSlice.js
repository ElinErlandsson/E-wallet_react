import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
    "card/getUser", 
    async () => {
    return fetch("https://randomuser.me/api/")
    .then((response) => response.json());
  });

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards:[
      { cardNumber: "4398 7489 7328 8327", 
        name: "Lady Gaga", 
        month: "06",
        year: "22",
        ccvNumber: 123,
        vendor: "Mastercard",
        active: true
      },
    ],
    status: null
  },
  reducers: {
    addCard: (state, action) => {
       state.cards = state.cards.concat(action.payload)
    },

    changeActive: (state, action) => {
      console.log("click")
      state.cards.map((card) => {
        if (card.cardNumber === action.payload) {
          card.active = true;
        }
        if (card.active === true) {
          card.active = false;
        }
        return null;
      })
    },

    deleteCard: (state, action) => {
      state.cards.map((card,i) => {
        if (card.cardNumber === action.payload){
          state.cards.splice(i,1)
        }
        return null;
      })
    }
  },
  
extraReducers: {
        [getUser.pending]: (state) => {
          state.status = "loading...";
        },
    
        [getUser.fulfilled]: (state, action) => {
          state.status = "success";
          const userName = `${action.payload.results[0].name.first} ${action.payload.results[0].name.last}`;

          state.cards.forEach((card) => {
            card.name = userName.toUpperCase();
          })        
        },
    
        [getUser.rejected]: (state) => {
          state.status = "rejected";
        }
      }
});

const { actions, reducer } = cardSlice;
export const { addCard, changeActive, deleteCard } = actions;

export default reducer;