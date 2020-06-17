import React, { lazy } from "react";

import styled from "styled-components";
import { Col, Row } from "components/Grid";
import { groupFeedByDay, convertDate } from 'helpers/feedValueConverters.helper';
import colors from 'constants/colors.constant';
import PropTypes from "prop-types";

const Feed = lazy(() => import("components/Feed/Feed"));

/**
 * Component for wrap the Feeds list
 */
const FeedsListContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

/**
 * Component for display the date Feed groups
 */
const DateFeedsGroup = styled.div`
    margin: 0 10px;
    font-weight: bolder;
    color: ${colors.GREY_DEEP}
`;

/**
 * Component render a feeds list according to its groups and its date.
 * @param data List of feed groups by date
 * @returns {*|boolean|*[]}
 * @constructor
 */
const FeedsListGroup = ({ data }) => {
    const feeds = data ? groupFeedByDay(data) : {};
    return feeds ?
        Object.entries(feeds).length > 0 &&
        Object.entries(feeds).map(([date, group], kGroup) => (
            <Col key={`col-group-${kGroup}`}>
                <>
                    <DateFeedsGroup>
                        {date && convertDate(date)}
                    </DateFeedsGroup>
                    {group.map((feed, kFeed) => (
                        <Row key={`row-group-${kFeed}`}>
                            <Feed feed={feed} />
                        </Row>
                    ))}
                </>
            </Col>
        )) : <></>;
};

FeedsListGroup.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})),
};

FeedsListGroup.defaultProps = {
    data: []
};

/**
 * Feeds list container
 */
const FeedsList = ({ data }) => (
    <FeedsListContainer>
        { data && data.length > 0 ? (
            <Col size={1}>
                <FeedsListGroup data={data} />
            </Col>
        ) : <p>No data</p> }
    </FeedsListContainer>
);

FeedsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})),
};

export default FeedsList;
