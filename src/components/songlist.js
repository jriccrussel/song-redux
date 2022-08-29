import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SongList extends Component {
    render() {
        // naa natai access sa state and sa dispatch, we have access state because sa mapStateToProps but if wala pud ta nag butang 'store' sa atong 'Provider' dili pud ta ka access sa state and dispatch
        console.log(this.props)
        return (
        <div>SongList</div>
        )
    }
}

// hold sa state or data from reducer 
// how do we have access sa state its because ddto sa index.js nag hatag ta ug "Provider" and nag add pud ta ug props ma "store={createStore(reducers)}"
const mapStateToProps = state => {
    // console.log(state)

    return {song: state.songs}
}

export default connect(mapStateToProps)(SongList)