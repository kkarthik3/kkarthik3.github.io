import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/Hero.png";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
// import StarCanvas from "../canvas/Stars";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faKaggle} from '@fortawesome/free-brands-svg-icons';
import { IoIosMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 700px; /* Set a fixed width */
  order: 1;
  @media (max-width: 980px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 0px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 400px; /* Set a fixed width */
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 400;
  font-size: 32px;
  display: flex;
  gap: 25px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

// const SubTitle = styled.div`
//   font-size: 20px;
//   line-height: 32px;
//   margin-bottom: 42px;
//   color: ${({ theme }) => theme.text_primary + 95};

//   @media (max-width: 960px) {
//     text-align: center;
//   }

//   @media (max-width: 960px) {
//     font-size: 16px;
//     line-height: 32px;
//   }
// `;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 80%;
  max-width: 200px;
  text-align: center;
  padding: 16px 0;
  max-height: 60px;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px; /* Adjust spacing as needed */
  margin-top: 20px;
  margin-bottom: 20px; /* Add some margin if needed */

  a {
    color: #ffffff; /* Change to your desired color */
    font-size: 20px; /* Adjust icon size */
    transition: color 0.2s ease;

    &:hover {
      color: #0077b5; /* LinkedIn color on hover */
      scale:1.2;
    }

    &.github:hover {
      color: #333; /* GitHub color on hover */
    }

    &.kaggle:hover {
      color: #20beff; /* Kaggle color on hover */
    }

    &.Gmail:hover {
      color: #fc3003; /* Kaggle color on hover */
    }
      
    &.leetcode:hover {
      color: #f89c14; /* Kaggle color on hover */
    }

  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          {/* <StarCanvas /> */}
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                {/* <SubTitle>{Bio.description}</SubTitle> */}
                                {/* Social Media Links Section */}
                  <SocialLinks>
                  <a href={Bio.linkedin} className="linkedin" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a href={Bio.github} className="github" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="lg"/>
                  </a>
                  <a href={Bio.kaggle} className="kaggle" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faKaggle} size="lg"/>
                  </a>
                  <a href={Bio.leetcode} className="leetcode" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode size={30}/>
                  </a>
                  <a href={`mailto:${Bio.mail}`} className="Gmail" target="_blank" rel="noopener noreferrer">
                    <IoIosMail size={32}/>
                  </a>
                </SocialLinks>
              </motion.div>

              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>


            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={HeroImg} alt="Karthikeyan K" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
