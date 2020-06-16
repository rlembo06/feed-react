import React from "react";
import { Card, CardImage, CardContent } from "components/Card";
import {Col, Row} from 'components/Grid';
import FeedScores from "components/Feed/FeedScores";
import PropTypes from 'prop-types';
import styled from "styled-components";
import colors from 'constants/colors.constant';
import { feedIcons, feedNames } from 'constants/feed.constant';
import { getFeedValueByType } from 'helpers/feedValueConverters.helper';

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
 * @param type Type feed as title
 * @param points Points earned through the activity.
 * @param feed Feed object
 * @returns {*}
 * @constructor
 */
const Feed = ({ feed: { type, points }, feed }) => {
    const icon = feed && feedIcons[type.toUpperCase()];
    const title = feed && feedNames[type.toUpperCase()];
    const valueParsed = feed && getFeedValueByType(feed);
    return (
        <Card>
            <Row>
                <Col size={1}>
                    <FeedImage src={icon} />
                </Col>
                <Col size={4}>
                    <CardContent>
                        <Row>
                            <b>{title}</b>
                        </Row>
                        <Row>
                            <FeedValue>{valueParsed}</FeedValue>
                        </Row>
                    </CardContent>
                </Col>
                <Col size={1}>
                    <FeedScores points={points} />
                </Col>
            </Row>
        </Card>
    );
};

Feed.propTypes = {
    icon: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    points: PropTypes.number,
    credits: PropTypes.number,
};

Feed.defaultProps = {
    type: 'Type',
    value: 'Value',
};

export default Feed;
