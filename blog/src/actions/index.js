import jsonPlaceHolderAPIs from '../apis/jsonPlaceHolder'
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    const userIds = _.uniq(_.map(getState().postReducer, 'userId'))
    console.log(userIds)
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolderAPIs.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async dispatch => _fetchUser(id, dispatch)
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceHolderAPIs.get('/users/' + id)

    dispatch({type: 'FETCH_USER', payload: response.data})
})