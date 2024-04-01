import React, { useEffect } from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

const PastEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      
      <div className="cards">
      <h1><strong>Past Events.</strong></h1>
          <p>
            Gallery of our past events.
          </p>
        <div className="card">
          <img
            src="./asst1.jpeg"
            alt=""
          />
          <div>
            <h2>Festival Frenzy</h2>
            <p>
            Amidst the vibrant chaos of the music festival, there's a certain magic that pervades the atmosphere. It's in the way the crowd sways to the rhythm, the flicker of excitement in their eyes, and the infectious energy that pulses through the air.
            </p>
            <button>See the Offers</button>
          </div>
        </div>
        <div className="card">
          <img
            src="./asset2.jpeg"
            alt=""
          />
          <div>
            <h2>Captivating Cadence</h2>
            <p>
            Immerse yourself in the captivating cadence of melodies echoing through the air, transcending boundaries of time and space. As the vibrant lights dance in harmony with the pulsating beats, every note becomes a brushstroke painting a vivid tapestry of emotions
            </p>
            <button>See the Offers</button>
          </div>
        </div>
        <div className="card">
          <img
            src="./asset3.jpeg"
            alt=""
          />
          <div>
            <h2>Twilight Illuminations</h2>
            <p>
            In the dimming twilight, as the sun bids farewell to the day, a mesmerizing spectacle unfolds at the heart of the festival grounds. The air is electric with anticipation as the crowd gathers, their faces illuminated not by traditional light sources, but by the soft glow of countless phone flashlights. 
            </p>
            <button>See the Offers</button>
          </div>
        </div>
        <div className="card">
          <img
            src="./asset4.jpeg"
            alt=""
          />
          <div>
            <h2>Harmonious Crescendo</h2>
            <p>
            In the heart of the festival's pulsating energy, the stage becomes a sanctuary for creativity and expression. Against a backdrop of dazzling lights and roaring cheers, artists take center stage, their passion igniting the air with an electrifying fervor.
            </p>
            <button>See the Offers</button>
          </div>
        </div>
        <div className="card">
          <img
            src="p4.jpeg"
            alt=""
          />
          <div>
            <h2>Stage Spectacle</h2>
            <p>
            Glimmering under the radiant glow of spotlights, the stage transforms into a realm where dreams take flight and imaginations run wild. As the curtain rises, a world of infinite possibilities unfolds before the eager eyes of the audience.
            </p>
            <button>See the Offers</button>
          </div>
        </div>
        
      </div>
    </Container>
  );
};
const Container = styled.div`
  .banner {
    .bannerImg {
      width: 90%;
      height: 50vh;
      object-fit: cover;
      position: absolute;
      z-index: -1;
      filter: brightness(0.4);
    }
    .details {
      height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        color: white;
        font-size: 3em;
        font-weight: 400;
      }
      p {
        color: #e0e0e0;
      }
    }
  }
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
    margin: 4em 0;
    .card {
      width: 80vw;
      max-width: 1200px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2em;
      background: linear-gradient(145deg, #e6e6e6, #ffffff);
      box-shadow: 11px 11px 24px #d1d1d1, -11px -11px 24px #ffffff;
      border-radius: 2em;
      border: 1px solid #e0e0e0;
      position: sticky;
      top: 5em;
      :nth-child(2) {
        top: 7em;
      }
      :nth-child(3) {
        top: 9em;
      }
      :nth-child(4) {
        top: 11em;
      }
      :nth-child(5) {
        top: 13em;
      }
      :nth-child(6) {
        top: 15em;
      }
      :nth-child(7) {
        top: 17em;
      }
      :nth-child(8) {
        top: 19em;
      }
      :nth-child(9) {
        top: 21em;
        background: white;
        button {
          font-size: 30px;
          padding: 14px 30px;
        }
      }
      img {
        width: 50%;
        border-radius: 2em 0 0 2em;
      }
      div {
        display: flex;
        flex-direction: column;
        padding-right: 20px;
        align-items: flex-start;
        h2 {
          font-weight: 500;
        }
        p {
          color: gray;
        }
        button {
          padding: 10px 14px;
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          border: none;
          background: #333333;
          color: white;
          border-radius: 7px;
          margin-top: 10px;
          :hover {
            background: var(--primaryColorDark);
            transition: 0.3s;
            cursor: pointer;
            :nth-child(2) {
              background-color: var(--secondaryBackgroundColor);
            }
          }
        }
      }
    }
  }
  @media (max-width: 1180px) {
    .cards {
      .card {
        width: 94vw;
      }
    }
  }
  @media (max-width: 1120px) {
    .cards {
      .card {
        p {
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 950px) {
    .cards {
      .card {
        div {
          img {
            width: 70px;
          }
          h2 {
            font-size: 20px;
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    .cards {
      .card {
        div {
          p {
            height: 40px;
            overflow-y: scroll;
          }
        }
      }
    }
  }
  @media (max-width: 650px) {
    .cards {
      gap: 7em;
      .card {
        flex-direction: column;
        gap: 0px;
        img {
          border-radius: 20px;
          width: 60%;
        }
        div {
          align-items: center;
          padding: 20px;
          p {
            text-align: center;
          }
        }
      }
    }
  }
  @media (max-width: 450px) {
    .cards {
      .card {
        img {
          border-radius: 20px;
          width: 100%;
        }
        div {
          align-items: center;
          padding: 20px;
          p {
            text-align: center;
            height: 40px;
            overflow-y: scroll;
          }
        }
      }
    }
  }
  @media (max-width: 780px) {
    .banner {
      .details {
        padding: 0 3%;
        h1 {
          font-size: 2em;
          text-align: center;
        }
        p {
          font-size: 15px;
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 340px) {
    .banner {
      .details {
        h1 {
          font-size: 1.7em;
        }
        p {
          font-size: 13px;
        }
      }
    }
  }
`;

export default PastEvents;