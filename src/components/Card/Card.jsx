import styled  from 'styled-components';
import colors from 'constants/colors.constant';
import PropTypes from 'prop-types';

/**
 * Component for containing some data
 */
const Card = styled.div`
    overflow: hidden;
    padding: 10px;
    margin: 10px;
    width: 100%;
    -webkit-box-shadow: 5px 8px 7px 2px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 8px 7px 2px rgba(0,0,0,0.25);
    box-shadow: 5px 8px 7px 2px rgba(0,0,0,0.25);
    border-radius: 10px;
    background-color: ${ props => props && props.backgroundColor };
    color: ${ props => props && props.color };
`;

Card.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
};

Card.defaultProps = {
    backgroundColor: colors.BLUE_PALE,
    color: colors.GREY_DARK,
};

export default Card;
