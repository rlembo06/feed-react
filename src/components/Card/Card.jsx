import styled  from 'styled-components';
import colors from 'constants/colors.constant';

const Card = styled.div`
    overflow: hidden;
    padding: 10px;
    margin: 10px;
    width: 90%;
    -webkit-box-shadow: 5px 8px 7px 2px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 8px 7px 2px rgba(0,0,0,0.25);
    box-shadow: 5px 8px 7px 2px rgba(0,0,0,0.25);
    border-radius: 10px;
    background-color: ${props => (props && props.backgroundColor) || colors.BLUE_PALE};
    color: ${props => (props && props.color) || colors.GREY_DARK};
`;

export default Card;
