import { useState } from "react";
import axios from 'axios';
import { Redirect, useHistory } from "react-router-dom";

const Login = () => {

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:4000/auth/user/login', {
            email,
            password,
        })
        
        if (response) {
            const jwtToken = response.data.token;
            console.log(jwtToken);
            localStorage.setItem('jwtToken', jwtToken);
            // console.log(response.data);
            history.push('/');

            // <Redirect to='/login' />

        }
    }

    return (
        <div className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
            

            <form onSubmit = {onSubmit} className="px-3 py-2 d-flex flex-column align-items-start" style={{maxWidth: '420px', width: '50%', minWidth: '300px', border: '1px solid rgb(200, 200, 200)', borderRadius: '1rem'}}>

                <div className="my-2" style={{fontSize: '1.75rem', color: '#0066ff'}}>Login</div>

                <div className="mt-2 w-100">
                    <label htmlFor="email">email</label>
                    <input onChange = {(e) => setEmail(e.target.value)} type="email" name='email' className='form-control' />
                </div>
                    
                <div className="mt-2 w-100">
                    <label htmlFor="password">password</label>
                    <input onChange = {(e) => setPassword(e.target.value)} type="password" name='password' className='form-control' />
                </div>

                <button className='btn btn-primary mt-4 mb-2 w-100 align-self-center'>Submit</button>
                    

            </form>
        </div>
    )
}

export default Login
