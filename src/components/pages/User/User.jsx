import React from 'react'
import './User.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h2 className="userTitle">Edit User</h2>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWm7kgMH1PEsycRwkyqPcPB1b2NITpD8j2g&usqp=CAU" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anuj</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="showUserBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">anuj123</span>
                        </div>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon' />
                        <span className="userShowInfoTitle">01.01.1995</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon' />
                        <span className="userShowInfoTitle">+91 9876543210</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon' />
                        <span className="userShowInfoTitle">anuj@anuj.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon' />
                        <span className="userShowInfoTitle">122, Delhi, India</span>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" placeholder='anuj123' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" placeholder='Anuj' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" placeholder='anuj@anuj.com' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="text" placeholder='+91 9876543210' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type="text" placeholder='122, Delhi, India' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWm7kgMH1PEsycRwkyqPcPB1b2NITpD8j2g&usqp=CAU" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                                <input type="file" id='file' hidden />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
