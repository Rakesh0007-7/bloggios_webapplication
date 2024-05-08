"use client";

import styles from './ImageWrapper.module.scss';
import PropTypes from "prop-types";
import Image from "next/image";
import {bgAccentRounded, notFoundSvg} from "../../../public/assets/svg";

const ImageWrapper = ({
    image = bgAccentRounded,
    alt = 'Bloggios',
    size,
    borderRadius,
    border,
    style
                      }) => {

    const inlineStyle = {
        width: size,
        height: size,
        borderRadius: borderRadius,
        border: border
    }

    const combinedStyle = {
        ...inlineStyle,
        ...style
    }

    const handleImageError = (event) => {
        event.target.src = notFoundSvg
    }

    return (
        <div
            style={combinedStyle}
            className={styles.image__mainWrapper__div}
        >
            <Image
                src={image}
                alt={'bloggios'}
                onError={()=> handleImageError}
            />
        </div>
    );
};

ImageWrapper.propTypes = {
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    alt: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    borderRadius: PropTypes.string,
    border: PropTypes.string,
    style: PropTypes.object
}

export default ImageWrapper;