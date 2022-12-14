// Libs
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { supabase } from './supabaseClient';
import Account from './components/Auth/Authorized';
import Auth from './components/Auth/Unauthorized';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// set font across all material ui components
const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Inter',
        },
    },
});

export default function App() {
    const [session, setSession] = useState(null);
    // Listen for changes to the user's session
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            {/* display login / authorized */}
            <BrowserRouter>
                {!session ? (
                    <Auth />
                ) : (
                    <Account
                        key={session.user.id}
                        session={session}
                    />
                )}
            </BrowserRouter>
        </ThemeProvider>
    );
}
