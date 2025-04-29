
// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers";
// import { CircularProgress, Button } from "@mui/material";
// import jsPDF from "jspdf";

// const Container = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100%;
//   overflow: hidden;
// `;

// const Left = styled.div`
//   flex: 0.3;
//   padding: 24px;
//   border-right: 1px solid ${({ theme }) => theme.text_primary + 20};
//   background-color: ${({ theme }) => theme.bg || "#f9f9f9"};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Right = styled.div`
//   flex: 0.7;
//   padding: 24px;
//   overflow-y: auto;
//   background-color: ${({ theme }) => theme.bg_light || "#ffffff"};
// `;

// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// `;

// const DiagnosisCard = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 12px;
//   background: white;
//   padding: 20px;
//   box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
// `;

// const CardHeader = styled.div`
//   text-align: center;
//   margin-bottom: 16px;
// `;

// const MainTitle = styled.div`
//   font-size: 24px;
//   font-weight: 700;
//   color: ${({ theme }) => theme.primary || "#1976d2"};
// `;

// const Slogan = styled.div`
//   font-size: 14px;
//   color: ${({ theme }) => theme.text_secondary || "#666"};
//   margin-top: 4px;
// `;

// const InfoGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 16px;
//   margin-top: 16px;
// `;

// const InfoItem = styled.div`
//   font-size: 14px;
//   color: ${({ theme }) => theme.text_primary || "#333"};
// `;

// const DownloadButton = styled(Button)`
//   && {
//     margin-top: 20px;
//     width: 100%;
//   }
// `;

// const Title = styled.div`
//   font-weight: 600;
//   font-size: 18px;
//   margin-bottom: 20px;
// `;

// const fetchUserDetails = async () => {
//   try {
//     const token = localStorage.getItem("token");
//     if (!token) return null;

//     const response = await fetch("http://localhost:8080/api/user/me", {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (response.ok) {
//       return await response.json();
//     } else {
//       console.error("Failed to fetch user info:", await response.text());
//       return null;
//     }
//   } catch (err) {
//     console.error("Error in fetchUserDetails:", err);
//     return null;
//   }
// };

// const Report = () => {
//   const [diagnosisData, setDiagnosisData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [date, setDate] = useState("");
//   const [userInfo, setUserInfo] = useState({});

//   const fetchDiagnosisData = async () => {
//     setLoading(true);
//     try {
//       const user = await fetchUserDetails();
//       setUserInfo(user);
//       if (!user || !user._id) return;

//       const token = localStorage.getItem("token");
//       const response = await fetch(`http://localhost:8080/api/diagnosis`, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         const allData = await response.json();

//         const filtered = allData.filter((diag) => {
//           const matchesUser = diag.user === user._id;
//           const matchesDate = date
//             ? diag.createdAt?.startsWith(date)
//             : true;
//           return matchesUser && matchesDate;
//         });

//         setDiagnosisData(filtered);
//       } else {
//         console.error("Failed to fetch diagnosis:", await response.text());
//       }
//     } catch (err) {
//       console.error("Error fetching diagnosis:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDiagnosisData();
//   }, [date]);

//   const downloadReport = (diag) => {
//     const doc = new jsPDF();
//     doc.setFontSize(20);
//     doc.text("MyoDx Report", 20, 20);
//     doc.setFontSize(12);
//     doc.text("Empowering Early Diagnosis for Stronger Futures.", 20, 30);

//     const details = [
//       ["Name", userInfo?.name || "NA"],
//       ["Email", userInfo?.email || "NA"],
//       ...Object.entries(diag).filter(([key]) => 
//         !["_id", "user", "createdAt", "updatedAt", "__v"].includes(key)
//       ).map(([key, value]) => [key, value !== undefined ? value : "NA"]),
//     ];

//     let y = 40;
//     details.forEach(([label, value]) => {
//       doc.text(`${label}: ${value}`, 20, y);
//       y += 10;
//     });

//     doc.save(`MyoDx_Report_${diag._id}.pdf`);
//   };

//   return (
//     <Container>
//       <Left>
//         <Title>Select Date</Title>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DateCalendar
//             onChange={(e) => {
//               const formatted = `${e.$y}-${(e.$M + 1)
//                 .toString()
//                 .padStart(2, "0")}-${e.$D.toString().padStart(2, "0")}`;
//               setDate(formatted);
//             }}
//           />
//         </LocalizationProvider>
//       </Left>

//       <Right>
//         {loading ? (
//           <CircularProgress />
//         ) : (
//           <CardWrapper>
//             {diagnosisData.length > 0 ? (
//               diagnosisData.map((diag) => (
//                 <DiagnosisCard key={diag._id}>
//                   <CardHeader>
//                     <MainTitle>MyoDx Report</MainTitle>
//                     <Slogan>Empowering Early Diagnosis for Stronger Futures.</Slogan>
//                   </CardHeader>

//                   <InfoGrid>
//                     <InfoItem><strong>Name:</strong> {userInfo?.name || "NA"}</InfoItem>
//                     <InfoItem><strong>Email:</strong> {userInfo?.email || "NA"}</InfoItem>

//                     {Object.entries(diag).filter(([key]) => 
//                       !["_id", "user", "createdAt", "updatedAt", "__v"].includes(key)
//                     ).map(([key, value]) => (
//                       <InfoItem key={key}>
//                         <strong>{key}:</strong> {value !== undefined ? value : "NA"}
//                       </InfoItem>
//                     ))}
//                   </InfoGrid>

