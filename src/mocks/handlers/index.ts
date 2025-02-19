import { authHandlers } from "./auth";
import { clubsHandlers } from "./clubs";
import { recruitHandlers } from "./recruit";

export const handlers = [...recruitHandlers, ...clubsHandlers, ...authHandlers];
