import { EditContainer, UpdateImage } from './styled';
import { useRef, useState } from 'react';
import Axios from '../../../Axios';

const EditProfile = props => {
    // used in several fetch requests
    const url = 'users/me/';
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };

    // useRefs and local state
    const [editAvatar, setEditavatar] = useState(false);
    const avatarRef = useRef();
    const bannerRef = useRef();
    const [newHobby, setNewHobby] = useState('');

    //object controling user edits in useState
    const details = {
        firstname: props.data['first_name'],
        lastname: props.data['last_name'],
        email: props.data.email,
        username: props.data.username,
        location: props.data.location,
        job: props.data.job,
        aboutme: props.data['about_me'],
        hobbies: props.data['things_user_likes'],
    };
    const [userEdits, setUseredits] = useState(details);

    // sends a PATCH request to update user details and avatar/banner
    const UpdateDetails = async () => {
        const body = {
            email: userEdits.email,
            first_name: userEdits.firstname,
            last_name: userEdits.lastname,
            username: userEdits.username,
            job: userEdits.job,
            location: userEdits.location,
            about_me: userEdits.aboutme,
        };

        const response = await Axios.patch(url, body, config);
        console.log(response);

        if (avatarRef.current) {
            let newForm = new FormData();
            newForm.append('avatar', avatarRef.current.files[0]);
            const responseTwo = await Axios.patch(url, newForm, config);
            console.log(responseTwo);
        }
    };

    const addHobby = async () => {
        // I've created a separate state for the onChange listener so that I can then append it to the hobbies list
        let hobbies = [...userEdits.hobbies, newHobby];
        const body = {
            things_user_likes: hobbies,
        };
        const response = await Axios.patch(url, body, config);
        console.log(response);
    };

    return (
        <EditContainer>
            <div className="left-side">
                <div className="edit-avatar">
                    <img src={props.data.avatar} alt="avatar"></img>
                    <button className="standardButton" id="updateImageButton" onClick={() => setEditavatar(!editAvatar)}>
                        UPDATE IMAGE
                    </button>
                    {editAvatar ? (
                        <UpdateImage>
                            <input type="file" accept="image/png, image/jpeg" ref={avatarRef} />
                            <button>Remove</button>
                        </UpdateImage>
                    ) : null}
                </div>
                <div className="save-delete">
                    <button className="standardButton">DELETE ACCOUNT</button>
                    <button onClick={UpdateDetails}>SAVE</button>
                </div>
            </div>
            <div className="right-side">
                <div className="edit-info">
                    <input type="text" placeholder="First name" value={userEdits.firstname} onChange={e => setUseredits({ ...userEdits, firstname: e.target.value })} />
                    <input type="text" placeholder="Last name" value={userEdits.lastname} onChange={e => setUseredits({ ...userEdits, lastname: e.target.value })} />
                </div>
                <div className="edit-info">
                    <input type="text" placeholder="Email" value={userEdits.email} onChange={e => setUseredits({ ...userEdits, email: e.target.value })} />
                    <input type="text" placeholder="Username" value={userEdits.username} onChange={e => setUseredits({ ...userEdits, username: e.target.value })} />
                </div>
                <div className="edit-info">
                    <input type="text" placeholder="Location" value={userEdits.location} onChange={e => setUseredits({ ...userEdits, location: e.target.value })} />
                    <input type="text" placeholder="Job" value={userEdits.job} onChange={e => setUseredits({ ...userEdits, job: e.target.value })} />
                </div>
                <div className="edit-info">
                    <input type="text" placeholder="About" value={userEdits.aboutme} onChange={e => setUseredits({ ...userEdits, aboutme: e.target.value })} />
                    <input type="text" placeholder="Password" />
                </div>
                <div className="my-hobbies">
                    <span>Things I like</span>
                    <div className="hobbies">
                        {userEdits.hobbies.map((hobby, index) => (
                            <div className="hobby">
                                <span key={index}>{hobby}</span>
                                <button onClick={() =>setUseredits({...userEdits, hobbies: userEdits.hobbies.filter(i => i !== hobby)})}>X</button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <input type="text" placeholder="Type something..." onChange={e => setNewHobby(e.target.value)} />
                        <button className="standardButton" onClick={addHobby}>
                            ADD
                        </button>
                    </div>
                </div>
            </div>
        </EditContainer>
    );
};

export default EditProfile;
