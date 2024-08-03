import React, { useState } from "react";
import {
  FilterOutlined,
  SortAscendingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Col, Flex, Layout, Menu, Row, Typography, theme } from "antd";
import { Link } from "react-router-dom";
const HeaderFilter = ({ setIsFilter, isFilter, setIsCard, isCard }) => {
  return (
    <Row gutter={16} className="mt-4">
      <Col className="gutter-row " span={6}>
        <div>
          <Flex justify="flex-start" align="center">
            <Button
              size="large"
              className="text-sm font-semibold text-center button-border-hover-green p-6"
              onClick={() => setIsFilter(!isFilter)}
            >
              <FilterOutlined />
              Bộ lọc
            </Button>
            <Link to="/Register">
              <Button
                size="large"
                className="text-sm font-semibold text-center button-border-hover-green m-2 p-6"
              >
                <SortAscendingOutlined />
                Sắp xếp theo
              </Button>
            </Link>
          </Flex>
        </div>
      </Col>
      <Col className="gutter-row" span={12}></Col>
      <Col className="gutter-row flex items-center justify-end" span={6}>
        <div className=" font-semibold ">99 Kết quả</div>
        <Button
          size="large"
          className="text-sm font-semibold text-center button-border-hover-green ml-2"
          onClick={() => setIsCard(!isCard)}
        >
          <UnorderedListOutlined />
        </Button>
      </Col>
    </Row>
  );
};
export default HeaderFilter;
