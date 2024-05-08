import {colors} from "../../../styles/Theme.jsx";
import PropTypes from "prop-types";

const PlainDivider = ({
    width = '90%',
    thickness = 1,
    color = colors.borderColorUf,
    align = 'center'
                      }) => {

    const style = {
        width: width,
        height: thickness,
        backgroundColor: color,
        alignSelf: align
    }

    return (
        <div style={style} />
    );
};

PlainDivider.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    thickness: PropTypes.number,
    color: PropTypes.string,
    align: PropTypes.string,
}

export default PlainDivider;