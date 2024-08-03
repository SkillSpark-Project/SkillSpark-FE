import React, { useEffect, useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { allCategory } from "../redux/slice/categorySlide";
import { Link } from "react-router-dom";

const DropdownCate = () => {
  const [items, setItems] = useState([]);
  const categories = useSelector((state) => state.category.allCategoryDTO);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCategory());
  }, [dispatch]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      const temps = categories.map((category) => ({
        key: category.id,
        label: (
          <a target="_blank" rel="noopener noreferrer" href={category.id}>
            {category.name}
          </a>
        ),
        icon: category.icon ? <SmileOutlined /> : null,
      }));
      setItems(temps);
    }
  }, [categories]);

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <Link to="/course">
        <Space>
          <div className=" font-semibold text-hover-green">Danh Mục</div>
          <DownOutlined />
        </Space>
      </Link>
    </Dropdown>
  );
};
export default DropdownCate;
