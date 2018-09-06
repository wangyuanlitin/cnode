import React from 'react'
import TabBar from './TabBar'

export default class Layout extends React.Component {
  render () {
    return (
      <div>
        <TabBar  />
        {this.props.children}
      </div>
    )
  }
}