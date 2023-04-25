import * as React from 'react'
import NewStarating from "./NewStarating.jsx"




const UserProfile = (props) => {
  return (
    <div>
        <h1>New York Rehabs</h1>
        <ul className="profile-list">
          {
            props.data.map (content =>(
              <li>
                <span><strong>ID:</strong> {content._id.$oid}</span>
                <span> <strong> Name: {content.PROVIDER_NAME}</strong></span>
                <NewStarating />
              
              </li>
            ))
          }
        </ul>
    </div>
  );
}

export default UserProfile;