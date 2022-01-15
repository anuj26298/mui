import React from 'react'
import './topbar.css'
import logo from '../../assests/logo.png'
import Profile from '../../assests/images.jpg'
import {NotificationsNone,Language, Settings } from '@material-ui/icons';
export default function Topbar(props) {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={logo} className="logo"/>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language />
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings />
                    </div>
                    <img src={Profile} alt="avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
