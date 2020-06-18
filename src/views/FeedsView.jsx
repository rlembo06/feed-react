import React, { Component, Suspense } from "react";
import { connect } from 'react-redux'
import PropTypes from "prop-types";

import { Loading } from "components/Loading";
import { FeedsList } from "components/Feed";

import ActionsGenericStore from 'store/generic/actions.generic.store'

const feedsActions = new ActionsGenericStore('feeds');

/**
 * Feeds view, with Loading component.
 */
class FeedsView extends Component {
    state = {
        isLoadNewData: false,
    };

    componentDidMount() {
        const { handleScroll } = this;
        const { getAllFeeds } = this.props;
        getAllFeeds();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }

    componentDidUpdate() {
        const { handleLoadingInBottom } = this;
        handleLoadingInBottom();
    }

    handleLoadingInBottom = () => {
        const { isLoadNewData } = this.state;

        if(isLoadNewData) {
            setTimeout(() =>
                    this.setState({ isLoadNewData: false }),
                1500)
        }
    };

    handleScroll = () => {
        const { addInListFeeds, feedsList: { metaData } } = this.props;
        const { scrollTop, offsetHeight } = document.documentElement;
        const { innerHeight } = window;

        // If scroll down
        if (innerHeight + scrollTop === offsetHeight)  {
            metaData && addInListFeeds({ skip: metaData.skip + 30 });
            this.setState({ isLoadNewData: true })
        }
    };

    render() {
        const { isLoadNewData } = this.state;
        const { feedsList: { data, isFetching } } = this.props;
        return (
            <Suspense fallback={ <Loading /> }>
                {isFetching
                    ? <Loading />
                    : (
                        <Suspense fallback={ <Loading /> }>
                            <>
                                <FeedsList data={data} />
                                { isLoadNewData && <Loading atBottom /> }
                            </>
                        </Suspense>
                    )
                }
            </Suspense>
        )
    }
}

FeedsView.propTypes = {
    feedsList: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({})),
        metaData: PropTypes.shape({}),
        isFetching: PropTypes.bool,
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

export default connect(mapStateToProps, mapDispatchToProps)(FeedsView)
