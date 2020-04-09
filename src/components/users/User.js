import React, { useEffect, Fragment, useContext } from "react";

import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    const login = match.params.login;
    getUser(login);

    getUserRepos(login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-dark">
          Back to Search
        </Link>
        Hireable :{" "}
        {hireable ? (
          <span className="text-success">Yes</span>
        ) : (
          <span className="text-danger">No</span>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location : {location}</p>
          </div>

          <div>
            {bio ? (
              <Fragment>
                <h2>Bio</h2>
                <p style={{ marginBottom: "2rem" }}>{bio}</p>
              </Fragment>
            ) : null}

            <a
              href={html_url}
              className="btn btn-success"
              style={{ marginBottom: "2rem" }}
            >
              Visit GitHub Profile
            </a>

            <ul>
              <li>{login && <Fragment>Username : {login}</Fragment>}</li>

              <li>{company && <Fragment>Company : {company}</Fragment>}</li>

              <li>{blog && <Fragment>Username : {blog}</Fragment>}</li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>

          <div className="badge badge-success">Following: {following}</div>

          <div className="badge badge-light">Public Repos: {public_repos}</div>

          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;
