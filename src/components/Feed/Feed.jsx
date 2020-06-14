import React from "react";
import { Card, CardImage, CardContent } from "components/Card";
import { Col, Row } from 'components/Grid';
import FeedScores from "components/Feed/FeedScores";
import PropTypes from 'prop-types';

const FeedImage = ({ src }) =>
    <CardImage  src={src}
                rounded="0px"
                border="inherit" />;

FeedImage.propTypes = {
    src: PropTypes.string,
};

export default function Feed() {
    return (
        <Card>
            <Row>
                <Col size={1}>
                    <FeedImage />
                </Col>
                <Col size={4}>
                    <CardContent>Feed</CardContent>
                </Col>
                <Col size={1}>
                    <FeedScores />
                </Col>
            </Row>
        </Card>
    )
}
