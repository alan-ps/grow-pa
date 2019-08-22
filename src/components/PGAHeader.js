import React from 'react';

import Button from 'react-bootstrap/Button';

/**
 * Implements the app header component.
 */
class PGAHeader extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    localStorage.removeItem('auth');
    window.location.href = '/';
  }

  render() {
    const button = (this.props.auth) ? <Button variant="light" type="submit" onClick={this.handleSubmit}>Sign out</Button> : '';

    return (
      <header className="header">
        <div className="region region-secondary-menu">{button}</div>
      </header>
    )
  }
}

export default PGAHeader;
