import React from "react";
import "./Number.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ima1 from "../img/ima1.png";
import ima2 from "../img/ima2.png";
import ima3 from "../img/ima3.png";
import ima4 from "../img/ima4.png";
import "react-circular-progressbar/dist/styles.css";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer"
function Numbers() {

  const percentage = 99;
  const percentage2 = 76;
  const percentage3 = 86;
  const percentage4 = 96;

  
 
 
  return (
    <div className="number">
      <div className="container">
        <div>
          <h2>Our Dental Service</h2>
          <h1>In Numbers</h1>
          <p>
            Distinctively exploit optimal alignments for intuitive bandwidth.
            Quickly coordinate e-business applications through revolutionary
            catalysts for change. Seamlessly underwhelm optimal testing
            processes.
          </p>
        </div>

        <div className="number_item">
          <div>

            <div className="radius">
                <img src={ima1} className="img1" alt="" />
              <CircularProgressbar className="circle"
                value={percentage}
                strokeWidth={5}
                circleRatio={1}

                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.1,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(38, 99, 177, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
              <p className="resultpercentage">{percentage}%</p>
             
              
            </div>
            <div className="radius">
                <img src={ima2} className="img1" alt="" />
              <CircularProgressbar className="circle"
                value={percentage2}
                strokeWidth={5}
                circleRatio={1}

                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.1,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor:`rgba(38, 99, 177, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
              <p className="resultpercentage">{percentage2}%</p>
            </div>
            <div className="radius">
                <img src={ima3} className="img1" alt="" />
              <CircularProgressbar className="circle"
                value={percentage3}
                strokeWidth={5}
                circleRatio={1}

                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.1,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(38, 99, 177, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
               <p className="resultpercentage">{percentage3}%</p>
            </div>
            <div className="radius">
                <img src={ima4} className="img1" alt="" />
              <CircularProgressbar className="circle"
                value={percentage4}
                strokeWidth={5}
                circleRatio={1}

                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.1,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(38, 99, 177, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "rgb(38,99,177)",
                })}
              />
               <p className="resultpercentage">{percentage4}%</p>
            </div>
            
          </div>
        </div>
        <hr />

        <div className="number_bottom">
          <div>
            <div>
              <hr />
              <p>
                <b>"</b>DentiCare was founded in the first place to create
                absolutely beautiful smiles. <b>"</b>
              </p>
              <hr />
            </div>
            <div>
              <p>
                Distinctively re-engineer revolutionary meta-services and
                premium architectures. Intrinsically incubate intuitive
                opportunities and real-time potentialities.
              </p>
              <p>
                Appropriately communicate one-to-one technology after
                plug-and-play networks. Quickly aggregate B2B users and
                worldwide potentialities.
              </p>
            </div>
            <div>
              <p>
                Enthusiastically mesh long-term high-impact infrastructures
                vis-a-vis efficient customer service. Professionally fashion
                wireless leadership.
              </p>
              <p>
                Energistically myocardinate clicks-and-mortar testing procedures
                whereas next-generation manufactured products, appropriately
                implement visionary readiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
