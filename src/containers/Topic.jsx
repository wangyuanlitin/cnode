import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from 'antd-mobile'
import { loadTopicDetail } from '../actions/actionTypes'

class Topic extends React.Component {
  componentDidMount() {
    this.props.loadTopicDetail(this.props.match.params.id)
  }
  render() {
    const { topic } = this.props


    if (!topic) return <Icon type='loading' />

    return (
      <div className='topic'>
        <div>
          <div>{topic.title} </div>
          <div dangerouslySetInnerHTML={{__html: topic.content}} />
        </div>
        <div>
          <div>回帖</div>
          <div>
            {topic.replies.map((item, index) => {
              return (
                <div key={`replay-${index}`} dangerouslySetInnerHTML={{__html: item.content}} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

Topic.propTypes = {
  loadTopicDetail: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    topic: state.topic
  }
}

export default connect(mapStateToProps, { loadTopicDetail })(Topic)