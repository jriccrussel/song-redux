import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

export class SongList extends Component {
    // kung sa func component pa ni cya equivalent to: conts renderList
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <div 
                            className="ui button primary"
                            
                            // if we call ang 'selectSong' inig click sa button ato action it gets returned and send in to dispatch funtion 'selectedSong'
                            // inig click sa atong button na'selectSong' then send atong new/updated state ddto kang sa 'selectedSong'(naa sa atong reducer, sa combineReducers antong seletedSong kai equal to 'selectedSong: selectedSongReducer')
                            // ge call nato ang action creator
                            onClick={()=>this.props.selectSong(song)}
                        >Select</div>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        // naa natai access sa state and sa dispatch, we have access state because sa mapStateToProps but if wala pud ta nag butang 'store' sa atong 'Provider' dili pud ta ka access sa state and dispatch
        // console.log(this.props)
        return <div className='ui divided list'>{this.renderList()}</div>
    }
}

// hold sa state or data from reducer 
// how do we have access sa state its because ddto sa index.js nag hatag ta ug "Provider" and nag add pud ta ug props ma "store={createStore(reducers)}"
// also hold a new state whenever na update or rerender sa state
const mapStateToProps = state => {
    // console.log(state)

    return { songs: state.songs }
}

export default connect(mapStateToProps, {
    // sa actions folder
    // also naa nay access sa action
    selectSong
})(SongList)