import React from 'react';

// algo
// 1. create empty state ++++
// 2. make http call on component DidMount & update state ++++
// 3. update render to show user data ++++
// 4. handle userId change ++++

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: null,
      name: null,
      location: null,
    };
  }

  componentDidMount() {
    this.getUserData(this.props.match.params.userId);
  }

  // input: userId
  // out: promise or undefined
  getUserData = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        const { avatar_url, name, location } = userData;
        this.setState({
          avatar: avatar_url,
          name: name,
          location: location,
        });
      });

    // TODO make error handling
  };

  componentDidUpdate(prevProps) {
    const curUserId = this.props.match.params.userId;
    if (prevProps.match.params.userId != curUserId) {
      this.getUserData(curUserId);
    }
  }

  render() {
    const { avatar, name, location } = this.state;

    if (!avatar || !name || !location) {
      return null;
    }

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
