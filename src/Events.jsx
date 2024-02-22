import React from "react";
import { Carousel } from "react-carousel-minimal";
import p1 from "./assets/carousel/image (1).jpg";
import main from "./assets/main.jpg";
import p3 from "./assets/carousel/image (3).jpg";
import p4 from "./assets/carousel/image (4).jpg";
import p5 from "./assets/carousel/image (5).jpg";
import p6 from "./assets/carousel/image (6).jpg";
import p7 from "./assets/carousel/image (7).jpg";
import p8 from "./assets/carousel/image (8).jpg";
import p9 from "./assets/carousel/image (9).jpg";
import p0 from "./assets/carousel/image (10).jpg";
import "./Events.css";

function Events() {
  const data = [
    {
      image: main,
    },
    {
      image: p1,
    },
    {
      image: p0,
    },
    {
      image: p3,
    },
    {
      image: p4,
    },
    {
      image: p5,
    },
    {
      image: p6,
    },
    {
      image: p7,
    },
    {
      image: p8,
    },
    {
      image: p9,
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div className="eve-carou">
      <h1>Research Scholars' Day</h1>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="70vw"
            height="40vw"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              margin: "30px auto",
              minWidth: "70vw",
              minHeight: "",
            }}
          />
        </div>
      </div>
    </div>
  );

  // const eventsData = [
  //   {
  //     title: "Expert Talk",
  //     description: "Join us for insightful talks by industry experts. Lorem ipsum dolor sit amet, adipiscing elit. Quisque non elit auctor, faucibus mauris id, bibendum lectus. Integer quis metus a quam varius fermentum. Sed",
  //   },
  //   {
  //     title: "Seminar",
  //     description: "Participate in engaging seminars on cutting-edge topics.Lorem ipsum dolor sit amet, adipiscing elit. Quisque non elit auctor, faucibus mauris id, bibendum lectus. Integer quis metus a quam varius fermentum. Sed",
  //   },
  //   {
  //     title: "Poster Presentation",
  //     description: "Showcase your research through captivating poster presentations.Lorem ipsum dolor sit amet, adipiscing elit. Quisque non elit auctor, faucibus mauris id, bibendum lectus. Integer quis metus a quam varius fermentum. Sed",
  //   },
  //   {
  //     title: "3 Minute Talk",
  //     description: "Present your ideas concisely in our 3-minute talk sessions.Lorem ipsum dolor sit amet, adipiscing elit. Quisque non elit auctor, faucibus mauris id, bibendum lectus. Integer quis metus a quam varius fermentum. Sed",
  //   },
  //   {
  //     title: "Sci-Art Exhibition",
  //     description: "Explore the intersection of science and art in our exhibition.Lorem ipsum dolor sit amet, adipiscing elit. Quisque non elit auctor, faucibus mauris id, bibendum lectus. Integer quis metus a quam varius fermentum. Sed",
  //   },
  //   {
  //     title: "Keynote",
  //     description: "Don't miss our impactful keynote address on the main theme.Lorem ipsum dolor sit amet, adipiscing elit. Quisque non elit auctor, faucibus mauris id, bibendum lectus. Integer quis metus a quam varius fermentum. Sed",
  //   },
  // ];

  // const [currentEvent, setCurrentEvent] = useState(0);
  // const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   let interval;

  //   if (!isHovered) {
  //     interval = setInterval(() => {
  //       setCurrentEvent((prevEvent) => (prevEvent + 1) % eventsData.length);
  //     }, 1500);
  //   }

  //   return () => clearInterval(interval);
  // }, [isHovered, eventsData.length]);

  // const handleHover = () => {
  //   setIsHovered((prevIsHovered) => !prevIsHovered);
  // };

  // return (
  //   <div>
  //     {/* <div className="events-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
  //       <h1>Events</h1>
  //       <div className="event">
  //         <img className="event-icon" src={logo} alt={eventsData[currentEvent].title} />
  //         <h2>{eventsData[currentEvent].title}</h2>
  //         <p>{eventsData[currentEvent].description}</p>
  //       </div>
  //     </div> */}
  //     <Carousel>
  //               <div>
  //                   <img src={logo} />
  //                   <p className="legend">Legend 1</p>
  //               </div>
  //               <div>
  //                   <img src={logo} />
  //                   <p className="legend">Legend 2</p>
  //               </div>
  //               <div>
  //                   <img src={logo} />
  //                   <p className="legend">Legend 3</p>
  //               </div>
  //               <div>
  //                   <img src={logo} />
  //                   <p className="legend">Legend 4</p>
  //               </div>
  //               <div>
  //                   <img src={logo} />
  //                   <p className="legend">Legend 5</p>
  //               </div>
  //               <div>
  //                   <img src={logo} />
  //                   <p className="legend">Legend 6</p>
  //               </div>
  //           </Carousel>
  //   </div>
  // );
}

export default Events;
