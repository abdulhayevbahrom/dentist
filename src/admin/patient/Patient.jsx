import "./Patient.css";
import { BiSearch, BiSolidTrashAlt } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { patients } from "../../static/PatientList";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Patient() {
  document.title = "Sadaf ⏤ bemorlar ro'yxati";
  const [patient, Setpatient] = useState(patients);
  const [name, SetName] = useState("");

  function filterData(e) {
    const value = e.target.value;
    if (value === "30 yoshdan katta") {
      return Setpatient(patients.filter((patient) => patient.age > 30));
    } else if (value === "1 yoshdan 15 gacha") {
      return Setpatient(patients.filter((patient) => patient.age <= 15));
    } else if (value === "15 yoshdan 30 gacha") {
      return Setpatient(
        patients.filter((patient) => patient.age > 15 && patient.age <= 30)
      );
    } else {
      return Setpatient(patients);
    }
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
  function deletePatient(id) {
    const alerting = window.confirm("Do you want to delete this client?");
    if (alerting) {
      Setpatient(patient.filter((patient) => patient.id !== id));
      toast.success("deleted", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  }
  return (
    <div className="Patient">
      <h1>Bemorlar Ro'yxati</h1>
      <ToastContainer />
      <div className="patient__header">
        <div className="patient__searchbar">
          <select className="patient__select" onChange={filterData}>
            <option>Barchasi</option>
            <option>1 yoshdan 15 gacha</option>
            <option>15 yoshdan 30 gacha</option>
            <option>30 yoshdan katta</option>
          </select>
          <input
            placeholder="Search users..."
            type="text"
            // value={name}
            onChange={(e) => {
              SetName(e.target.value);
            }}
          />
          <BiSearch />
        </div>
      </div>

      {patient.length ? (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Ismi</th>
              <th>Familiyasi</th>
              <th>Yoshi</th>
              <th>O'chirish</th>
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
      ) : (
        <div className="empty__patient">
          <FaUserAlt />
          <h2>No Patients Found</h2>
        </div>
      )}
    </div>
  );
}

export default Patient;
