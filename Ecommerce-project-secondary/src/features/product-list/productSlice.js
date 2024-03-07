import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts,fetchAllProductsByFilters } from './productAPI'; 

const initialState = {
  products: [],
  status: 'idle',
  totalItems:0
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const  fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const  fetchAllProductsByFiltersAsync = createAsyncThunk(
  'product/fetchAllProductsByFilters', 
  async ({filter,sort,pagination}) => {
    const response = await fetchAllProductsByFilters({filter,sort,pagination});
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading'; 
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchAllProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading'; 
      })
      .addCase(fetchAllProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      });
  },
});

export const { increment} = productSlice.actions;


export const selectAllProducts = (state) => state.product.products;
export const selectTotalItems = (state) => state.product.totalItems;


export default productSlice.reducer;
