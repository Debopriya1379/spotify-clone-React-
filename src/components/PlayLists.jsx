import {useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';

export default function PlayLists() {
    const[{token,playlists},dispatch] = useStateProvider();

    useEffect(()=>{
        const getPlaylistsData = async()=>{
            const response = await axios.get(
                "https://api.spotify.com/v1/me/playlists",
                {
                    headers : {
                        Authorization : "Bearer " + token,
                        "content-type" : "application/json",
                    },
                },
            );
            // console.log(response.data.items);
            const {items} = response.data;
            const playlists = items.map(({name,id})=>{
                return {name, id};
            });
            dispatch({type : reducerCases.SET_PLAYLISTS, playlists});
        };
        getPlaylistsData();
        // eslint-disable-next-line
    },[])

    const changeCurrentPlaylist = (selectedPlaylistId)=>{
        dispatch({type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId})
    };

    return (
        <Container>
                <ul>
                    {
                        playlists.map(({name,id})=>{
                            return(
                                <li key={id} onClick={()=> changeCurrentPlaylist(id)}>
                                    {name}
                                </li>
                            )
                        })
                    }
                </ul>
        </Container>
    )
}


const Container = styled.div`
    height: 100%;
    color: #b3b3b3;
    overflow: hidden;
    ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        height: 53vh;
        max-height: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 0.7rem;
            &-thumb {
                background-color: rgba(255, 255, 255, 0.6);
            }
        }
        li {
            transition: 0.3s ease-in-out;
            cursor: pointer;
            &:hover {
                color: white;
            }
        }
    }
`;