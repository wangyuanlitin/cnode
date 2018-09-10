import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { List, Icon } from 'antd-mobile'
import TabBar from '../components/TabBar'
import { loadTopics } from '../actions/actionTypes'

class Topics extends React.Component {
  componentDidMount() {
    this.props.loadTopics('all')
  }
  render() {
    const { topics } = this.props

    if (!topics) return <Icon type='loading' />

    return (
      <div>
        <TabBar />
        <List>
          {topics && topics.map((item, index) => {
            return (
              <Link to={`/topics/${item.id}`} key={`list-${index}`}>
                <List.Item
                  thumb={item.author.avatar_url}
                  extra={`${item.reply_count}/${item.visit_count}`}
                  multipleLine
                >
                  {item.title}
                </List.Item>
              </Link>
            )
          })}
        </List>
      </div>
    )
  }
}

Topics.propTypes = {
  loadTopics: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    topics: state.topics
  }
}

export default connect(mapStateToProps, { loadTopics })(Topics)