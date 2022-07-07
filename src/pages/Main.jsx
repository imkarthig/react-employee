import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Employeid from './Employeid.jsx';

import EmployeDetail from './EmployeDetail.jsx';

export function Main() {
  return (
    <Routes>
   
      <Route path="/Employeid" element={<Employeid />} />
      <Route exact path="/" element={<Employeid />} />

      <Route path="/EmployeDetail" element={<EmployeDetail />} />



    </Routes>
  );
}
