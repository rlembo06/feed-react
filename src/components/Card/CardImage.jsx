import React  from "react";
import styled from "styled-components";
import colors from 'constants/colors.constant';

const CardImageContainer = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${props => (props && props.border) || `2px solid ${colors.GREY_LIGHT}`};
    height: ${props => (props && props.size) || '50px'};
    width: ${props => (props && props.size) || '50px'};
    border-radius: ${props => (props && props.rounded) || '50%'};
`;

const CardImageResource = styled.img`
    width: ${props => (props && props.width) || '100%'};
    height: auto;
`;

const CardImage = ({ src, rounded, alt, width, border }) => (
    <CardImageContainer>
        <CardImageResource src={src || './images/walking.png'}
                           width={width}
                           border={border}
                           rounded={rounded}
                           alt={alt} />
    </CardImageContainer>
);

export default CardImage;
