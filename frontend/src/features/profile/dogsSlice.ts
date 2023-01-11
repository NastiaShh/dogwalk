import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import DogsState from './DogsData/types/DogsState';
import Dog from './DogsData/types/Dog';

const initialState: DogsState = {
  dogs: []
}

export const loadDogs = createAsyncThunk('dogs/loadDogs', async () => {
  const dogs = await api.loadDogs()
  return dogs
})

export const createDog = createAsyncThunk('dogs/createDog', async (dog: Dog) => {
  const dogs = await api.createDog(dog)
  return dogs
})
// export const changeDog = createAsyncThunk('dogs/changeDog', async (dog: Dog) => {
//   const dogs = await api.changeDog(dog)
//   return dogs
// })

// export const deleteDog = createAsyncThunk('dogs/deleteDog', async (dog: Dog) => {
//   const dogs = await api.deleteDog(dog)
//   return dogs
// })

const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadDogs.fulfilled, (state, action) => {
        const dogs = action.payload
        state.dogs = dogs
      })
      .addCase(createDog.fulfilled, (state, action) => {
        state.dogs.push(action.payload)
      })
  }
})

export default dogsSlice.reducer
