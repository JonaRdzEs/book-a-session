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
      const isSessionRegistered = state.sessions.find((session) => session.sessionId === action.payload.sessionId);
      if(isSessionRegistered) {
        console.log("You cannot register to the same session");
        return;
      }

      state.sessions.push(action.payload);

    },
    removeSession(state, action: PayloadAction<string>) {
      const sessionIndex = state.sessions.findIndex((session) => session.sessionId === action.payload);
      if(sessionIndex >= 0) {
        state.sessions.splice(sessionIndex, 1)
      }
    }
  }
});

const { addSession, removeSession } = userSessionsSlide.actions;

export { userSessionsSlide, addSession, removeSession };