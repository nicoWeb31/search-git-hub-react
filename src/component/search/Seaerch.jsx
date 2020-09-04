import React from 'react';
import { useState } from 'react';
import PropTypes from "prop-types"

const Seaerch = ({searchUsers}) => {

    const [input, setInput] = useState({
        text: ''
    })

    //changement du formulaire
    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setInput({ ...input, [name]: value })
    }


    const handleSubmit =  e => {
        e.preventDefault();
        searchUsers(input.text);
        setInput({text:''})

    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="Search user...." value={input.text} onChange={handleChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>

        </div>
    );
}

Seaerch.defaultProps = {
    searchUsers: PropTypes.func.isRequired
}

export default Seaerch;