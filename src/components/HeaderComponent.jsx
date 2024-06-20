import { Badge, Breadcrumb, Button, Flex, Input, Layout, theme } from "antd";
import logo from "../assets/logoskillver.png";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import DropdownCate from "./DropdownCate";
import { useState } from "react";
const { Content, Footer, Header } = Layout;
const boxStyle = {
  width: "100%",
  height: "100%",
};
const HeaderComponent = () => {
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
          <div className=" font-semibold">Giảng dạy trên SkillSpark</div>

          <a href="#" className="mt-3">
            <Badge count={show ? 109 : 0} offset={[2, -2]}>
              <ShoppingCartOutlined className="text-2xl" />
            </Badge>
          </a>

          <div>
            <Link to="/Login">
              <Button
                size="large"
                className="text-sm font-semibold text-center button-border-hover-green"
              >
                Đăng nhập
              </Button>
            </Link>
            <Link to="/Login">
              <Button
                size="large"
                className="text-sm m-2 bg-[#26a59a] text-white font-semibold button-full-hover-green"
              >
                Đăng ký
              </Button>
            </Link>
          </div>
        </Flex>
      </Header>
    </>
  );
};
export default HeaderComponent;
