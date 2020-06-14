import React  from "react";
import { Col, Row, Grid } from "components/Grid";
import { CardImage } from "components/Card";
import styled from "styled-components";
import CreditIcon from 'components/Feed/CreditIcon.svg';
import PointIcon from 'components/Feed/PointIcon.svg';
import PropTypes from 'prop-types';

const FeedScoresGrid = styled(Grid)`
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FeedScoresIcon = ({ src }) =>
    <CardImage  src={src}
                width="20px"
                rounded="0px"
                border="inherit" />;

FeedScoresIcon.propTypes = {
    src: PropTypes.string,
};

const FeedScores = ({ points, credits }) => {
    return (
        <Row>
            <Col size={1}>
                <FeedScoresGrid>
                    <Col>
                        {points}
                    </Col>
                    <Col>
                        <FeedScoresIcon src={PointIcon} />
                    </Col>
                </FeedScoresGrid>
            </Col>
            <Col size={1}>
                <FeedScoresGrid>
                    <Col>
                        {credits}
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
