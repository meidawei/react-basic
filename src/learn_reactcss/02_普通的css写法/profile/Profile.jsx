import React, { PureComponent } from 'react'
import './style.css'

export class Profile extends PureComponent {
  render() {
    return (
      <div className="section">
        <div className="title">Profile标题</div>
        <p className="content">Profile内容</p>
      </div>
    )
  }
}

export default Profile
