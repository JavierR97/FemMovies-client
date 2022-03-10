import React from 'react';
import ReactDOM from 'react-dom';

// Import statement to indicate that './index.scss' should be bundled
import './index.scss';

// Main component
class FemMoviesApplication extends React.Component {
  render() {
    return (
      <div className="fem-movies">
        <div>Good morning</div>
      </div>
    );
  }
}

// Find root of app
const container = document.getElementsByClassName('app-container')[0];

// Render app in root DOM element
ReactDOM.render(React.createElement(FemMoviesApplication), container);