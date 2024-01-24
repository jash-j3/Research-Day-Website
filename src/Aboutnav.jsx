import React from "react";
import "./Aboutnav.css";
import Footer from "./Footer";

function Aboutnav() {
  return (
    <div>
      <div className="about">
        <h1>Events</h1>
        <div className="d1">
          <h1>1. Poster Presentation</h1>
          <h4 className="subhead">Abstract </h4>
          <p className="kk">
            Calling all innovative minds! Elevate your research beyond words and
            dive into the Poster presentation Event. Engage, educate, and
            enchant your audience through captivating visuals and compelling
            concepts.
          </p>
          <h4 className="subhead" id="a">
            Eligibility
          </h4>
          <div className="kk">
            <p>
              1.Eligibility extends to researchers at different career stages,
              including students, faculty members or industry professionals,
              working on topics listed on the IITH websites.
            </p>
            <p>2.Maximum two peoples for per poster are allowed.</p>
            <p>
              3.All participant must be registered for the poster presentation
              before deadline. (Link for registration & abstract submission)
            </p>
          </div>
          <h4 className="subhead">Acknowledgement</h4>
          <p className="kk">
            Only presentations of students are reviewed by experts and best
            presentation from each department will secure trophy.
          </p>

          <h4 className="subhead">Guidelines</h4>

          <div className="kk">
            <p>
              1.Poster size: Dimensions that work well for printed posters is A0
              in portrait mode.
            </p>
            <p>
              2.Clarity: Use clear, concise language and visuals. Ensure that
              your poster is easily readable from a distance.
            </p>
            <p>
              3.Structure: Organize your poster logically - typically include
              sections like Introduction, Methods, Results, Discussion, and
              Conclusion.
            </p>
            <p>
              4.Visuals: Use graphs, charts, images, and diagrams to illustrate
              your points. Make sure they are high-quality and easy to
              understand.
            </p>
            <p>
              5.Text: Keep text minimal. Use bullet points, short sentences, and
              avoid jargon when possible.
            </p>
            <p>
              6.Engagement: Be prepared to engage with viewers. Time yourself
              while practicing to ensure you fit within the 3-minute timeframe.
            </p>
            <p>
              7.Note: The presenter is required to bring a hard copy of the
              poster for the presentation.
            </p>
          </div>
        </div>
        <div className="d2">
          <h1>2. Three-Minute Talk</h1>
          <h4 className="subhead">Abstract </h4>
          <p className="kk">
            Craft a narrative that captivates minds in just three minutes! Share
            your research journey with a wider audience, simplifying complex
            concepts and inspiring curiosity. Take the stage and ignite
            fascination through brevity and brilliance.
          </p>

          <h4 className="subhead">Eligibility</h4>
          <div className="kk">
            <p>
              1.IITH students and external participants working on topics listed
              on the IITH website are eligible.
            </p>
            <p>2.Preliminary results are acceptable.</p>
            <p>
              3.All participant must be registered for the three-minute talk
              before deadline. (Link for registration & abstract submission)
            </p>
          </div>

          <h4 className="subhead">Acknowledgement</h4>
          <p className="kk">
            The top three talk will earn trophies and cash prizes.
          </p>

          <h4 className="subhead">Guidelines</h4>
          <div className="kk">
            <p>
              1.Simplicity: Explain your research in simple terms. Avoid
              technical jargon and complex explanations.
            </p>
            <p>
              2.Engagement: Capture attention from the start with an interesting
              fact or story related to your research.
            </p>
            <p>
              3.Structure: Outline your talk with a clear introduction, body
              (covering main points), and conclusion.
            </p>
            <p>
              4.Visuals: Use at least one visual aids - Props, slides, or
              demonstrations which can make complex concepts easier to
              understand.
            </p>
            <p>
              5.Practice: Time yourself while practicing to ensure you fit
              within the 3-minute timeframe.
            </p>
          </div>
        </div>
        <div className="d3">
          <h1>3. Sci-Art Exhibition</h1>
          <h4 className="subhead">Abstract </h4>
          <p className="kk">
            Break the boundaries between science and art! Unleash your
            imagination in the Sci-Art Competition, where scientific phenomena
            meet artistic expression. Showcase your vision, merging innovation
            with aesthetics to forge captivating creations.
          </p>

          <h4 className="subhead">Eligibility</h4>
          <div className="kk">
            <p>
              1.IITH students and external participants working on topics listed
              on the IITH website are eligible.
            </p>
            <p>2.Preliminary results are acceptable.</p>
            <p>
              3.All participant must be registered for the Sci-Art exhibition
              before deadline. (Link for registration & abstract submission)
            </p>
          </div>

          <h4 className="subhead">Acknowledgement</h4>
          <p className="kk">
            Best submissions in this Sci-Art contest will feature in an
            inclusive exhibition. The top three Sci-Art visuals will earn
            trophies and cash prizes.
          </p>

          <h4 className="subhead">Guidelines</h4>
          <div className="kk">
            <p>
              1.Concept: Develop a Image from simulation results,
              microscopy/instrumental image, digital art, cartoon format etc.
              that combines your research with artistic expression.
            </p>
            <p>
              2.Originality: Create something unique and innovative that
              showcases a fusion of research and art.
            </p>
            <p>
              3.Clarity: Ensure that the scientific aspect is communicated
              clearly, even if it's an abstract representation.
            </p>
            <p>
              4.Aesthetics: Pay attention to the artistic presentation - it
              should be visually appealing.
            </p>
            <p>
              5.Explanation: Provide a caption (less than 5 words) and brief
              description (less than 30 words) that explains how your artwork
              connects research and art.
            </p>
            <p>
              6.Image Format: Acceptable file types of the image with minimum
              150 DPI (Max. file size of 5 MB per image): JPEG/PNG/TIFF/PDF
              format.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutnav;