//                   <DownloadButton
//                     variant="contained"
//                     color="primary"
//                     onClick={() => downloadReport(diag)}
//                   >
//                     Download Report
//                   </DownloadButton>
//                 </DiagnosisCard>
//               ))
//             ) : (
//               <p>No records for this date.</p>
//             )}
//           </CardWrapper>
//         )}
//       </Right>
//     </Container>
//   );
// };

// export default Report;



























import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { CircularProgress, Button } from "@mui/material";
import jsPDF from "jspdf";

// Styled Components
const Container = styled.div`
  display: flex;
  height: calc(100vh - 70px);
  width: 100%;
  overflow: hidden;
`;

const Left = styled.div`
  flex: 0.3;
  padding: 24px;
  border-right: 1px solid ${({ theme }) => theme.text_primary + 20};
  background-color: ${({ theme }) => theme.bg || "#f9f9f9"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Right = styled.div`
  flex: 0.7;
  padding: 24px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.bg_light || "#ffffff"};
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const DiagnosisCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 16px;
  background: white;
  padding: 24px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const MainTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary || "#1976d2"};
`;

const Slogan = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary || "#666"};
  margin-top: 6px;
`;

const BasicInfoSection = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary || "#555"};
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.text_primary + 20};
  padding-bottom: 6px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

const InfoItem = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary || "#333"};
  line-height: 1.6;
`;

const DownloadButton = styled(Button)`
  && {
    margin-top: 24px;
    width: 100%;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
`;

// Utility functions
const fetchUserDetails = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const response = await fetch("http://localhost:8080/api/user/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      console.error("Failed to fetch user info:", await response.text());
      return null;
    }
  } catch (err) {
    console.error("Error in fetchUserDetails:", err);
    return null;
  }
};

const formatKey = (key) => {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace(/_/g, ' ');
};

const Report = () => {
  const [diagnosisData, setDiagnosisData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const fetchDiagnosisData = async () => {
    setLoading(true);
    try {
      const user = await fetchUserDetails();
      setUserInfo(user);
      if (!user || !user._id) return;

      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/api/diagnosis`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const allData = await response.json();

        const filtered = allData.filter((diag) => {
          const matchesUser = diag.user === user._id;
          const matchesDate = date
            ? diag.createdAt?.startsWith(date)
            : true;
          return matchesUser && matchesDate;
        });

        setDiagnosisData(filtered);
      } else {
        console.error("Failed to fetch diagnosis:", await response.text());
      }
    } catch (err) {
      console.error("Error fetching diagnosis:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiagnosisData();
  }, [date]);

  const downloadReport = (diag) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("MyoDx Report", 20, 20);
    doc.setFontSize(12);
    doc.text("Empowering Early Diagnosis for Stronger Futures.", 20, 30);

    const details = [
      ["Name", userInfo?.name || "NA"],
      ["Email", userInfo?.email || "NA"],
      ...Object.entries(diag).filter(([key]) => 
        !["_id", "user", "createdAt", "updatedAt", "__v"].includes(key)
      ).map(([key, value]) => [formatKey(key), value !== undefined ? value : "NA"]),
    ];

    let y = 40;
    details.forEach(([label, value]) => {
      doc.text(`${label}: ${value}`, 20, y);
      y += 10;
    });

    doc.save(`MyoDx_Report_${diag._id}.pdf`);
  };

  return (
    <Container>
      <Left>
        <Title>Select Date</Title>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            onChange={(e) => {
              const formatted = `${e.$y}-${(e.$M + 1)
                .toString()
                .padStart(2, "0")}-${e.$D.toString().padStart(2, "0")}`;
              setDate(formatted);
            }}
          />
        </LocalizationProvider>
      </Left>

      <Right>
        {loading ? (
          <CircularProgress />
        ) : (
          <CardWrapper>
            {diagnosisData.length > 0 ? (
              diagnosisData.map((diag) => (
                <DiagnosisCard key={diag._id}>
                  <CardHeader>
                    <MainTitle>MyoDx Report</MainTitle>
                    <Slogan>Empowering Early Diagnosis for Stronger Futures.</Slogan>
                  </CardHeader>

                  <BasicInfoSection>
                    <SectionTitle>Basic Information</SectionTitle>
                    <InfoGrid>
                      <InfoItem><strong>Name:</strong> {userInfo?.name || "NA"}</InfoItem>
                      <InfoItem><strong>Email:</strong> {userInfo?.email || "NA"}</InfoItem>
                      <InfoItem><strong>Sex:</strong> {diag?.sex || "NA"}</InfoItem>
                      <InfoItem><strong>Age:</strong> {diag?.age || "NA"}</InfoItem>
                      <InfoItem><strong>Ethnicity:</strong> {diag?.ethnicity || "NA"}</InfoItem>
                      <InfoItem><strong>Family History:</strong> {diag?.familyHistory || "NA"}</InfoItem>
                    </InfoGrid>
                  </BasicInfoSection>

                  <SectionTitle>Medical Diagnosis</SectionTitle>
                  <InfoGrid>
                    {Object.entries(diag).filter(([key]) => 
                      !["_id", "user", "createdAt", "updatedAt", "__v", "sex", "age", "ethnicity", "familyHistory"].includes(key)
                    ).map(([key, value]) => (
                      <InfoItem key={key}>
                        <strong>{formatKey(key)}:</strong> {value !== undefined ? value : "NA"}
                      </InfoItem>
                    ))}
                  </InfoGrid>

                  <DownloadButton
                    variant="contained"
                    color="primary"
                    onClick={() => downloadReport(diag)}
                  >
                    Download Report
                  </DownloadButton>
                </DiagnosisCard>
              ))
            ) : (
              <p>No records for this date.</p>
            )}
          </CardWrapper>
        )}
      </Right>
    </Container>
  );
};

export default Report;
