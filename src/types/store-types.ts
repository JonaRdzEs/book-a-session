type SavedSessions = {
  sessionId: string,
  name: string,
  email: string,
  title: string,
  summary: string,
  image: string,
};

export type UserSessions = {
  sessions: SavedSessions[]
};

export type AddSessionPayload = SavedSessions;