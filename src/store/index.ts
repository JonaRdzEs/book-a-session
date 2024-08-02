import { configureStore } from "@reduxjs/toolkit";
import { userSessionsSlide } from "./userSessionsSlide";

export const store = configureStore({
  reducer: {
    userSessions: userSessionsSlide.reducer,
  }
});

export type GlobalState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
