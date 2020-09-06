import React from 'react';
import PropTypes from 'prop-types';
import RepoItems from './RepoItems'


const Repos = ({repositprory}) => {
    
    return repositprory.map(repo => <RepoItems repo={repo} key={repo.id}/>)
}


Repos.propTypes={
    repos : PropTypes.array.isRequired
}

export default Repos;