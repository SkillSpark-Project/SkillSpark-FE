import { useRoutes } from "react-router-dom";
import AdminDashboard from "../pages/admins/AdminDashboard";
import { Home } from "../pages/learners/Homepage/Home";
import MentorDashboard from "../pages/mentors/MentorDashboard";
import { HomeNavigate, LoginNavigate } from "../pages/notFoundPage/NotFound";
import AdminRoute from "./AdminRoute";
import LearnerRouter from "./LearnerRouter";
import MentorRoute from "./MentorRoute";
import Cookies from "universal-cookie";
import Login from "../pages/auths/Login";
import { AnimatePresence } from "framer-motion";
import Log from "../pages/auths/Log";
import Register from "../pages/auths/Register";
import CourseList from "../pages/learners/CoursePage/CourseList";

function Router() {
  const cookies = new Cookies();
  const userInfo = cookies.get("user");

  const element = useRoutes([
    {
      element: <LearnerRouter />,
      children: [
        ...(!userInfo //chua dang nhap
          ? [
              {
                path: "/Login",
                element: <Log />,
              },
              {
                path: "/Register",
                element: <Register />,
              },
              {
                path: "*",
                element: <LoginNavigate />,
              },
            ]
          : []),
        ...(userInfo?.listRoles?.includes("Learner") //nhung tin nang mà chỉ learner thoi
          ? [
              {
                path: "*",
                element: <HomeNavigate />,
              },
            ]
          : []),
        ...(!userInfo || //nhung tin nang dung chung ma khong can dang nhap
        userInfo?.listRoles?.includes("Learner") ||
        userInfo?.listRoles?.includes("Mentor")
          ? [
              {
                path: "/",
                element: <Home />,
              },
              {
                path: "/course",
                element: <CourseList />,
              },
            ]
          : []),
        ...(userInfo?.listRoles?.includes("Mentor") // nhung tin nang cua mentor thoi
          ? [
              {
                path: "/mentor",
                element: <MentorRoute />,
              },
            ]
          : []),
      ],
    },
    {
      element: <MentorRoute />,
      children: [
        ...(userInfo?.listRoles?.includes("Mentor")
          ? [
              {
                path: "/mentor",
                element: <MentorDashboard />,
              },
            ]
          : []),
      ],
    },
    {
      element: <AdminRoute />,
      children: [
        ...(userInfo?.listRoles?.includes("Admin")
          ? [
              {
                path: "/admin",
                element: <AdminDashboard />,
              },
            ]
          : []),
      ],
    },
  ]);
  if (!element) return null;
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {element}
      </AnimatePresence>
    </>
  );
}

export default Router;
