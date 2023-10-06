import React from "react";

const DoEffect2 = ({ users }) => {
  return (
    <div>
      <>
        <div className="container mt-5">
          {users.map(
            (user, index) =>
              // Create a new row for every 3 user profiles
              index % 3 === 0 && (
                <div className="row" key={index}>
                  {users.slice(index, index + 3).map((user) => (
                    <div className="col-md-4 mb-4" key={user.id}>
                      <div className="card custom-card">
                        {" "}
                        {/* Apply custom-card class */}
                        <img
                          src={user.avatar_url}
                          alt={`${user.login}'s Avatar`}
                          className="card-img-top custom-avatar"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{user.login}</h5>
                          <p className="card-text">
                            Followers: {user.followers}
                          </p>
                          <p className="card-text">
                            Repositories: {user.public_repos}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </>
    </div>
  );
};

export default DoEffect2;
