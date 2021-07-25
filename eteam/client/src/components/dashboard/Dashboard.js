import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profile';
import {Link} from 'react-router-dom';

function Dashboard ({getCurrentProfile, auth: {user}, profile: { profile, loading}}) {
    useEffect(() => {
        getCurrentProfile()
    },[])

    return (
        <div>Dashboard</div>
    );
}

Dashboard.propTypes = {
    mapStateToProps: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps,{getCurrentProfile})(Dashboard)
