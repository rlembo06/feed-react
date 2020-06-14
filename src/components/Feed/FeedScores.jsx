import React  from "react";
import { Col, Row, Grid } from "components/Grid";
import { CardImage } from "components/Card";
import styled from "styled-components";
import CreditIcon from 'components/Feed/PointIcon.svg';
import PointIcon from 'components/Feed/CreditIcon.svg';
import PropTypes from 'prop-types';

/**
 * In order to separate and aligned point and credit in Feed
 */
const FeedScoresGrid = styled(Grid)`
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

/**
 * Component for get icon for credit or point Feed
 * @param src Icon source
 * @returns {*}
 * @constructor
 */
const FeedScoresIcon = ({ src }) =>
    <CardImage  src={src}
                width="20px"
                rounded="0px"
                border="inherit" />;

FeedScoresIcon.propTypes = {
    src: PropTypes.string,
};

/**
 * Component containing points and credits for the Feed Component
 * @param points Points earned through the activity.
 * @param credits Corresponding credits (1 credit = 5 points)
 * @returns {*}
 * @constructor
 */
const FeedScores = ({ points }) => {
    const credits = points ? Math.round(points / 5) : 0;
    return (
        <Row>
            <Col size={1}>
                <FeedScoresGrid>
                    <Col>
                        {credits}
                    </Col>
                    <Col>
                        <FeedScoresIcon src={PointIcon} />
                    </Col>
                </FeedScoresGrid>
            </Col>
            <Col size={1}>
                <FeedScoresGrid>
                    <Col>
                        {points}
                    </Col>
                    <Col>
                        <FeedScoresIcon src={CreditIcon} />
                    </Col>
                </FeedScoresGrid>
            </Col>
        </Row>
    );
};

FeedScores.propTypes = {
    points: PropTypes.number,
    credits: PropTypes.number,
};

FeedScores.defaultProps = {
    points: 0,
    credits: 0,
};

export default FeedScores;
