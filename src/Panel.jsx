import React from "react";
import speaker1a from "./assets/VG Sekaran.jpg";
import speaker2 from "./assets/raji.jpeg";
import speaker3 from "./assets/Kotaro.jpg";
import speaker4 from "./assets/saptarishi.jpg";
import speaker5 from "./assets/Mahati_Chittem.jpg";
import speaker6 from "./assets/Usha-Chivukula.png";
import "./Aboutnav.css";

function Panel() {
  const discussions = [
    {
      title: "Nurturing Brilliance",
      subtitle: "Research Futures: Home & Abroad",
      description: "Timing : 11:00 - 12:00 am",
      speakers: [
        {
          image: speaker1a,
          name: "Dr. V.G.Sekaran",
          description: "Father of AGNI-5 Missile",
          extra:
            "Dr V.G. Sekaran, Distinguished Scientist He is an eminent Missile Scientist and the Chief Designer of the Long Range Ballistic Missile System AGNI 5.As Director, Advanced Systems Laboratory, played a key role in envisioning and evolving the Strategies for Long Range Missiles and led the design and development of AGNI series of Missile Systems.His pioneering contributions and research in the area of Solid Propellant Rocket Motors is now the main thrust and the backbone of Long Range Missile System.",
        },
        {
          image: speaker2,
          name: "Prof. P.Rajalaxmi",
          description: "Director NMICPS TiHAN",
          extra:
            "Dr. P Rajalakshmi, is a Professor in the Department of Electrical Engineering, CYIENT Chair Professor in Future Communications, Project Director of Technology Innovation Hub on Autonomous Navigations (TiHAN) at IIT Hyderabad. She has been handling R&D projects funded by industry and Government of India in these areas.she has filed 15 patents, 2 copyrights, published over 40 Journals and 135 conference peer-reviewed papers.",
        },
        {
          image: speaker3,
          name: "Dr. Kotaro Kataoka",
          description: "Associate Prof.(CS Dept.)",
          extra:
            "Kotaro Kataoka is an Associate Professor at Department of Computer Science and Engineering, Indian Institute of Technology Hyderabad as well as a Senior Researcher at Keio Research Institute at SFC. He has been a member of Asian Internet Interconnection Initiatives (AI3) project and Widely Integrated Distributed Environment (WIDE) project for research on Satellite Internet, Post-Disaster Networking and etc. He also served as an Expert in JICA FRIENDSHIP Project for facilitating Indo-Japan collaborations between 2012 and 2019.",
        },
      ],
    },
    {
      title: "Harmonizing Brilliance",
      subtitle: "Nurturing Mental Health & Well Being in Academia",
      speakers: [
        {
          image: speaker6,
          name: "Dr. Chivukula Usha",
          description: "Centre for Health Psychology(University of Hyderabad)",
          extra:
            "Dr. Chivukula Usha, an Assistant Professor at the Centre for Health Psychology, University of Hyderabad, specializes in Behavioral Cardiology, Child & Adolescent Health, and Community Health Psychology. With a rich background in Special Education, she has contributed significantly as a Psychological Counselling Therapist and a Project Manager for the Centre for Child Protection. Her research, reflected in numerous publications, explores diverse topics from risky decision-making to the psychosocial risks of primary hypertension, showcasing her multidimensional expertise.",
        },
        {
          image: speaker4,
          name: "Prof. Saptarshi Majumdar",
          description:
            "Prof. IITH(Chemical Engineering), Former Dean Academics",
          extra:
            "Professor Saptarshi Majumdar is a distinguished academician and Senate member at the Indian Institute of Technology Hyderabad, stands as a beacon in the Department of Chemical Engineering. Renowned for his expertise in Multiscale Modelling, Bio-materials Design, and more, his commitment to advancing knowledge resonates through excellence and innovative research. Beyond the classroom, his active engagement in academic and administrative initiatives reflects a dedication to fostering an inclusive and cutting-edge academic environment at IITH.",
        },
        {
          image: speaker5,
          name: "Dr. Mahati Chittem",
          description: "Asso.Proffessor(Health & Medical Psychology)",
          extra:
            "Dr. Mahati Chittem, an Associate Professor of Health & Medical Psychology at the Indian Institute of Technology Hyderabad, boasts expertise in psycho-oncology, adherence, health behaviors, and relationship science. Her research delves into intricate aspects such as patient-caregiver-physician relationships, end-of-life decisions, and the cultural dimensions influencing health-related behaviors. With an office in B 413, her academic pursuits contribute to a nuanced understanding of psychological factors in health and medical contexts.",
        },
      ],
    },
  ];

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

export default Panel;
