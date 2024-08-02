import { Session } from "."

export type UserSessions = {
  sessions: Session[]
};

export type AddSessionPayload = {
  email: string,
  name: string,
  sessionId: string,
};