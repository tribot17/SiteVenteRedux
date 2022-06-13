import { configureStore, createSlice } from "@reduxjs/toolkit";

const panierSlice = createSlice({
  name: "panier",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newProduct = {
        id: action.payload[0],
        size: action.payload[1],
        quantity: action.payload[2],
      };

      state.push(newProduct);
    },
    updateQuantity: (state, action) => {
      state.forEach((n, i) => {
        if (n.id === action.payload[0]) n.quantity = action.payload[1];
      });
    },
    deleteCart: (state, action) => {},
  },
});

export const { addToCart, deleteCart, updateQuantity } = panierSlice.actions;

export const store = configureStore({
  reducer: {
    panier: panierSlice.reducer,
  },
});
