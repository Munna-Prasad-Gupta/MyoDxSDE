











// import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   flex: 1;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 32px 20px;
//   overflow-y: auto;
//   background: linear-gradient(to bottom right, #e3f2fd, #ffffff);
// `;

// const Header = styled.h1`
//   font-size: 2.8rem;
//   font-weight: 700;
//   margin-bottom: 25px;
//   color: #0d47a1;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 2.2rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 2rem;
//   }
// `;

// const ProfileCard = styled.div`
//   width: 100%;
//   max-width: 700px;
//   background: #ffffff;
//   padding: 30px;
//   border-radius: 16px;
//   box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const ProfileImage = styled.img`
//   width: 160px;
//   height: 160px;
//   object-fit: cover;
//   border-radius: 50%;
//   border: 5px solid #1976d2;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     width: 130px;
//     height: 130px;
//   }

//   @media (max-width: 480px) {
//     width: 110px;
//     height: 110px;
//   }
// `;

// const Name = styled.h2`
//   font-size: 2.2rem;
//   font-weight: 600;
//   color: #1976d2;
//   margin-bottom: 12px;
// `;

// const About = styled.p`
//   font-size: 1.1rem;
//   color: #555;
//   text-align: center;
//   line-height: 1.7;
//   margin-bottom: 25px;
//   padding: 0 10px;
// `;

// const SectionTitle = styled.h3`
//   font-size: 1.6rem;
//   color: #0d47a1;
//   margin-bottom: 16px;
// `;

// const ExpertiseList = styled.ul`
//   width: 100%;
//   list-style: none;
//   padding: 0;
//   margin-bottom: 30px;
// `;

// const ExpertiseItem = styled.li`
//   font-size: 1.1rem;
//   color: #333;
//   margin-bottom: 12px;
//   display: flex;
//   align-items: center;
// `;

// const Icon = styled.span`
//   margin-right: 12px;
//   font-size: 1.4rem;
//   color: #1976d2;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   width: 100%;
//   align-items: center;
// `;

// const ContactButton = styled.a`
//   background-color: #1976d2;
//   color: white;
//   padding: 12px 25px;
//   border-radius: 10px;
//   text-decoration: none;
//   font-size: 1rem;
//   font-weight: 600;
//   transition: background-color 0.3s ease;
//   width: 70%;
//   text-align: center;

//   &:hover {
//     background-color: #0d47a1;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//     width: 90%;
//   }
// `;

// const Portfolio = () => {
//   return (
//     <Container>
//       <Header>Neurologist & Muscular Dystrophy Specialist</Header>
//       <ProfileCard>
//         <ProfileImage
//           src="/Tharun.jpg" 
//           alt="Doctor Profile"
//         />
//         <Name>Dr. Alla Tharun</Name>
//         <About>
//           Hello, I'm Dr. Alla Tharun — a board-certified neurologist dedicated
//           to early diagnosis and advanced treatment of muscular dystrophy.
//           With over a decade of experience, I strive to deliver personalized, compassionate care
//           using cutting-edge diagnostic tools and therapies.
//         </About>
//         <SectionTitle>Areas of Expertise:</SectionTitle>
//         <ExpertiseList>
//           <ExpertiseItem>
//             <Icon>🧠</Icon> Neuromuscular Disorders
//           </ExpertiseItem>
//           <ExpertiseItem>
//             <Icon>🩺</Icon> Early Diagnosis of Muscular Dystrophy
//           </ExpertiseItem>
//           <ExpertiseItem>
//             <Icon>🔬</Icon> Genetic Testing & Biomarker Research
//           </ExpertiseItem>
//           <ExpertiseItem>
//             <Icon>💊</Icon> Personalized Treatment Plans
//           </ExpertiseItem>
//           <ExpertiseItem>
//             <Icon>🤖</Icon> AI-powered Diagnostic Solutions
//           </ExpertiseItem>
//         </ExpertiseList>
//         <ButtonGroup>
//           <ContactButton
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=dr.alla.tharun@email.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Email Me
//           </ContactButton>
//           <ContactButton href="tel:+1234567890">
//             Call Me: +1 (234) 567-890
//           </ContactButton>
//         </ButtonGroup>
//       </ProfileCard>
//     </Container>
//   );
// };

// export default Portfolio;























import React from "react";
import styled, { keyframes } from "styled-components";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  height: 100vh;
overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: linear-gradient(to right, #dbeafe, #ffffff);
`;

const Header = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(to right, #1e3a8a, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 30px;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.9rem;
  }
`;

const ProfileCard = styled.div`
  width: 100%;
  max-width: 720px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1.2s ease;

  @media (max-width: 480px) {
    padding: 25px 20px;
  }
`;

const ProfileImage = styled.img`
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #3b82f6;
  margin-bottom: 25px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;

const Name = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  color: #1d4ed8;
  margin-bottom: 15px;
`;

const About = styled.p`
  font-size: 1.1rem;
  color: #374151;
  text-align: center;
  line-height: 1.7;
  margin-bottom: 30px;
  padding: 0 10px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #1e40af;
  margin-bottom: 20px;
`;

const ExpertiseList = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  margin-bottom: 35px;
`;

const ExpertiseItem = styled.li`
  font-size: 1.1rem;
  color: #1f2937;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    color: #1d4ed8;
    transform: translateX(4px);
  }
`;

const Icon = styled.span`
  margin-right: 12px;
  font-size: 1.3rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  align-items: center;
`;

const ContactButton = styled.a`
  background: #1d4ed8;
  color: #fff;
  padding: 13px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.3s ease;
  width: 75%;
  text-align: center;

  &:hover {
    background: #1e3a8a;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    width: 90%;
  }
`;

const Portfolio = () => {
  return (
    <Container>
      <Header>Neurologist & Muscular Dystrophy Specialist</Header>
      <ProfileCard>
        <ProfileImage
          src="/Tharun.jpg"
          alt="Doctor Profile"
        />
        <Name>Dr. Alla Tharun</Name>
        <About>
          Hello, I’m Dr. Alla Tharun — a board-certified neurologist committed to 
          early diagnosis and breakthrough treatments for muscular dystrophy. With 
          10+ years in neuromuscular care, I aim to deliver compassion-driven, AI-enhanced care.
        </About>
        <SectionTitle>Areas of Expertise:</SectionTitle>
        <ExpertiseList>
          <ExpertiseItem>
            <Icon>🧠</Icon> Neuromuscular Disorders
          </ExpertiseItem>
          <ExpertiseItem>
            <Icon>🩺</Icon> Early Diagnosis of Muscular Dystrophy
          </ExpertiseItem>
          <ExpertiseItem>
            <Icon>🔬</Icon> Genetic Testing & Biomarker Research
          </ExpertiseItem>
          <ExpertiseItem>
            <Icon>💊</Icon> Personalized Treatment Plans
          </ExpertiseItem>
          <ExpertiseItem>
            <Icon>🤖</Icon> AI-powered Diagnostic Strategies
          </ExpertiseItem>
        </ExpertiseList>
        <ButtonGroup>
          <ContactButton
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tharunalla55@email.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </ContactButton>
          <ContactButton href="tel:+1234567890">
            Call Me: +1 (234) 567-890
          </ContactButton>
        </ButtonGroup>
      </ProfileCard>
    </Container>
  );
};

export default Portfolio;
