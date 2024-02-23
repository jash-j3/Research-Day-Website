import React from "react";
import khoj from "./assets/khoj.png";
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
      speakers: [
        {
          image: speaker1a,
          name: "Dr. V.G.Sekaran",
          description: "Father of AGNI-5 Missile",
          extra:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Amet, nihil assumenda accusantium voluptatibus consectetur",
        },
        {
          image: speaker2,
          name: "Prof. P.Rajalaxmi",
          description: "Director NMICPS TiHAN",
          extra:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Amet, nihil assumenda accusantium voluptatibus consectetur",
        },
        {
          image: speaker3,
          name: "Dr. Kotaro Kataoka",
          description: "Associate Prof.(CS Dept.)",
          extra:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Amet, nihil assumenda accusantium voluptatibus consectetur",
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Amet, nihil assumenda accusantium voluptatibus consectetur",
        },
        {
          image: speaker4,
          name: "Prof. Saptarshi Majumdar",
          description:
            "Prof. IITH(Chemical Engineering), Former Dean Academics",
          extra:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Amet, nihil assumenda accusantium voluptatibus consectetur",
        },
        {
          image: speaker5,
          name: "Dr. Mahati Chittem",
          description: "Asso.Proffessor(Health & Medical Psychology)",
          extra:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Amet, nihil assumenda accusantium voluptatibus consectetur",
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
              <p className="font-bold">{discussion.title}</p>
              <p className="italic">{discussion.subtitle}</p>
              {discussion.speakers.map((speaker, idx) => (
                <div className="" key={idx}>
                  <h4 className=" font-semibold underline mt-4 text-blue-600">
                    {speaker.name}
                  </h4>
                  <div className=" bg-gray-200 my-2 py-2 px-4 rounded">
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
