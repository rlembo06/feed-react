import React, { Component, Suspense } from "react";
import { connect } from 'react-redux'
import ActionsGenericStore from 'store/generic/actions.generic.store'

import Feed from "components/Feed/Feed";
import styled from "styled-components";
import { Col, Row } from "components/Grid";
import Loading from "components/Loading/Loading";

const feedsActions = new ActionsGenericStore('feeds');

const FeedsListContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class FeedsList extends Component {
    componentDidMount() {
        const { getAllFeeds } = this.props;
        getAllFeeds();
    }

    render() {
        const { feedsList: { data } } = this.props;
        return (
            <Suspense fallback={ <Loading /> }>
                <FeedsListContainer>
                    <Col size={1}>
                        {data && data.length > 0 && data.map((feed, key) => (
                            <Row key={`row-feed-${key}`}>
                                <Feed type={feed && feed.type}
                                      value={feed && feed.steps}
                                      points={feed && feed.points} />
                            </Row>
                        ))}
                    </Col>
                </FeedsListContainer>
            </Suspense>
        )

    }
}

const mapStateToProps = state => ({
    feedsList: state.feeds.list
});

const mapDispatchToProps = dispatch => ({
    getAllFeeds: payload => dispatch(feedsActions.GET_ALL(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedsList)
