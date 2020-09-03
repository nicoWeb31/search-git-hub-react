import React, { Component } from 'react';

class UserItems extends Component {

    constructor(){
        super();
    }

    styleImg ={
        // backgroundColor : 'red'
        width: '60px'
    }

    render() {

        const {avatar_url,login,html_url} = this.props.user

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={this.styleImg}/>
                <h3>{login}</h3>

                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1" >More</a>
                </div>
            </div>
        );
    }
}

export default UserItems;