import React from "react";
import "./Aboutnav.css";
import Footer from "./Footer";
import speaker1a from "./assets/logoiith.png";
import speaker2a from "./assets/Faculty-Prof Vinayak Eswaran.jpeg" ;
import speaker3a from "./assets/Sastry.jpg";
import speaker4a from "./assets/kiran_kumar_kuchi.jpg";
import speaker5a from "./assets/R_sai_chandra.jpeg";

function Expert() {
  return (
    <div className="lloll">
      <div className="about">
        <h1 className="he">Expert Talks</h1>
        <div className="evegrid">
          <div className="d1 discussion">
            <h1>1.Expert Talk 1 </h1>
            <div className="discussionmain">
              <img src={speaker2a} alt="speaker1a" className="panelspeaker" />
              The esteemed professor from IIT Hyderabad, whose lectures have enlightened both faculties and students, is retiring by the end of this semester. Don't miss the opportunity to attend his expert talk at KHOJ24 on 28th Feb from 03:15 to 03:45 PM. Prof. Vinayak Eswaran
              <h4 className="subhead" id="a">
              <h1>Prof. Vinayak Eswaran</h1>
              </h4>
              <div className="kk">
                <p>Prof. IIT Hyderabad</p>
              </div>
               <h1>Date:28th-February-2024</h1>
               <h1>Time:3:15 - 3:45 pm </h1>
            </div>
          </div>
          <div className="d3 discussion">
            <h1>2. Expert Talk 2</h1>
            <div className="discussionmain">
              <img src={speaker3a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
               <h1>Prof. Garikapati Narahari Sastry </h1> 
              </h4>
              <div className="kk">
                <p>Prof. IIT Hyderabad</p>
              </div>
               <h1>Date : 29th-February-2024</h1>
                <h1>Time:4:15 - 4:45 pm </h1>
            </div>
          </div>
        </div>
        <div className="evegrid">
          <div className="d1 discussion">
            <h1>Tale Of Innovation</h1>
            <div className="discussionmain">
              <img src={speaker4a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                Prof. Kiran Kumar Kuchi
              </h4>
              <div className="kk">
                <p>Professor IITH</p>
              </div>
              <h1>Date : 29th-February-2024</h1>
              <h1>Time:11:15 - 11:45 am </h1>
            </div>
          </div>
          <div className="d3 discussion">
            <h1>Journey Of Enterprenureship</h1>
            <div className="discussionmain">
              <img src={speaker5a} alt="speaker1a" className="panelspeaker" />
              <h4 className="subhead" id="a">
                Dr. R Sai Chandra
              </h4>
              <div className="kk">
                <p>COO Green PMU SEMI Private Ltd.</p>
              </div>
              <h1>Date : 29th-February-2024</h1>
              <h1>Time:03:30 - 4:00 pm </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );


return (
  <div className="lloll">
    <div className="pb-10 font-Montserrat">
      <h1 className="he py-10 text-center text-white font-cursive text-4xl md:text-6xl">
        Panel Discussion
      </h1>
      <div className=" flex flex-col md:flex-row justify-around gap-10">
        {discussions.map((discussion, index) => (
          <div
            className="bg-white/90 text-center w-[90%] mx-auto md:w-2/5 rounded-md py-2 px-4"
            key={index}
          >
            <p className="font-bold text-[1.2rem]">{discussion.title}</p>
            <p className="italic text-[1rem] mb-10">{discussion.subtitle}</p>
            {discussion.speakers.map((speaker, idx) => (
              <div className="" key={idx}>
                <h4 className="bg-gray-200 font-semibold text-blue-600 my-2 py-2 px-4 rounded ">
                  {speaker.name}
                </h4>
                <div className="font-semibold mt-4  ">
                  <p>{speaker.description}</p>
                </div>
                <div className="flex flex-row gap-5 mt-5 items-center ">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-40 h-40 bg-cover rounded-full mx-auto"
                  />
                  <div className="text-left hidden md:block">
                    {speaker.extra}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
export default Expert;
