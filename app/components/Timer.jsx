var React = require('react');

var Clock = require('Clock');

var Timer = React.createClass({

  render: function() {
    return (
      <div>
        <p>Timer.jsx</p>
        <Clock totalSeconds={845}/>
      </div>
    );
  }

});

module.exports = Timer;
