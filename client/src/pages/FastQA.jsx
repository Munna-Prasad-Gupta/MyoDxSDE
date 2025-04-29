


// import React from "react";
// import styled from "styled-components";

// // Layout containers
// const Container = styled.div`
//   height: calc(100vh - 70px); /* assumes navbar height is 70px */
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
// `;

// const ScrollableContent = styled.div`
//   padding: 24px;
//   overflow-y: auto;
//   flex: 1;
//   background-color: ${({ theme }) => theme.bg_light || "#fff"};
// `;

// // Typography styles
// const Header = styled.div`
//   margin-bottom: 32px;
// `;

// const Title = styled.h1`
//   font-size: 28px;
//   font-weight: 700;
//   color: ${({ theme }) => theme.primary || "#1976d2"};
// `;

// const Subtitle = styled.p`
//   font-size: 16px;
//   color: ${({ theme }) => theme.text_secondary || "#555"};
//   margin-top: 8px;
// `;

// // Section styles
// const Section = styled.div`
//   margin-bottom: 36px;
// `;

// const SectionTitle = styled.h2`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary || "#333"};
//   margin-bottom: 12px;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const Icon = styled.span`
//   font-size: 22px;
// `;

// const List = styled.ul`
//   list-style-type: disc;
//   padding-left: 20px;
//   color: ${({ theme }) => theme.text_primary || "#333"};
//   line-height: 1.7;
//   font-size: 15px;

//   li {
//     margin-bottom: 12px;
//   }
// `;

// const HowToUseGuide = () => {
//   return (
//     <Container>
//       <ScrollableContent>
//         <Header>
//           <Title>How to Use MyoDx</Title>
//           <Subtitle>
//             Welcome to MyoDx! This guide explains the purpose and usage of each
//             page in your application to help you get the most out of your
//             experience.
//           </Subtitle>
//         </Header>

//         <Section>
//           <SectionTitle><Icon>🏠</Icon>Dashboard</SectionTitle>
//           <List>
//             <li><strong>Purpose:</strong> The Dashboard is your home page after logging in. It gives you a quick overview of your health status and recent diagnostic activity.</li>
//             <li><strong>Latest Diagnosis Score:</strong> Shows your most recent health risk score based on diagnosis results.</li>
//             <li><strong>Total Diagnoses:</strong> Number of times you’ve completed the diagnosis form.</li>
//             <li><strong>Predicted Risk:</strong> The latest risk percentage calculated from your data.</li>
//             <li><strong>Weekly Diagnosis Risk % (Bar Chart):</strong> Visualizes your risk scores for each week, helping you see trends or improvements.</li>
//             <li><strong>User Health Progress (Line Chart):</strong> Tracks how your diagnosis score changes over time, so you can monitor your health journey.</li>
//             <li><strong>How to Use:</strong> Check this page regularly to track your health at a glance. Use the charts to spot patterns or improvements and decide if you need to take further action or consult your specialist.</li>
//           </List>
//         </Section>

//         <Section>
//           <SectionTitle><Icon>📝</Icon>Diagnosis</SectionTitle>
//           <List>
//             <li><strong>Purpose:</strong> This page is for entering your personal and medical details to generate a diagnosis and risk assessment.</li>
//             <li><strong>Demographics:</strong> Enter your age, sex, ethnicity, family history, and inheritance pattern. Accurate data ensures better assessment.</li>
//             <li><strong>NeuroMuscular Assessments:</strong> Fill in muscle strength, gait abnormalities, contractures, functional mobility, fatigue, pain, reflexes, and muscle tone. Use dropdowns and suggested ranges for consistency.</li>
//             <li><strong>Diagnostic Biomarkers:</strong> Enter lab values such as CK levels, dystrophin expression, genetic test results, muscle biopsy, EMG, myoglobin, and NT-proBNP. If unsure, consult your doctor or test reports.</li>
//             <li><strong>Physiological Metrics:</strong> Input any additional physical test results as requested.</li>
//             <li><strong>How to Use:</strong> Complete each field as accurately as possible. This information is used to generate your personalized diagnosis and risk score.</li>
//           </List>
//         </Section>

