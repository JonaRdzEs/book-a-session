type SavedSessions = {
  sessionId: string,
  name: string,
  email: string,
};

export type UserSessions = {
  sessions: SavedSessions[]
};

export type AddSessionPayload = SavedSessions;