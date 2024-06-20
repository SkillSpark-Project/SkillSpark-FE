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

function Router() {
  const cookies = new Cookies();
  const userInfo = cookies.get("user");
  console.log(userInfo);

  const element = useRoutes([
    {
      element: <LearnerRouter />,
      children: [
        ...(!userInfo
          ? [
              {
                path: "/Login",
                element: <Login />,
              },
              {
                path: "*",
                element: <LoginNavigate />,
              },
            ]
          : []),
        ...(userInfo?.role == "Learner"
          ? [
              {
                path: "*",
                element: <HomeNavigate />,
              },
            ]
          : []),
        ...(!userInfo || userInfo?.role == "Learner"
          ? [
              {
                path: "/",
                element: <Home />,
              },
            ]
          : []),
      ],
    },
    {
      element: <MentorRoute />,
      children: [
        ...(userInfo?.role == "Mentor"
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
        ...(userInfo?.role == "Admin"
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
  console.log(element);
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
