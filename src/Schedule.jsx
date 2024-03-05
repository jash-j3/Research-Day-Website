import React from "react";
import Footer from "./Footer";

const data1 = [
  {
    time: "09:30 to 10:00 AM",
    topic: "Inauguration",
  },

  {
    time: "10:00 to 10:45 AM",
    topic: "Keynote Speaker: Dr. Nagarajan Vedachalam",
  },

  {
    time: "10:45 to 11:00 AM",
    topic: "High Tea",
  },

  {
    time: "11:00 to 12:00 AM",
    topic:
      "Panel discussion – Nurturing Brilliance: Research Futures at Home and Abroad",
  },

  {
    time: "12:00 to 01:00 PM",
    topic:
      "Seminar: Mastering the Art of Scientific Writing with AI Elegance",
  },

  {
    time: "01:00 to 02:00 PM",
    topic: "Lunch",
  },

  {
    time: "02:00 to 03:00 PM",
    topic: "Radiating Brilliance Part 1: Sci-Art Competition",
  },

  {
    time: "03:15 to 04:00 PM",
    topic: "Expert Talk by IITH Professor: Prof. Vinayak Eswaran",
  },

  {
    time: "04:00 to 04:15 PM",
    topic: "High Tea",
  },

  {
    time: "04:15 to 06:00 PM",
    topic: "Radiating Brilliance Part 2: Poster Presentation",
  },
];

const data2 = [
  {
    time: "09:30 to 10:15 AM",
    topic: "Keynote Speaker: Prof. B.J. Rao",
  },

  {
    time: "10:15 to 11:00 AM",
    topic:
      "Panel discussion - Harmonizing Brilliance: Nurturing Mental Health and Well-being in Academia",
  },

  {
    time: "11:00 to 11:15 AM",
    topic: "High Tea",
  },

  {
    time: "11:15 to 11:45 AM",
    topic: "Tale of Innovation: Talk by IITH Professor and Startup Founder: Prof. Renu John",
  },

  {
    time: "12:00 to 01:00 PM",
    topic:
      "Seminar: Unlocking Brilliance Part 2:Unlocking Brilliance Part 1: The Art of Presenting Research in 1, 3, 5, and 10 Minutes :Prof. Shantanu Chakrabarti",
  },

  {
    time: "01:00 to 02:00 PM",
    topic: "Lunch",
  },

  {
    time: "02:00 to 03:15 PM",
    topic:" Radiating Brilliance Part 3: Three-Minute Talk on Thesis/Research to General Audience",
  },

  {
    time: "03:30 to 04:00 PM",
    topic: "Journey of Entrepreneurship – A Talk by IIT Hyderabad alumnus:Dr. R Sai Chandra",
  },

  {
    time: "04:00 to 04:15 PM",
    topic: "High Tea",
  },

  {
    time: "04:15 to 04:45 PM",
    topic: "Expert talk by IITH Professor: Prof. Garikapati N. Sastry",
  },

  {
    time: "04:45 to 05:00 PM",
    topic: "Elevate your Brand (Sponsors Talk)",
  },

  {
    time: "05:00 to 05:30 PM",
    topic: "Valedictory function & prize distribution",
  },
];

function Schedule() {
  return (
    <div>
      <div className="maindiv bg-blue-100/50">
        <div className="sched py-5">
          <h1 className="text-xl w-fit mx-auto rounded-md mb-5 p-4 bg-indigo-900 text-white ">
            Day 1: Wednesday - 28 February
          </h1>
          <div className="rounded-md w-[80rem] mx-auto flex flex-col gap-1">
            <div className="rounded-md text-white flex flex-row w-full gap-1">
              <div className="p-4 bg-black/70  w-1/4  rounded-l-md">Time</div>
              <div className=" p-4 bg-black/70 w-3/4 rounded-r-md ">Event</div>
            </div>

            {data1.map((val, key) => {
              return (
                <div
                  className=" rounded-md text-black flex flex-row gap-1"
                  key={key}
                >
                  <div className="bg-black/10 rounded-l-md text-left p-3 w-1/4 ">
                    {val.time}
                  </div>
                  <div className="bg-black/10 text-left p-3 rounded-r-md  w-3/4 ">
                    {val.topic}
                  </div>
                </div>
              );
            })}
          </div>
          <h1 className="text-xl w-fit mx-auto rounded-md my-5 p-4 bg-indigo-900 text-white">
            Day 2: Thursday - 29 February
          </h1>
          <div className="rounded-md w-[80rem] mx-auto flex flex-col gap-1">
            <div className="rounded-md text-white flex flex-row w-full gap-1">
              <div className="p-4 bg-black/70  w-1/4  rounded-l-md">Time</div>
              <div className=" p-4 bg-black/70 w-3/4 rounded-r-md ">Event</div>
            </div>

            {data2.map((val, key) => {
              return (
                <div
                  className=" rounded-md text-black flex flex-row gap-1"
                  key={key}
                >
                  <div className="bg-black/10 rounded-l-md text-left p-3 w-1/4 ">
                    {val.time}
                  </div>
                  <div className="bg-black/10 text-left p-3 rounded-r-md  w-3/4 ">
                    {val.topic}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Schedule;
