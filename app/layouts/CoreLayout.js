import React from 'react'
import Header from '../containers/Header'

const CoreLayout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

CoreLayout.propTypes = {
  children: React.PropTypes.element,
  auth: React.PropTypes.object,
}

export default CoreLayout
