import React from 'react';
import PropTypes from 'prop-types';
import RepoItems from './RepoItems'


const Repos = ({repos}) => {
    console.log("repos",props)
    return repos.maps(repo => <RepoItems repo={repo} key={repo.id}/>)

}
Repos.PropTypes={
    repos : PropTypes.array
}

export default Repos;