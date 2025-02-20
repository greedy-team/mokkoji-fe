import { authHandlers } from "./auth";
import { clubsHandlers } from "./clubs";
import { recruitHandlers } from "./recruit";
import { userHandlers } from "./user"; 

export const handlers = [...recruitHandlers, ...clubsHandlers, ...authHandlers, ...userHandlers,];
