import React from "react";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const DropdownProfile = ({ userInfo }) => {
  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("user", { path: "/" });
    cookies.remove("userData", { path: "/" });
  };
  const items = [
    {
      key: "1",
      danger: true,
      label: (
        <Link to="/login" className="text-black" onClick={handleLogout}>
          Đăng xuất
        </Link>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {userInfo && userInfo?.Avatar != null ? (
            <Avatar size="large"></Avatar>
          ) : (
            <Avatar size="large" icon={<UserOutlined />} />
          )}
        </Space>
      </a>
    </Dropdown>
  );
};
export default DropdownProfile;
