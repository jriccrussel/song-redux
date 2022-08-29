import React from 'react'
import { connect } from 'react-redux'

// const SongDetails = (props) => {
//     // console.log(props)
//     return (
//         <div>SongDetails</div>
//     )
// }

const SongDetails = ({ song }) => {
    if(!song){
        return <div>Select a song</div>
    }
    
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>
        </div>
    )
}

// para maka access ta sa new/updated na state(inig click sa button na kuha nato ang new/updated na state then g kuha nato para maka access ta)
const mapStateToProps = state => {
    // console.log(state)
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails)