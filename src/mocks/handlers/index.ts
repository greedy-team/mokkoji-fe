import { authHandlers } from "./auth";
import { recruitHandlers } from "./recruit";

export const handlers = [...recruitHandlers, ...authHandlers];
