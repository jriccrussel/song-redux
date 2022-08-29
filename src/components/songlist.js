import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SongList extends Component {
  render() {
    return (
      <div>SongList</div>
    )
  }
}

export default connect()(SongList)