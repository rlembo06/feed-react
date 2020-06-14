import React from "react";
import { Card, CardImage, CardContent } from "components/Card";
import {Col, Row} from 'components/Grid';
import FeedScores from "components/Feed/FeedScores";
import PropTypes from 'prop-types';
import styled from "styled-components";
import colors from 'constants/colors.constant';

/**
 * Component for get image or icon in Feed
 * @param src Image / icon source
 * @returns {*}
 * @constructor
 */
const FeedImage = ({ src }) =>
    <CardImage  src={src}
                rounded="0px"
                border="inherit" />;

FeedImage.propTypes = {
    src: PropTypes.string,
};

/**
 * Component used as Feed value
 */
const FeedValue = styled.div`
    color: ${colors.GREY_DEEP}
`;

/**
 * Component used as Feed item
 * @param icon Image / icon source
 * @param type Type feed as title
 * @param value Value feed, like distance or time
 * @param points Points earned through the activity.
 * @param credits Corresponding credits (1 credit = 5 points)
 * @returns {*}
 * @constructor
 */
const Feed = ({ icon, type, value, points, credits }) => (
    <Card>
        <Row>
            <Col size={1}>
                <FeedImage src={icon} />
            </Col>
            <Col size={4}>
                <CardContent>
                    <Row>
                        <b>{type}</b>
                    </Row>
                    <Row>
                        <FeedValue>{value}</FeedValue>
                    </Row>
                </CardContent>
            </Col>
            <Col size={1}>
                <FeedScores points={points} credits={credits} />
            </Col>
        </Row>
    </Card>
);

Feed.propTypes = {
    icon: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    points: PropTypes.number,
    credits: PropTypes.number,
};

Feed.defaultProps = {
    type: 'Type',
    value: 'Value',
};

export default Feed;
