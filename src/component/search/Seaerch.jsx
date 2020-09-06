import React, { useContext } from 'react';
import { useState } from 'react';
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext"

const Seaerch = () => {

    const GithubCont = useContext(GithubContext);
    const AlertCont = useContext(AlertContext)

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
            AlertCont.setAlert("please enter something","light")
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
                GithubCont.users.length > 0 &&
            <button className="btn btn-light btn-block" onClick={GithubCont.clearSearchUser}>
                clear
            </button>

            }

        </div>
    );
}

export default Seaerch;