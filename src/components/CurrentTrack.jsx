import React from 'react'
import styled from 'styled-components';
import { useStateProvider } from '../utils/StateProvider';

export default function CurrentTrack() {

    const [{selectedPlaylist}] = useStateProvider();

    // let CurrentTrack = selectedPlaylist.tracks[0];

    // useEffect(()=>{
    //   dispatch({type : reducerCases.SET_PLAYING, CurrentTrack})
    // },[]);

    // useEffect(()=>{
    //   const getCurrentTrack = async()=>{
    //     const response = await axios.get(
    //       "https://api.spotify.com/v1/me/player/currently-playing",
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization: "Bearer " + token,
    //         },
    //       }
    //     );
    //     console.log(response);
    //   } 
    //   getCurrentTrack();
    // },[token]);

    return (
        <Container>
          {
            selectedPlaylist && (
              <div className="track">
                <div className="track_image">
                  <img src={selectedPlaylist.tracks[0].image} alt="currentPlaying" />
                </div>
                <div className="track_info">
                  <h4 className="track_info_track_name">{selectedPlaylist.tracks[0].name}</h4>
                  <h6 className="track_info_track_artist">{selectedPlaylist.tracks[0].artists.join(", ")}</h6>
                </div>
              </div>
            )
          }
        </Container>
    )
}

const Container = styled.div`
    .track{
      display: flex;
      align-items: center;
      gap: 1rem;
      .track_info{
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }
      .track_info_track_name{
        color: white;
      }
      .track_info_track_artist{
        color: #b3b3b3;
      }
    }
`;
