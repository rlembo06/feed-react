import React from 'react';
import spinner from './spinner-200.gif';
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Styled-component for Loading component
 */
const LoadingContainer = styled.div`
    position: fixed;
    width: 100%;
    height: ${props => props.atBottom ? 'inherit' : '100%'};
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: ${props => props.atBottom ? '0' : 'inherit'};
`;

LoadingContainer.propTypes = {
    atBottom: PropTypes.bool,
};

LoadingContainer.defaultProps = {
    atBottom: false,
};

/**
 * Component used as Spinner
 * @param atBottom Bool for placed this component at the bottom of page
 * @returns {*}
 * @constructor
 */
const Loading = ({ atBottom }) =>
    <LoadingContainer atBottom={atBottom}>
        <img src={spinner} alt="Loading..."/>;
    </LoadingContainer>;

Loading.propTypes = {
    atBottom: PropTypes.bool,
};

export default Loading;
