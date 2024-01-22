import React, { useState, useEffect } from "react";
import { Carousel } from 'react-carousel-minimal';
import "./Events.css";
const logo = require("../src/assets/logoiith.png");

function Events() {
  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "Expert Talk"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Seminar"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Expert Talk"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "Expert Talk"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Expert Talk"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Expert Talk"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Expert Talk"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Expert Talk"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="eve-carou">
      <h1>Events</h1>
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 100px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "30px auto",
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
