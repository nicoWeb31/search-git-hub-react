import React from 'react';
import PropTypes from 'prop-types'


const RepoItems = (props) => {
    console.log("reposItems",props)
    return (
        <div className="card ">
            <h3>
                <a href={props.html_url}>{props.name}</a>
            </h3>
        </div>
    );
}

// RepoItems.propTypes ={
//     repo : PropTypes.object.isRequired
// }

export default RepoItems;