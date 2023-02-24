import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { CartItem } from "./cartSlice";

type Pizza = {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  sizes: number[];
  types: number[];
};
interface PizzaSliceState {
  items: Pizza[];
  status: "loading" | "success" | "error";
}
const initialState: PizzaSliceState = {
  items: [],
  status: "loading", //loading | success | error
};

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://635fa1ae3e8f65f283b79aef.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<Pizza[]>) => {
        state.status = "success";
        state.items = action.payload;
      }
    );
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = "error";
      state.items = [];
    });
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = "loading";
  //     state.items = [];
  //     console.log("Sending Pizzas");
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     console.log(action, "fulfilled");
  //     state.items = action.payload;
  //     state.status = "success";
  //     console.log("OK");
  //   },
  //   [fetchPizzas.rejected]: (state, action) => {
  //     console.log(action, "rejected");
  //     state.status = "error";
  //     state.items = [];
  //     console.log("Error");
  //   },
  // },
});

export const pizzaDataSelector = (state: RootState) => state.pizza;
// Action creators are generated for each case reducer function
export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
