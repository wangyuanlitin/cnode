import { FETCH_TOPICS_LIST, FETCH_TOPIC_DETAIL } from '../actions/actionTypes'

const topics = (state = {}, action) => {
  switch(action.type) {
    case FETCH_TOPICS_LIST:
      return {
        topics: action.topics
      }
    case FETCH_TOPIC_DETAIL:
      return {
        topic: action.topics
      }
    default:
      return state
  }
}

export default topics