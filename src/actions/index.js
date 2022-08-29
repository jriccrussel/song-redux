// Action creator 
export const selectSong = song => {
    // return am action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}