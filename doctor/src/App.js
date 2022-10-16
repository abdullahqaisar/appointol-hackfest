import './App.css';
import DoctorSide from './DoctorSide';
import HospitalSide from './HospitalSide';
import AddPatient from './AddPatient';



function App() {
  return (
    <div className='main'>
      <HospitalSide />
      <DoctorSide />
      <AddPatient/>
    </div>
  );
}

export default App;
