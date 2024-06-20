import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export function HomeNavigate() {
  return <Navigate to={{ pathname: "/" }} />;
}

export function LoginNavigate() {
  useEffect(() => {
    toast.warning("Bạn cần đăng nhập để truy cập trang này.");
  }, []);

  return <Navigate to={{ pathname: "/login" }} />;
}
