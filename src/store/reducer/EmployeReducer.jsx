import { getEmploye, setEmploye } from '../Action/EmployeAction.jsx';
const initialState = {
  Employe: {
    Name: 'Aurora',
    Age: 53,
    Email: 'ante.blandit@disparturient.ca',
    Street: '493 Iaculis Rd.',
    City: 'Lewiston',
    Zip: '42591-180',
    Region: 'Maine',
    Country: 'Sudan',
    Info: 'est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia',
    EmployeeID: 101,
    DateOfJoining: '10/06/2019',
    PhoneNumber: '1628101902299',
  },
};
export const EmployReducer = (state = initialState, action) => {
  switch (action.type) {
    case getEmploye:
      return state;
    case setEmploye:
      return { Employe: action.payload };
    default:
      return state;
  }
};
export default EmployReducer;
