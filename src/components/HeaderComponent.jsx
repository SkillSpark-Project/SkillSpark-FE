import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Flex,
  Input,
  Layout,
  theme,
} from "antd";
import logo from "../assets/logoskillver.png";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  HeartOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import DropdownCate from "./DropdownCate";
import { useState } from "react";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { allCategory } from "../redux/slice/categorySlide";
import DropdownProfile from "./DropdownProfile";
const { Content, Footer, Header } = Layout;
const boxStyle = {
  width: "100%",
  height: "100%",
};
const HeaderComponent = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const userInfo = cookies.get("user");
  const [show, setShow] = useState(true);
  return (
    <>
      <Header
        className="bg-white shadow-2xl flex items-center"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div />
        <Flex justify="space-evenly" align="center" style={boxStyle}>
          <div className="flex justify-center items-center h-screen">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-32" />
            </Link>
          </div>
          <DropdownCate />

          <Input
            className="rounded-full border-black w-96 transition-all duration-300 input-hover-green "
            size="large"
            placeholder="Tìm khiếm khóa học..."
            prefix={<SearchOutlined />}
            allowClear
          />
          {userInfo && userInfo?.listRoles?.includes("Mentor") ? (
            <div className=" font-semibold">Giảng dạy</div>
          ) : (
            <div className=" font-semibold">Giảng dạy trên SkillSpark</div>
          )}
          {userInfo ? <div className=" font-semibold">Học tập</div> : <></>}
          {userInfo ? (
            <a href="#" className="mt-3 hover:text-[#26a59a]">
              <HeartOutlined className="text-2xl mt-3" />
            </a>
          ) : (
            <></>
          )}

          <a href="#" className="mt-3 hover:text-[#26a59a]">
            <Badge count={show ? 109 : 0} offset={[2, -2]}>
              <ShoppingCartOutlined className="text-2xl" />
            </Badge>
          </a>
          {userInfo ? (
            <a href="#" className="mt-3 hover:text-[#26a59a]">
              <BellOutlined className="text-2xl mt-3" />
            </a>
          ) : (
            <></>
          )}
          {userInfo ? (
            <DropdownProfile userInfo={userInfo} />
          ) : (
            <div>
              <Link to="/Login">
                <Button
                  size="large"
                  className="text-sm font-semibold text-center button-border-hover-green"
                >
                  Đăng nhập
                </Button>
              </Link>
              <Link to="/Register">
                <Button
                  size="large"
                  className="text-sm m-2 bg-[#26a59a] text-white font-semibold button-full-hover-green"
                >
                  Đăng ký
                </Button>
              </Link>
            </div>
          )}
        </Flex>
      </Header>
    </>
  );
};
export default HeaderComponent;
