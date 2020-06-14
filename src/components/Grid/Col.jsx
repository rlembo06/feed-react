import styled from "styled-components";
import PropTypes from 'prop-types';

/**
 * In order to organized columns in component
 */
const Col = styled.div`
    flex: ${ props => props && props.size };
`;

Col.propTypes = {
    size: PropTypes.number,
};

export default Col;
