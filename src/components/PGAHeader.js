import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Implements the app header component.
 */
function PGAHeader(props) {
  const back = props.back ? <a href={props.back} className="fa fa-arrow-left" aria-hidden="true"></a> : '';
  const button = (props.auth) ? <Button variant="light" type="submit" onClick={handleSubmit}>Sign out</Button> : '';

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem('auth');
    window.location.href = '/';
  }

  return (
    <header className="header">
      <div className="container">
        <div className="row">
        <div className="region region-back col-2">{back}</div>
        <div className="region region-title col-8">{props.title}</div>
        <div className="region region-sign-out col-2">{button}</div>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({ ...state.navigation });
export default connect(mapStateToProps)(PGAHeader);
