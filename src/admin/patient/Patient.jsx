import "./Patient.css";
import {BiSolidTrashAlt} from 'react-icons/bi'
import { patients } from "../../static/PatientList";
function Patient() {
    return (
      <div className="Patient">
        <table>
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
            {patients.map((item, index) => (
              <tr key={index}>
                <th className="number__patient">{index + 1}</th>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.age}</td>
                <td className="delete__patient">
                  <BiSolidTrashAlt
                    className="trashban"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Patient;
