import React from 'react'
import { connect } from 'react-redux'

const SongDetails = (props) => {
    console.log(props)
    return (
        <div>SongDetails</div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails)