import React, { useState } from 'react';
import './Unauthorized.css';
import Button from '@mui/material/Button';
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { supabase } from '../../supabaseClient';
import Alert from '@mui/material/Alert';

function Unauthorized() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInNonProvider = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { user, session, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                alert(error.message);
            }
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    const signUpNonProvider = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { user, session, error } = await supabase.auth.signUp({
                email,
                password,
            });
            console.log(email, password);
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
            // Vaildation check
            if (!email) {
                alert('Please enter your email!');
            } else if (!email.includes('@')) {
                alert('Please enter a valid email!');
            } else if (!password) {
                alert('Please enter your password!');
            } else if (password.length < 6) {
                alert('Password must be at least 6 characters');
            } else if (!email && !password) {
                alert('Please enter an email and password');
            } else {
                alert('Check your email for the login link!');
            }
        }
    };

    const signInWithGoogle = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const { user, session, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });
            if (error) throw error;
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    const signInWithFacebook = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { user, session, error } = await supabase.auth.signInWithOAuth({
                provider: 'facebook',
            });
            if (error) throw error;
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <body>
            <div className='unauthorized-container'>
                <form>
                    <h3 id='title'>Stock Dashboard Login</h3>
                    <label for='username'>Username</label>
                    <input
                        type='text'
                        placeholder='Email'
                        id='username'
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label for='password'>Password</label>
                    <input
                        type='password'
                        placeholder='Password'
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='signin-signup-container'>
                        <Button
                            style={{
                                minWidth: '20%',
                                marginRight: '10px',
                            }}
                            variant='contained'
                            size='small'
                            onClick={signInNonProvider}>
                            Log In
                        </Button>
                        <Button
                            style={{
                                minWidth: '20%',
                            }}
                            variant='outlined'
                            size='small'
                            onClick={signUpNonProvider}>
                            Sign Up
                        </Button>
                    </div>
                    <label for='socials-login'>Sign in with a provider:</label>
                    <div className='socials-login'>
                        <div className='social'>
                            <Button
                                style={{
                                    backgroundColor: '#4285F4',
                                    color: 'white',
                                    minWidth: '100%',
                                }}
                                variant='outlined'
                                size='medium'
                                startIcon={<FcGoogle />}
                                onClick={signInWithGoogle}>
                                Google
                            </Button>
                        </div>
                        <div className='social'>
                            <Button
                                style={{
                                    backgroundColor: '#3b5998',
                                    color: 'white',
                                    minWidth: '100%',
                                }}
                                variant='contained'
                                size='medium'
                                startIcon={<RiFacebookBoxFill />}
                                onClick={signInWithFacebook}>
                                Facebook
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </body>
    );
}

export default Unauthorized;
