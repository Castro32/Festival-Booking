import React, { useEffect } from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

const PastEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <div className="banner">
        
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 200 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            bounce: 0.3,
            type: "spring",
          }}
          className="details"
        >
          <h1><strong>Past Events.</strong></h1>
          <p>
            Every journey tells a story, and every holiday is a chapter in your
            adventure.
          </p>
        </motion.div>
      </div>
      <div className="cards">
        <div className="card">
          <img
            src="./asst1.jpeg"
            alt=""
          />
          <div>
            <h2>Honeymoon</h2>
            <p>
              Begin your journey of love and togetherness with a honeymoon that
              sets the tone for a lifetime of shared adventures. Celebrate your
              union in romantic destinations, surrounded by breathtaking
              landscapes and luxurious accommodations, tailor-made for the two
              of you.
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
            <h2>Group Trip</h2>
            <p>
              Traveling is more enjoyable when shared with friends, family, or
              like-minded explorers. Our group trips bring people together,
              fostering new friendships as you embark on thrilling adventures,
              discover cultural wonders, and create memories that bond you
              forever.
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
            <h2>Family Vacation</h2>
            <p>
              Create cherished moments with your loved ones on a family vacation
              that caters to all ages. From fun-filled activities for kids to
              relaxation for adults, our family-friendly destinations ensure
              everyone finds joy and relaxation.
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
            <h2>Solo Expedition</h2>
            <p>
              Embrace the freedom of solo travel and embark on a personal
              journey of self-discovery. Our carefully curated solo expeditions
              provide opportunities to meet fellow travelers, immerse yourself
              in local culture, and uncover hidden gems at your own pace.
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
            <h2>Luxury Retreat</h2>
            <p>
              Indulge in opulence and relaxation with our luxury retreats, where
              every detail is meticulously curated to provide the utmost comfort
              and exclusivity. Unwind in lavish accommodations, savor gourmet
              cuisine, and enjoy personalized service that caters to your every
              desire.
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
            <h2>Safari Adventure</h2>
            <p>
            Embark on a safari odyssey that blends discovery, luxury, and awe-inspiring landscapes. Our safari adventures transport you to the heart of the wild, awakening to new wonders each day. Let the savannah be your guide, where every trail unveils a gateway to extraordinary memories.
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
      width: 100%;
      height: 80vh;
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
    margin: 7em 0;
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