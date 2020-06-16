import React from 'react';
import spinner from './spinner-200.gif';
import styled from "styled-components";

const LoadingContainer = styled.div`
    position: fixed;
    width: 100%;
    vertical-align: middle;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Loading = () =>
    <LoadingContainer>
        <img src={spinner} alt="Loading..."/>;
    </LoadingContainer>;

export default Loading;
