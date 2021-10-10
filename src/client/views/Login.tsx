import React from 'react';
import { useHistory } from 'react-router';
import RootLayout from '../components/RootLayout';
import { useForm } from '../hooks/useForm';
import { apiService } from '../utils/api-service';

const Login = () => {
    const history = useHistory();
    const { values, handleChanges } = useForm();
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/login', 'POST', { email: values.email, password: values.password, role: 'guest'})
            .then(token => {
                localStorage.setItem('token', token);
                history.push('/profile');
            })
    }
    return (
        <RootLayout>
            <form className="form-group p-2">
                <label className="text-info">email</label>
                <input 
                name="email"
                value={values.email || ''}
                onChange={handleChanges}
                type="email" 
                className="form-control" />
                <label className="text-info">password</label>
                <input 
                name="password"
                value={values.password || ''}
                onChange={handleChanges}
                type="password" 
                className="form-control" />
                <button onClick={handleLogin} className="btn btn-info">Login</button>
            </form>
        </RootLayout>
    )
}

export default Login;
