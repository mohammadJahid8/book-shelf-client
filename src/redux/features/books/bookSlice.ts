import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBook {
  searchQuery: string;
  genre: string;
  publicationDate: string;
}

const initialState: IBook = {
  searchQuery: "",
  genre: "",
  publicationDate: "",
};

const userSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setPublicationDate: (state, action: PayloadAction<string>) => {
      state.publicationDate = action.payload;
    },
  },
});

export const { setGenre, setSearchQuery, setPublicationDate } =
  userSlice.actions;
export default userSlice.reducer;
