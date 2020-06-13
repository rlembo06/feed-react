import React, { Component } from "react";
import Feed from "components/Feed/Feed";
import styled from "styled-components";

const FeedsListContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default class FeedsList extends Component {
    render() {
        return (
            <FeedsListContainer>
                <Feed />
            </FeedsListContainer>
        )
    }
}
