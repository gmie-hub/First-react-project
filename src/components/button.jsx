import { Fragment } from "react"

const Button = ({type, className, name}) => {
    return(
        <Fragment>
            <button type={type} className={className}>{name}</button>
        </Fragment>
    )
}

export default Button;