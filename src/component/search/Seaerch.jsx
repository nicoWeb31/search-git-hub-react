import React, { useContext } from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";
import GithubContext from "../../context/github/GithubContext"

const Seaerch = ({ clearSearch,showClear,setAlert}) => {

    const GithubCont = useContext(GithubContext);

    const [input, setInput] = useState({
        text: ''
    })

    //changement du formulaire
    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setInput({ ...input, [name]: value })
    }


    const handleSubmit = e => {
        e.preventDefault();
        if(input.text === '' ){
            setAlert("please enter something","light")
        }else{
            
            GithubCont.searchUser(input.text);
            setInput({ text: '' })
        }

    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="Search user...." value={input.text} onChange={handleChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>

            {
                showClear &&
            <button className="btn btn-light btn-block" onClick={clearSearch}>
                clear
            </button>

            }

        </div>
    );
}

Seaerch.protoTypes = {

    clearSearch: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Seaerch;