import React, { useContext } from 'react';
import AlertContext from "../../../context/alert/AlertContext"


const Alert = () => {

    const AlertCont = useContext(AlertContext)

    return (
        <>
            {
                AlertCont.alert !== null && (
                <div className={`alert alert-${AlertCont.alert.type}`}>
                    <i className="fas fa-info-circle" />{AlertCont.alert.msg}
                </div>

                )
            }
        </>
    );
}

export default Alert;