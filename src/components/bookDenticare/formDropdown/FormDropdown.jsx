import React, { useState } from 'react'
import './FormDropdown.css'
import { BsChevronDown , BsChevronUp} from 'react-icons/bs'

function FormDropdown() {
  const [isActive, setIsActive] = useState(false)
  const [value , setValue] = useState()
  const options = ["Allen Fischer", "Alex Terrel", "Michél Anderson", "Edwin Southgate", "Carlie Addison"]
  return (
    <div className='dropdown'>
      <div className="dropdown_btn" onClick={() => setIsActive(!isActive)}>{value ? value : "Select Dentst here"} {isActive ? <BsChevronUp /> :  <BsChevronDown/>}</div>
      {
        isActive && (
          <div className="dropdown_content">
            {
              options.map((option, index) => (
                <div key={index}
                  
                  onClick={() => setValue(option , setIsActive(false))}
                  className="dropdown_item"
                >
                  {option}
                </div>
              ))
            }

          </div>
        )
      }
    </div>
  )
}

export default FormDropdown