import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }

  handleOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  handleOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    const { status } = this.state;
    let className = `status ${status === 'offline' ? 'status_offline' : ''}`;

    return <div className={className}>{status}</div>;
  }
}

export default ConnectionStatus;
