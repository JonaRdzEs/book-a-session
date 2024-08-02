import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserSessions, AddSessionPayload } from "../types/store-types";

const initialState: UserSessions = {
  sessions: [],
}

const userSessionsSlide = createSlice({
  name: "user-sessions",
  initialState,
  reducers: {
    addSession(state, action: PayloadAction<AddSessionPayload>):void {
      console.log(state);
      console.log(action);
      // email, name, sessionId
    },
    removeSession(state, action: PayloadAction<string>) {
      // sessionId
      console.log(state);
      console.log(action);
    }
  }
});

export { userSessionsSlide };