"use strict";

var React = require('react');

var About = React.createClass({

  statics: {
    willTransitionTo: function(transition, params, query, callback){
      //if not logged in - go away, for example
      if(!confirm('Are you sure you want to read a page? That\'s boring?')){
        transition.abort();
      } else {
        callback();
      }
    },
    willTransitionFrom: function(transition, component){
      //if not logged in - go away, for example
      if(!confirm('Are you sure you want to leave a page? That\'s exciting?')){
        transition.abort();
      }
    }
  },

  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>
          This app uses the following
          <ul>
            <li>React</li>
            <li>React router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    )
  }
});

module.exports = About;