"use strict";

var React = require('react');

var Header = React.createClass({
  render: function(){
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
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <div style={divStyle}>
              <img src="./img/smile.png"  style={imgStyle}/>
            </div>
          </a>
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/#authors">Authors</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = Header;