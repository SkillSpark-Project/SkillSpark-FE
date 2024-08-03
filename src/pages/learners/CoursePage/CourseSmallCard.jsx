import React from "react";
import { Card, Rate, Row, Col } from "antd";
const CourseSmallCard = ({ course }) => (
  <Card
    hoverable
    style={{ marginBottom: 16 }}
    cover={<img alt={course.title} src={course.imageUrl} />}
  >
    <Row gutter={[16, 16]}>
      <Col span={24}>
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
      <Col span={24}>
        <h2 className="text-base font-bold">{course.price}</h2>
      </Col>
    </Row>
  </Card>
);

export default CourseSmallCard;
