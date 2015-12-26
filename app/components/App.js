import React from 'react';
import '../styles/core.scss';

const App = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element,
};

export default App;
