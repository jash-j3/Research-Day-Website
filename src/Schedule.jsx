import React from 'react'
import "./Schedule.css";
import Footer from './Footer';
import { useTable } from 'react-table';


const data1 = [
  {
    time: "09:30 to 10:00 AM",
    topic: "Inauguration"
  },

  {
    time: "10:00 to 10:30 AM",
    topic: "Keynote Speaker"
  },

  {
    time: "10:30 to 11:30 AM",
    topic: "Panel discussion – Nurturing Brilliance: Research Futures at Home and Abroad"
  },

  {
    time: "11:30 to 11:45 AM",
    topic: "High Tea"
  },

  {
    time: "11:45 to 01:00 PM",
    topic: "Seminar: Unlocking Brilliance Part 1: The Art of Presenting Research in 1, 3, 5, and 10 Minutes"
  },

  {
    time: "01:00 to 02:00 PM",
    topic: "Lunch"
  },


  {
    time: "02:00 to 03:00 PM",
    topic: "Radiating Brilliance Part 1: Sci-Art Competition"
  },

  {
    time: "03:15 to 03:45 PM",
    topic: "Expert Talk by IITH Professor"
  },

  {
    time: "03:45 to 04:00 PM",
    topic: "High Tea"
  },

  {
    time: "04:00 to 06:00 PM",
    topic: "Radiating Brilliance Part 2: Poster Presentation"
  }
]

const data2 = [
  {
    time: "09:30 to 10:00 AM",
    topic: "Keynote Speaker"
  },

  {
    time: "10:00 to 11:00 AM",
    topic: "Panel discussion - Harmonizing Brilliance: Nurturing Mental Health and Well-being in Academia"
  },

  {
    time: "11:00 to 11:30 AM",
    topic: "Tale of Innovation: Talk by IITH Professor and Startup Founder"
  },

  {
    time: "11:30 to 11:45 AM",
    topic: "High Tea"
  },

  {
    time: "11:45 to 01:00 PM",
    topic: "Radiating Brilliance Part 3: Three-Minute Talk on Thesis/Research to General Audience"
  },

  {
    time: "01:00 to 02:00 PM",
    topic: "Lunch"
  },

  {
    time: "02:00 to 03:15 PM",
    topic: "Seminar: Unlocking Brilliance Part 2: Mastering the Art of Scientific Writing with AI Elegance"
  },

  {
    time: "03:30 to 04:00 PM",
    topic: "Journey of Entrepreneurship – A Talk by IIT Hyderabad alumnus"
  },

  {
    time: "04:00 to 04:15 PM",
    topic: "High Tea"
  },

  {
    time: "04:15 to 04:45 PM",
    topic: "Expert talk by IITH Professor"
  },

  {
    time: "04:45 to 05:00 PM",
    topic: "Elevate your Brand (Sponsors Talk)"
  },

  {
    time: "05:00 to 05:30 PM",
    topic: "Valedictory function & prize distribution"
  }
]



function Schedule() {
  return (
    <div>
    <div className="maindiv">
      <div className="sched">
        <h1>
            Day 1 (Wednesday - 28 February)
        </h1>
        <div className="App">
            <table className="tble">
                <tr>
                    <th>Time</th>
                    <th>Event</th>
                
                </tr>
                {data1.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.time}</td>
                            <td>{val.topic}</td>
          
                        </tr>
                    )
                })}
            </table>
          
        </div>

        <h1 className="kh">
        Day 2 (Thursday - 29 February)
        </h1>
        <div>
          <table className="tble">
          <tr>
                    <th>Time</th>
                    <th>Event</th>
                
                </tr>
                {data2.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.time}</td>
                            <td>{val.topic}</td>
          
                        </tr>
                    )
                })}

          </table>
        </div>





        </div>
        </div>
      <Footer /> 
    </div>
  )
}

export default Schedule