//         <Section>
//           <SectionTitle><Icon>📄</Icon>Reports</SectionTitle>
//           <List>
//             <li><strong>Purpose:</strong> View, interpret, and download your diagnosis reports for any selected date.</li>
//             <li><strong>Calendar:</strong> Select a date to view the diagnosis report from that day.</li>
//             <li><strong>Report Details:</strong> Shows your basic information, medical diagnosis, and all key metrics (muscle strength, biomarkers, functional scores, etc.).</li>
//             <li><strong>Download Report:</strong> Click to save a copy of your report for sharing or personal records.</li>
//             <li><strong>How to Use:</strong> Use the calendar to review past reports. Examine all details for trends and share with your healthcare provider if needed.</li>
//           </List>
//         </Section>

//         <Section>
//           <SectionTitle><Icon>🎓</Icon>Educational</SectionTitle>
//           <List>
//             <li><strong>Purpose:</strong> A resource hub for learning about Muscular Dystrophy through curated videos.</li>
//             <li><strong>Video Cards:</strong> Each card has a title, description, and “Watch More” button. Topics include disease basics, patient stories, therapies, and research.</li>
//             <li><strong>How to Use:</strong> Click “Watch More” to view videos and expand your knowledge. Use this section to empower yourself with information about your condition.</li>
//           </List>
//         </Section>

//         <Section>
//           <SectionTitle><Icon>👨‍⚕️</Icon>Contact</SectionTitle>
//           <List>
//             <li><strong>Purpose:</strong> Learn about and contact your specialist for expert guidance.</li>
//             <li><strong>Specialist Profile:</strong> Information about Dr. Alla Tharun, including a photo, biography, and areas of expertise.</li>
//             <li><strong>Areas of Expertise:</strong> Lists the doctor’s specialties, such as neuromuscular disorders, genetic testing, and AI-powered diagnostics.</li>
//             <li><strong>How to Use:</strong> Refer to this page for background on your doctor and to find contact information for consultations or questions.</li>
//           </List>
//         </Section>

//         <Section>
//           <SectionTitle><Icon>💡</Icon>General Tips</SectionTitle>
//           <List>
//             <li><strong>Navigation:</strong> Use the top menu to move between pages. The current page is highlighted.</li>
//             <li><strong>Logout:</strong> Use the Logout link in the top right to securely exit your account.</li>
//             <li><strong>Data Accuracy:</strong> The more accurate your input, the more reliable your diagnosis and reports.</li>
//             <li><strong>Support:</strong> If you’re unsure about any field or feature, consult the Contact page or your healthcare provider.</li>
//           </List>
//         </Section>

//         <Section>
//           <SectionTitle><Icon>❓</Icon>Need More Help?</SectionTitle>
//           <List>
//             <li>If you have questions not covered here, use the Contact page to reach out to the specialist or support team.</li>
//             <li>For technical issues, check your internet connection or refresh the page.</li>
//           </List>
//         </Section>
//       </ScrollableContent>
//     </Container>
//   );
// };

// export default HowToUseGuide;

















import React from "react";
import styled from "styled-components";

// Layout containers
const Container = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ScrollableContent = styled.div`
  padding: 32px;
  overflow-y: auto;
  flex: 1;
  background-color: ${({ theme }) => theme.bg_light || "#f9f9fb"};
  scroll-behavior: smooth;
`;

// Typography styles
const Header = styled.div`
  margin-bottom: 40px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary || "#1976d2"};
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary || "#666"};
  margin-top: 10px;
  max-width: 700px;
  line-height: 1.6;
`;

// Section styles
const Section = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  padding: 28px 32px;
  margin-bottom: 28px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  }
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary || "#222"};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    color: ${({ theme }) => theme.primary || "#1976d2"};
  }
`;

const Icon = styled.span`
  font-size: 24px;
  transition: transform 0.2s ease;

  ${Section}:hover & {
    transform: scale(1.1);
  }
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 22px;
  color: ${({ theme }) => theme.text_primary || "#333"};
  line-height: 1.8;
  font-size: 16px;

  li {
    margin-bottom: 14px;
  }

  strong {
    color: ${({ theme }) => theme.primary || "#1976d2"};
  }
