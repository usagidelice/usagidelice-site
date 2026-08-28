export type EventItem = {
  title: string;
  dateLabel: string;
  location: string;
  status: "upcoming" | "regular" | "past";
  description: string;
};

import eventsData from "./events.json";

export const events = eventsData as EventItem[];
