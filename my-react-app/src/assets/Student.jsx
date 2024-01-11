import Proptypes from 'prop-types'

function Student (props){
    return(
        <div className="student">
            <p>Name :{props.name}</p>
            <a>Age :{props.age}</a>
            <p>student :{props.isstudent?"Yes":"No"}</p>
        </div>
    );

}

Student.prototype={
    name : Proptypes.string,
    age: Proptypes.number,
    isstudent: Proptypes.bool
}

Student.defaultProps ={
    name : 'Guest',
    age: 0,
    isstudent : false,
}
export default Student;