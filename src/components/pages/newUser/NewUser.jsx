import React from 'react'
import './NewUser.css'
export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserFormItem">
                    <label>Username</label>
                    <input type="text" placeholder="anuj123" />
                </div>
                <div className="newUserFormItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Anuj" />
                </div>
                <div className="newUserFormItem">
                    <label>Email</label>
                    <input type="email" placeholder="anuj123@gmail.com" />
                </div>
                <div className="newUserFormItem">
                    <label>Password</label>
                    <input type="password" placeholder="anuj123" />
                </div>
                <div className="newUserFormItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+91 9876543210" />
                </div>
                <div className="newUserFormItem">
                    <label>Address</label>
                    <input type="text" placeholder="122, Delhi, India" />
                </div>
                <div className="newUserFormItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male" >Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female" >Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other" >Other</label>
                    </div>
                </div>
                <div className="newUserFormItem">
                    <label>Active</label>
                    <select className='newUserSelect' name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="newUserFormItem">
                <button className="newUserButton">Create</button>
                </div>
            </form>
        </div>
    )
}
