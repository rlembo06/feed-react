import React  from "react";
import styled from "styled-components";
import colors from 'constants/colors.constant';
import DefaultImage from 'components/Card/DefaultImage.svg'
import PropTypes from 'prop-types';

/**
 * Wrapper component of the image
 */
const CardImageContainer = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${ props => props && props.border };
    height: ${ props => props && props.size };
    width: ${ props => props && props.size };
    border-radius: ${ props => props && props.rounded };
`;

CardImageContainer.propTypes = {
    border: PropTypes.string,
    size: PropTypes.string,
    rounded: PropTypes.string,
};

CardImageContainer.defaultProps = {
    border: `2px solid ${colors.GREY_LIGHT}`,
    size: '50px',
    rounded: '50%',
};

/**
 * Styled-component containing src attribute
 */
const CardImageResource = styled.img`
    width: ${ props => props && props.width };
    height: auto;
`;

CardImageResource.propTypes = {
    width: PropTypes.string,
};

CardImageResource.defaultProps = {
    width: '100%',
};

/**
 * Component for get image or icon in Card
 * @param src Image / icon source
 * @param rounded For rounded corner, data in percent
 * @param alt Image description
 * @param width Image Width
 * @param size Image container size
 * @param border Image border, CSS rule
 * @returns {*}
 * @constructor
 */
const CardImage = ({ src, rounded, alt, width, size, border }) => (
    <CardImageContainer border={border}
                        rounded={rounded}
                        size={size}>
        <CardImageResource src={src}
                           width={width}
                           alt={alt || '...'} />
    </CardImageContainer>
);

CardImage.propTypes = {
    src: PropTypes.string,
    rounded: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    size: PropTypes.string,
    border: PropTypes.string,
};

CardImage.defaultProps = {
    src: DefaultImage,
};

export default CardImage;
