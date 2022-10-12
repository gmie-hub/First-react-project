import { Fragment } from "react";

const Image = ({width, height, src, className}) => {
    return(
        <Fragment>
            <img width={width} height={height} src={src} className={className} alt=""></img>
        </Fragment>
    );
}

export default Image