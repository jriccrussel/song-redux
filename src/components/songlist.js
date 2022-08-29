import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SongList extends Component {
    renderList() {
        // naa natai access sa state and sa dispatch, we have access state because sa mapStateToProps but if wala pud ta nag butang 'store' sa atong 'Provider' dili pud ta ka access sa state and dispatch
        console.log(this.props)
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <div className="ui button primary">Select</div>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        return <div className='ui divided list'>{this.renderList()}</div>
    }
}

// hold sa state or data from reducer 
// how do we have access sa state its because ddto sa index.js nag hatag ta ug "Provider" and nag add pud ta ug props ma "store={createStore(reducers)}"
const mapStateToProps = state => {
    // console.log(state)

    return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList)