import { isLoginChecking } from "@/features/login/store/useAuthStore";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

function CheckAuthLoader() {
  const loginChecking = isLoginChecking();

  if (loginChecking) {
    toast("로그인을 해야 이용하실 수 있습니다");
    return redirect("/");
  }

  return null;
}

export default CheckAuthLoader;
