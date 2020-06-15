import React, { Component, Suspense, lazy } from "react";
import { connect } from 'react-redux'
import ActionsGenericStore from 'store/generic/actions.generic.store'

import styled from "styled-components";
import { Col, Row } from "components/Grid";
import Loading from "components/Loading/Loading";

const Feed = lazy(() => import("components/Feed/Feed"));

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
                                        {data.map((feed, key) => (
                                            <Row key={`row-feed-${key}`}>
                                                <Feed feed={feed} />
                                            </Row>
                                        ))}
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

const mapStateToProps = state => ({
    feedsList: state.feeds.list
});

const mapDispatchToProps = dispatch => ({
    getAllFeeds: payload => dispatch(feedsActions.GET_ALL(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedsList)
