import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const ClubList = lazy(() => import("../pages/ClubList"));
const ClubDetail = lazy(() => import("../pages/ClubDetail"));
const Recruitment = lazy(() => import("../pages/Recruitment"));
const Login = lazy(() => import("@/features/login/Login"));
const Favorite = lazy(() => import("../pages/Favorite"));
const NoResults = lazy(() => import("@/components/NoResults"));
const SystemMaintenance = lazy(() => import("../pages/SystemMaintenance"));
const UserInfo = lazy(() => import("@/features/user/UserInfo"));
const NotFound = lazy(() => import("../pages/NotFound"));


export {
  Home,
  ClubDetail,
  ClubList,
  Recruitment,
  Login,
  Favorite,
  NoResults,
  SystemMaintenance,
  UserInfo,
  NotFound,
};
