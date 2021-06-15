import streams from "../apis/streams"
import history from "../history"

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth
    const response = await streams.post('/streams', {...formValues, userId})
    dispatch({type: 'CREATE_STREAM', payload: response.data})
    history.push('/')
}

export const getAllStreams = () => async dispatch => {
    const response = await streams.get('/streams')
    dispatch({type:'GET_ALL_STREAMS', payload: response.data})
}

export const getStreamById = (id) => async dispatch => {
    const response = await streams.get('/streams/' + id)
    dispatch({type:'GET_STREAM_BY_ID', payload: response.data})
}

export const editStreamById = (id, formValues) => async dispatch => {
    const response = await streams.put('/streams' + id, formValues)
    dispatch({type:'EDIT_STREAM_BY_ID', payload: response.data})
}

export const deleteStreamById = (id) => async dispatch => {
    streams.delete('/streams' + id)
    dispatch({type: 'DELETE_STREAM_BY_ID', payload: id})
}