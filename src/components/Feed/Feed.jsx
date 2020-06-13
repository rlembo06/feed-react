import React from "react";
import { Card, CardImage, CardContent } from "components/Card";
import { Col, Row } from 'components/Grid';

export default function Feed() {
    return (
        <Card>
            <Row>
                <Col size={1}>
                    <CardImage />
                </Col>
                <Col size={4}>
                    <CardContent>Feed</CardContent>
                </Col>
            </Row>
        </Card>
    )
}
