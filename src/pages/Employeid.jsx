import React from 'react';
import '../css/Employeid.css';
import logo from '../img/employee.png';
import { Link } from 'react-router-dom';
import { setEmploye, getEmploye } from '../store/Action/EmployeAction';
import { connect } from 'react-redux';
class Employeid extends React.Component {
  employeData = [{ "id": 7, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://reqres.in/img/faces/7-image.jpg" }, { "id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://reqres.in/img/faces/8-image.jpg" }, { "id": 9, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "https://reqres.in/img/faces/9-image.jpg" }, { "id": 10, "email": "byron.fields@reqres.in", "first_name": "Byron", "last_name": "Fields", "avatar": "https://reqres.in/img/faces/10-image.jpg" }, { "id": 11, "email": "george.edwards@reqres.in", "first_name": "George", "last_name": "Edwards", "avatar": "https://reqres.in/img/faces/11-image.jpg" }, { "id": 12, "email": "rachel.howell@reqres.in", "first_name": "Rachel", "last_name": "Howell", "avatar": "https://reqres.in/img/faces/12-image.jpg" }];

  // getEmploye = () => {
  //   this.props.dispatch({ type: setEmploye, payload: employeData });
  //   console.log(getEmploye);
  // };

  generatedetails(Data) {
    return (
      <div className='card-para'>
        <div className='card'>
          <p className='name'> <img
            src={Data.avatar}
            className="img-em"
          />
            {Data.first_name + Data.last_name}</p>

          <p>{Data.email}</p>
          <p> {Data.id}</p>

          <Link to="/EmployeDetail" onClick={() => this.dispatch(Data)}> <i class="fa fa-eye"></i></Link>
        </div>
      </div>
    );
  }
  displaydetails() {
    return this.employeData.map((eachdata) => this.generatedetails(eachdata));
  }
  dispatch = (employe) => {
    this.props.dispatch({ type: setEmploye, payload: employe });
  };
  render() {
    return <React.Fragment>

      <div class="navbar">
        <div>
          <a href=""> <img
            src={logo}
            class="logo" alt="" /></a>
        </div>
        <div class="center-box">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button className='btn-s' type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
        <div class="menu">

          Admin<span class="logged-in dot">●</span>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHY6l1Yopg7QgFx14C7GcRu_5XfZLD_e6Cg&usqp=CAU" class="logoend"
            alt="" />

        </div>

      </div>
      <section>
        <div class=" container">
          <h1>Visitor</h1>
          <div>
            <button class="btn">Add visitor</button>
          </div>
        </div>
      </section>

      <div className='container-em'>
        <div className='borderbox-em'>
          <div className=' card-e'>
            <p>Name</p>
            <p>Email</p>
            <p>Status</p>
            <p>Action</p>

          </div>
          <div>
            {this.displaydetails()}
          </div>
        </div>

      </div>





    </React.Fragment>;
  }
}
function mapStateToProps(state) {
  return {
    Employe: state.employee,
  };
}
export default connect(mapStateToProps)(Employeid);
