import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DashboardCalendar.css'



function DashboardCalendar() {
  const [date, setdate] = useState(new Date())
  const onChange = date => {
    setdate(date)
  }

  return (
    <div className='dcalendar' >
      <Calendar className="calendar" showWeekNumbers onChange={onChange} value={date} />
    </div>
  );
}
export default DashboardCalendar;