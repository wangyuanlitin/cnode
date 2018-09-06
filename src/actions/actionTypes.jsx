export const FETCH_TOPICS_LIST = 'FETCH_TOPICS_LIST'
export const FETCH_TOPIC_DETAIL = 'FETCH_TOPICS_DETAIL'

export function loadTopics (tab) {
  return async (dispatch) => {
    let res = await fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}`)
    res = await res.json()
    dispatch({
      type: FETCH_TOPICS_LIST,
      topics: res.data
    })
  }
}

export function loadTopicDetail (id) {
  return async (dispatch) => {
    let res = await fetch(`https://cnodejs.org/api/v1/topic/${id}`)
    res = await res.json()
    dispatch({
      type: FETCH_TOPIC_DETAIL,
      topics: res.data
    })
  }
}