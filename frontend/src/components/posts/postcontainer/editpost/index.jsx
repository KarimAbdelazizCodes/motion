/* eslint-disable no-unused-vars */
import edit from '../../../../assets/edit.png'
import remove from '../../../../assets/remove.png'
import { EditWrapper, EditingDiv } from './styled'
import Axios from '../../../../Axios'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'



const EditPost = props => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const [editPost, setEdit] = useState(false)

    const deletePost = async (id) => {
        const url = `social/posts/${id}/`
        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
        };

        const response = await Axios.delete(url, config)
        const filtered = posts.filter(post => post.id !== id)
        const action = {
            type: 'POSTS_LIST',
            payload: filtered,
        }
        dispatch(action)
    }

    return (
        <>
            <EditWrapper>
                <div>
                    <img src={edit} alt='edit' />
                    <button onClick={() => setEdit(!editPost)}>Edit</button>
                </div>
                <div>
                    <img src={remove} alt='delete' />
                    <button onClick={() => { deletePost(props.id); props.close(false) }}>Delete</button>
                </div>
            </EditWrapper>
            {editPost ?
                <EditingDiv>
                    <div>
                        <h1>Editing</h1>
                    </div>
                </EditingDiv> : null}
        </>
    )
}

export default EditPost