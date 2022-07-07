import React from 'react';
import '../css/EmployeDetail.css';
// import person from '../image/person.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EmployeDetail extends React.Component {
  generateEmployeeId(data) {
    return (
      <div className="container-em-d">
        <div className="borderbox-em-d">
          <h1>contact detail</h1>
          <img
            src={this.props.Employe.avatar}
            className="img-em-d"
          />
          <p>{this.props.Employe.first_name+this.props.Employe.last_name}</p>
          <p> aboout that</p>
     
  
          <Link className="btn-list-em-d" to="/Employeid">
          <i class='fas fa-angle-left'> back</i>
          </Link>
          <div>
          <button className='social-media'>Mail</button>
          <button className='social-media'>Whatsapp</button>
          </div>
        </div>
      </div>
    );
  }
 
  generateRow(data) {
    return <tr>{data}</tr>;
  }
  displayRow(data) {
    let heading = Object.keys(data);
    let diplayEachRow = heading.map((eachKey) => this.generateData(eachKey));
    return this.generateRow(diplayEachRow);
  }
 
  generateData(data) {
    return (
      <div>
        <th className='table-head'>{data}</th>
        <td className='table-data'>{this.props.Employe[data]}</td>
      </div>
    );
  }
  displayData() {
    let data1 = this.displayRow(this.props.Employe);
    return data1;
  }

  render() {
    return (
      <div className="list">
        {this.generateEmployeeId()}
       

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Employe: state.employe.Employe,
  };
}
export default connect(mapStateToProps)(EmployeDetail);

