import React, { Component, Suspense, lazy } from "react";
import { connect } from 'react-redux'
import ActionsGenericStore from 'store/generic/actions.generic.store'

import styled from "styled-components";
import { Col, Row } from "components/Grid";
import Loading from "components/Loading/Loading";
import { groupFeedByDay, convertDate } from 'helpers/feedValueConverters.helper';
import colors from 'constants/colors.constant';
import PropTypes from "prop-types";

const Feed = lazy(() => import("components/Feed/Feed"));

const feedsActions = new ActionsGenericStore('feeds');

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
        )) : null;
};


FeedsListGroup.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})),
};

FeedsListGroup.defaultProps = {
    data: []
};

/**
 * Feeds list container, with Loading component.
 */
class FeedsList extends Component {
    componentDidMount() {
        const { handleScroll } = this;
        const { getAllFeeds } = this.props;
        getAllFeeds();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }

    handleScroll = () => {
        const { addInListFeeds, feedsList: { metaData } } = this.props;
        const { scrollTop, offsetHeight } = document.documentElement;
        const { innerHeight } = window;
        if (innerHeight + scrollTop === offsetHeight)  {
            metaData && addInListFeeds({ skip: metaData.skip + 1 });
        }
    };

    render() {
        const { feedsList: { data, isFetching } } = this.props;

        return (
            <Suspense fallback={ <Loading /> }>
                {isFetching
                    ? <Loading />
                    : (
                        <Suspense fallback={ <Loading /> }>
                            <FeedsListContainer>
                                { data && data.length > 0 ? (
                                    <Col size={1}>
                                        <FeedsListGroup data={data} />
                                    </Col>
                                ) : <p>No data</p> }
                            </FeedsListContainer>
                        </Suspense>
                    )
                }
            </Suspense>
        )
    }
}

FeedsList.propTypes = {
    feedsList: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    getAllFeeds: PropTypes.func,
    addInListFeeds: PropTypes.func,
};

const mapStateToProps = state => ({
    feedsList: state.feeds.list
});

const mapDispatchToProps = dispatch => ({
    getAllFeeds: payload => dispatch(feedsActions.GET_ALL(payload)),
    addInListFeeds: payload => dispatch(feedsActions.ADD_IN_LIST(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedsList)
