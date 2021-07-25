import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

function ProfileTop( { profile: {
    status,
    company,
    location,
    website,
    social,
    user: {name, avatar}
}}) {
    return (
        <Fragment>
        <div className="profile-top bg-primary p-2">
          <img
            className="round-img my-1"
            src={avatar}
            alt=""
          />
          <h1 className="large">{name}</h1>
          <p className="lead"> {status} {company && <span> at { company}</span>}</p>
          <p>{location && <span>  { location }</span>}</p>
          <div className="icons my-1">
            {
                website && (
                    <a href={website} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-globe fa-2x"></i>
                    </a>
                )
            }
            {
                social && social.twitter && (
                    <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                )
            }
            {
                social && social.facebook && (
                    <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                )
            }
            
          </div>
        </div>


        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          <div>
            <h3 className="text-dark">Microsoft</h3>
            <p>Oct 2011 - Current</p>
            <p><strong>Position: </strong>Senior Developer</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
          <div>
            <h3 className="text-dark">Sun Microsystems</h3>
            <p>Nov 2004 - Nov 2011</p>
            <p><strong>Position: </strong>Systems Admin</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
        </div>

        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          <div>
            <h3>University Of Washington</h3>
            <p>Sep 1993 - June 1999</p>
            <p><strong>Degree: </strong>Masters</p>
            <p><strong>Field Of Study: </strong>Computer Science</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
        </div>
        </Fragment>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileTop

