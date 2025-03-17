import { ApiResponse } from "@/services";
import { ClubType } from "../features/clubs/types/clubType";

export type FavoriteResponseType = ApiResponse<ClubType[]>
