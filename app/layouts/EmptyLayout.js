import React from 'react';

const EmptyLayout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

EmptyLayout.propTypes = {
  children: React.PropTypes.element,
};

export default EmptyLayout;
