import React, {Fragment} from 'react'
import Moment from 'react-moment';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteEducation } from '../../actions/profile';

function Education({ education, deleteEducation }) {

    const date = "2020-01-24T00:00:00.000Z";
    const educations = education.map( edu => (
        <tr key={edu._id}> 
            <td> { edu.school }</td>
            <td className="hide-sm"> { edu.degree }</td>
            <td className="hide-sm"> 
                <Moment date={edu.from} format="YYYY/MM/DD" /> - 
                {
                    edu.to === null ? ('Now') : (<Moment date={edu.to} format="YYYY/MM/DD" />)
                }
            </td>
            <td>
                <button onClick={() => deleteEducation(edu._id)} className="btn btn-danger"> Delete </button>
            </td>
        </tr>
    )) 

    return (
        <Fragment>
            <h2 className="my-2"> Education Details</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th className='hide-sm'> Degree</th>
                        <th className='hide-sm'> Years</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { educations }
                </tbody>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation})(Education)

