"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    var imgStyle = {
      'marginTop': '-47px',
      width: '100%',
      height: 'auto'
    };
    var divStyle = {
      width: '157px',
      height: '32px',
      overflow: 'hidden'
    };
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="app" className="navbar-brand">
            <div style={divStyle}>
              <img src="./img/smile.png"  style={imgStyle}/>
            </div>
          </Link>
          <ul className="nav navbar-nav">
            <li>
              <Link to="app">Home</Link>
            </li>
            <li>
              <Link to="authors">Authors</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = Header;