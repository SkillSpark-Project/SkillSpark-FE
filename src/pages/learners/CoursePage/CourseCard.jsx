import React from "react";
import { Card, Rate, Row, Col, Flex } from "antd";

const CourseCard = ({ course }) => (
  <Card hoverable className="mb-4 w-full">
    <Row gutter={[16, 16]}>
      <Col span={6} className="flex items-center justify-center">
        <img
          alt={course.title}
          src={course.imageUrl}
          className="w-full h-32 object-cover"
        />
      </Col>
      <Col span={14}>
        <h3 className="font-bold text-base">{course.title}</h3>
        <p>{course.description}</p>
        <p>
          <div className="text-gray-500 text-hover-green">{course.author}</div>
        </p>
        <div className="flex items-center">
          <Rate disabled defaultValue={course.rating} className="text-sm" />
          <span className="ml-2 text-sm">
            {course.rating} ({course.reviews})
          </span>
        </div>
        <p className="text-gray-500">
          {course.duration} - {course.lectures} - {course.level}
        </p>
      </Col>
      <Col span={4} className="flex items-center justify-end">
        <h2 className="text-base font-bold">{course.price}</h2>
      </Col>
    </Row>
  </Card>
);

export default CourseCard;
