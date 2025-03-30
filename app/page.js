// app/page.js

'use client'

import { useState, useEffect } from 'react';
import { getWelcomeMessage, getOauthUrl } from '@/lib/api';

export default function Home() {
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [oauthUrl, setOauthUrl] = useState('');

    useEffect(() => {
        async function fetchWelcome() {
            try{
                const message = await getWelcomeMessage();
                setWelcomeMessage(message);
            } catch (err){
                console.error(err);
            }
        }
        async function fetchOauth(){
            try{
                const url = await getOauthUrl();
                setOauthUrl(url);
            } catch (err){
                console.error(err);
            }
        }
        fetchWelcome();
        fetchOauth();
    }, []);

    return(
        <div>
            <h1>Home</h1>
            <p>{welcomeMessage}</p>
            <a href={oauthUrl}>Login With Google</a>
        </div>
    )
}