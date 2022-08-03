import React from 'react'
import PlayLists from './PlayLists';
import styled from 'styled-components';
import {MdHomeFilled, MdSearch} from 'react-icons/md';
import {IoLibrary} from 'react-icons/io5';

export default function SideBar() {
  return (
    <Container>
        <div className="top_links">
            <div className="logo">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify" />
            </div>
        </div>
        <ul>
            <li>
                <MdHomeFilled/>
                <span>Home</span>
            </li>
            <li>
                <MdSearch/>
                <span>Search</span>
            </li>
            <li>
                <IoLibrary/>
                <span>Your Library</span>
            </li>
        </ul>
        <PlayLists/>
    </Container>
  )
}

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top_links{
    display: flex;
    flex-direction: column;
    .logo{
        text-align: center;
        margin: 1rem 0;
        img{
            max-inline-size: 80%;
            block-size: auto;
        }
    }
  }
  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    li{
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover{
            color: white;
        }
    }
  }
`;