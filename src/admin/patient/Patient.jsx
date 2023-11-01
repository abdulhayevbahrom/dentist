import "./Patient.css";
import { BiSearch, BiSolidTrashAlt } from "react-icons/bi";
import {FaUserAlt} from 'react-icons/fa'
import { patients } from "../../static/PatientList";
import { useEffect, useState } from "react";
function Patient() {
  const [patient, Setpatient] = useState(patients);
  const [name, SetName] = useState("");

  function deletePatient(id) {
    Setpatient(patient.filter((patient) => patient.id !== id));
  }

  let sortedData = patients.sort((a, b) => {
    if (a.firstname > b.firstname) {
      return 1;
    } else {
      return -1;
    }
  });
  useEffect(() => {
    if (name === "") {
      Setpatient(sortedData);
    } else {
      Setpatient(
        patients.filter(
          (data) =>
            data.firstname.toLowerCase().includes(name.toLowerCase()) ||
            data.lastname.toLowerCase().includes(name.toLowerCase())
        )
      );
    }
  }, [name]);

  return (
    <div className="Patient">
      <div className="searchbar">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            SetName(e.target.value);
          }}
        />
        <BiSearch />
      </div>
      {patient.length ? 
      <table>
        <caption>Patients List</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {patient.map((item, index) => (
            <tr key={index}>
              <th className="number__patient">{index + 1}</th>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.age}</td>
              <td className="delete__patient">
                <BiSolidTrashAlt
                  onClick={() => deletePatient(item.id)}
                  className="trashban"
                />
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        : <div className="empty__patient">
          <FaUserAlt/>
        <h2>No Patients Found</h2>
        </div> 
      }
    </div>
  );
}

export default Patient;
