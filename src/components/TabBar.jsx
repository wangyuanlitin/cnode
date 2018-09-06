import React from 'react'
import { Flex, NavBar } from 'antd-mobile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { loadTopics } from '../actions/actionTypes'

class _NavBar extends React.Component {
  render () {
    const list = [{
      text: '全部',
      tab: 'all'
    },{
      text: '精华',
      tab: 'good'
    }]
    return (
      <NavBar mode='light'>
        <Flex>
          {list.map((item, index) => {
            return <Flex.Item key={`list-${index}`} onClick={() => { this.props.loadTopics(item.tab);}}>{item.text}</Flex.Item>
          })}
        </Flex>
      </NavBar>
    )
  }
}
_NavBar.propTypes = {
  loadTopics: PropTypes.func.isRequired
}

export default connect(null, { loadTopics })(_NavBar)