`;

const HowToUseGuide = () => {
  return (
    <Container>
      <ScrollableContent>
        <Header>
          <Title>How to Use MyoDx</Title>
          <Subtitle>
            Welcome to MyoDx! This guide explains the purpose and usage of each
            page in your application to help you get the most out of your
            experience.
          </Subtitle>
        </Header>

        {/* Sections */}
        <Section>
          <SectionTitle><Icon>🏠</Icon>Dashboard</SectionTitle>
          <List>
            <li><strong>Purpose:</strong> The Dashboard is your home page...</li>
            <li><strong>Latest Diagnosis Score:</strong> Shows your most recent health risk score...</li>
            <li><strong>Total Diagnoses:</strong> Number of times you’ve completed...</li>
            <li><strong>Predicted Risk:</strong> The latest risk percentage...</li>
            <li><strong>Weekly Diagnosis Risk %:</strong> Visualizes your risk scores...</li>
            <li><strong>User Health Progress:</strong> Tracks changes over time...</li>
            <li><strong>How to Use:</strong> Check this page regularly...</li>
          </List>
        </Section>

        <Section>
          <SectionTitle><Icon>📝</Icon>Diagnosis</SectionTitle>
          <List>
            <li><strong>Purpose:</strong> Enter your details to generate a risk...</li>
            <li><strong>Demographics:</strong> Enter age, sex, family history...</li>
            <li><strong>NeuroMuscular Assessments:</strong> Fill in strength, gait, pain...</li>
            <li><strong>Diagnostic Biomarkers:</strong> Enter lab values like CK levels...</li>
            <li><strong>Physiological Metrics:</strong> Add other test results...</li>
            <li><strong>How to Use:</strong> Complete each field as accurately...</li>
          </List>
        </Section>

        <Section>
          <SectionTitle><Icon>📄</Icon>Reports</SectionTitle>
          <List>
            <li><strong>Purpose:</strong> View and download diagnosis reports...</li>
            <li><strong>Calendar:</strong> Select a date to view the report...</li>
            <li><strong>Report Details:</strong> Shows personal and medical info...</li>
            <li><strong>Download Report:</strong> Save a copy of your report...</li>
            <li><strong>How to Use:</strong> Use this for tracking and sharing...</li>
          </List>
        </Section>

        <Section>
          <SectionTitle><Icon>🎓</Icon>Educational</SectionTitle>
          <List>
            <li><strong>Purpose:</strong> A hub for learning about MD...</li>
            <li><strong>Video Cards:</strong> Each card links to a helpful video...</li>
            <li><strong>How to Use:</strong> Click “Watch More” to expand knowledge...</li>
          </List>
        </Section>

        <Section>
          <SectionTitle><Icon>👨‍⚕️</Icon>Contact</SectionTitle>
          <List>
            <li><strong>Purpose:</strong> Learn about and contact your specialist...</li>
            <li><strong>Specialist Profile:</strong> Dr. Alla Tharun’s credentials...</li>
            <li><strong>Areas of Expertise:</strong> Neuromuscular disorders, AI diagnostics...</li>
            <li><strong>How to Use:</strong> Use this for consultations or questions...</li>
          </List>
        </Section>

        <Section>
          <SectionTitle><Icon>💡</Icon>General Tips</SectionTitle>
          <List>
            <li><strong>Navigation:</strong> Use the top menu to move between pages.</li>
            <li><strong>Logout:</strong> Click Logout to exit securely.</li>
            <li><strong>Data Accuracy:</strong> Accurate input = better output.</li>
            <li><strong>Support:</strong> Use Contact if you’re unsure.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle><Icon>❓</Icon>Need More Help?</SectionTitle>
          <List>
            <li>Use the Contact page for specialist or support team help.</li>
            <li>Check your internet connection or refresh for technical issues.</li>
          </List>
        </Section>
      </ScrollableContent>
    </Container>
  );
};

export default HowToUseGuide;
