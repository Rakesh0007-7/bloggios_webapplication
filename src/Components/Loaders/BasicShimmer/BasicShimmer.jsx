import style from "./BasicShimmer.module.scss";
import {useMemo} from "react";
import PropTypes from "prop-types";

const BasicShimmer = ({
    height = 120,
    width = '100%',
    borderRadius = '10px'
                      }) => {

    const mainStyle = {
        height: height,
        width: width,
        borderRadius: borderRadius,
    }

    const childStyle = {
        borderRadius: borderRadius
    }

    const getRows = useMemo(()=> {
        let rows = (height/40) - 1;
        for (let i=0 ; i<rows ; i++) {
            return (
                <div key={i} style={childStyle} />
            )
        }
    }, [height]);

    return (
        <div style={mainStyle} className={style.basicShimmer__main__div}>
            {getRows}
        </div>
    );
};

BasicShimmer.propTypes = {
    height: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderRadius: PropTypes.string,
}

export default BasicShimmer;