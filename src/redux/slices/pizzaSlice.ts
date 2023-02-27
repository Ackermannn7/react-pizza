import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { CartItem } from "./cartSlice";
import { Sort } from "./filterSlice";

type Pizza = {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};
export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, //loading | success | error
};

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
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
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<Pizza[]>) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      }
    );
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
  //Default JS
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
