import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FilterOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import { Button, Col, Flex, Layout, Menu, Row, Typography, theme } from "antd";
import { Link } from "react-router-dom";
import HeaderFilter from "./HeaderFilter";
import Filter from "./Filter";
import CourseCard from "./CourseCard";
import CourseSmallCard from "./CourseSmallCard";
const { Header, Sider, Content } = Layout;

const courses = [
  {
    id: 1,
    title: "Lập trình Hướng đối tượng với C++ cơ bản đến nâng cao",
    description: "Hiểu rõ phương pháp lập trình hướng đối tượng với C++",
    author: "Khoa Nguyen",
    rating: 4.7,
    reviews: 436,
    duration: "Tổng số 12 giờ",
    lectures: "93 bài giảng",
    level: "Tất cả trình độ",
    price: "₫ 1.249.000",
    imageUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", // Thay đổi đường dẫn hình ảnh
  },
  {
    id: 2,
    title: "React Ultimate - React.JS Cơ Bản Từ Z Đến A Cho Beginners",
    description: "Hiểu và Làm Chủ React (Chỉ Học Những Thứ Cần Thiết)",
    author: "Hỏi Dân IT với Eric",
    rating: 4.7,
    reviews: 284,
    duration: "Tổng số 20,5 giờ",
    lectures: "124 bài giảng",
    level: "Tất cả trình độ",
    price: "₫ 699.000",
    imageUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", // Thay đổi đường dẫn hình ảnh
  },
  {
    id: 3,
    title: "React Ultimate - React.JS Cơ Bản Từ Z Đến A Cho Beginners",
    description: "Hiểu và Làm Chủ React (Chỉ Học Những Thứ Cần Thiết)",
    author: "Hỏi Dân IT với Eric",
    rating: 4.7,
    reviews: 284,
    duration: "Tổng số 20,5 giờ",
    lectures: "124 bài giảng",
    level: "Tất cả trình độ",
    price: "₫ 699.000",
    imageUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", // Thay đổi đường dẫn hình ảnh
  },
];
const CourseList = () => {
  const [isFilter, setIsFilter] = useState(true);
  const [isCard, setIsCard] = useState(false);
  useEffect(() => {
    // Hành động nào đó khi isFilter thay đổi
    console.log("isFilter đã thay đổi:", isFilter);
  }, [isFilter]);
  return (
    <>
      <HeaderFilter
        setIsFilter={setIsFilter}
        isFilter={isFilter}
        setIsCard={setIsCard}
        isCard={isCard}
      />
      <Row gutter={16} className="mt-4">
        {isFilter ? (
          <>
            <Filter />
            <Col className="gutter-row" span={18}>
              <div>
                {!isCard ? (
                  <>
                    {courses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </>
                ) : (
                  <Row gutter={16}>
                    {courses.map((course) => (
                      <Col span={8}>
                        <CourseSmallCard key={course.id} course={course} />
                      </Col>
                    ))}
                  </Row>
                )}
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col className="gutter-row">
              <div>
                {!isCard ? (
                  <Row gutter={16}>
                    {courses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </Row>
                ) : (
                  <Row gutter={16}>
                    {courses.map((course) => (
                      <Col span={8}>
                        <CourseSmallCard key={course.id} course={course} />
                      </Col>
                    ))}
                  </Row>
                )}
              </div>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};
export default CourseList;
