import { configureStore, createSlice } from "@reduxjs/toolkit";

const panierSlice = createSlice({
  name: "panier",
  initalState: [],
  reducers: {
    addToCart: (state, action) => {
      const newProduct = {
        id: action.payload[0],
        size: action.payload[1],
      };

      state.push(newProduct);
    },
  },
});

export const { addToCart } = panierSlice.actions;

export const store = configureStore({
  reducer: {
    panier: panierSlice.reducer,
  },
});
