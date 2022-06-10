import { configureStore, createSlice } from "@reduxjs/toolkit";

const panierSlice = createSlice({
  name: "panier",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newProduct = {
        id: action.payload[0],
        size: action.payload[1],
      };

      state.push(newProduct);
    },
    deleteCart: (state, action) => {
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

export const { addToCart, deleteCart } = panierSlice.actions;

export const store = configureStore({
  reducer: {
    panier: panierSlice.reducer,
  },
});
