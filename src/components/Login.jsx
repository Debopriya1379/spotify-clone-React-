import React from 'react'
import styled from 'styled-components';

export default function Login() {

    const handleClick = async ()=>{
        const client_id = {Your_Spotify_client_id};
        const redirect_uri = "http://localhost:3000/";
        const auth_url = "https://accounts.spotify.com/authorize";
        const scopes = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];
        window.location.href = `${auth_url}?client_id=${client_id}&redirect_uri=${redirect_uri}&scopes=${scopes.join(" ")}&response_type=token&show_dialog=true`;
    }

  return (
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="spotify" />
        <button onClick={handleClick}>Log In With Spotify</button>
    </Container>
  )
}

const Container = styled.div`
    disPlay : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    height: 100vh;
    width: 100vw;
    background-color: #1db954;
    gap: 5rem;
    img {
        height: 20vh;
    }
    button {
        padding: 1rem 5rem;
        border: none;
        border-radius: 5rem;
        background-color: black;
        color: #49f585;
        font-size: 1.2rem;
        cursor: pointer;
    }
`