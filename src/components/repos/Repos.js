import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = props => {
  const { repos } = props;

  return repos.map(repo => {
    return <RepoItem repo={repo} key={repo.id} />;
  });
};

Repos.prototype = {
  repos: PropTypes.array.isRequired
};

export default Repos;
