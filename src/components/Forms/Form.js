import React, {useState} from "react";
import Login from './Login/Login';
import Register from './Register/Register';

const Form = (props) => {
    const { page } = props;

    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    return(
        <form onSubmit={event => console.log('something')}>
            <label>
                Username:
                <input
                    type='text'
                    name='username'
                    value={state.username}
                    placeholder='Username'
                    onChange={handleChange}
                />
            </label>

            <label>
                Password
                <input
                    type='password'
                    name='password'
                    value={state.password}
                    placeholder='Password'
                    onChange={handleChange}
                />
            </label>

            <button>Submit</button>
        </form>
    )
}

export default Form;
