import React, { Component } from "react";
import { connect } from 'react-redux'
import ActionsGenericStore from 'store/generic/actions.generic.store'

import Feed from "components/Feed/Feed";
import styled from "styled-components";

const activitiesActions = new ActionsGenericStore('activities');

const FeedsListContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class FeedsList extends Component {
    componentDidMount() {
        const { getAllActivities } = this.props;
        getAllActivities();
    }

    render() {
        const { activitiesList } = this.props;
        return (
            <FeedsListContainer>
                <Feed />
            </FeedsListContainer>
        )
    }
}

const mapStateToProps = state => ({
    activitiesList: state.activities.list
});

const mapDispatchToProps = dispatch => ({
    getAllActivities: payload => dispatch(activitiesActions.GET_ALL(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedsList)
