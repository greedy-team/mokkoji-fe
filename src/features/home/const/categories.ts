import Academic from "@/assets/category/Academic.svg";
import Cultural from "@/assets/category/Cultural.svg";
import Religious from "@/assets/category/Religious.svg";
import Sports from "@/assets/category/Sports.svg";
import Volunteer from "@/assets/category/Volunteer.svg";
import Group from "@/assets/category/Group.svg";
import { ClubCategory } from "@/features/clubs/types/clubType";

export const categories = [
  {
    name: "학술/교양",
    img: Academic,
    filter: ClubCategory.ACADEMIC_CULTURAL,
  },
  { name: "문화/예술", img: Cultural, filter: ClubCategory.CULTURAL_ART },
  {
    name: "봉사/사회",
    img: Volunteer,
    filter: ClubCategory.VOLUNTEER_SOCIAL,
  },
  { name: "친목", img: Group, filter: ClubCategory.SOCIAL },
  { name: "체육", img: Sports, filter: ClubCategory.SPORTS },
  { name: "종교", img: Religious, filter: ClubCategory.RELIGIOUS },
];
