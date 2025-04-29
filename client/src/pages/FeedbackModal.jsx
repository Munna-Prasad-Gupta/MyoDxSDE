// import React, { useState, useEffect } from "react";
// import { GetFeedbackStatus,PostFeedback } from "../api/FeedbackApi"; // Adjust the path if needed
// import styled from "styled-components";

// // Styled-components for Modal
// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 999;
// `;

// const ModalContent = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 8px;
//   width: 400px;
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;

// const CloseButton = styled.button`
//   background: #f44336;
//   color: white;
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   font-size: 16px;
//   border-radius: 5px;
//   align-self: flex-end;
// `;

// const FeedbackForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;

// const FeedbackModal = ({ userId ,onClose}) => {
//   const [hasGivenFeedback, setHasGivenFeedback] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [feedback, setFeedback] = useState({
//     satisfaction: "",
//     easeOfUse: "",
//     clarity: "",
//     helpfulness: "",
//     suggestions: ""
//   });


  

//   // Fetch feedback status
//   useEffect(() => {
//     const fetchFeedbackStatus = async () => {
//       try {
//         const response = await GetFeedbackStatus(userId);
//         setHasGivenFeedback(response.data.hasGivenFeedback);
//       } catch (err) {
//         console.error("Error fetching feedback status:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFeedbackStatus();
//   }, [userId]);

//   // Handle feedback submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const response = await PostFeedback({userId,feedback});
//       console.log("Again came back in handleSibmit in FeedbackModal.jsx");
//       if (response.status === 200) {
//               console.log("✅ Feedback successfully submitted!");
//               // Set hasGivenFeedback to true to prevent showing the modal again
//               setHasGivenFeedback(true);
//               // setShowFeedbackModal(false); // Close the modal
            

//           setHasGivenFeedback(true);
//           setFeedback({
//             satisfaction: "",
//             easeOfUse: "",
//             clarity: "",
//             helpfulness: "",
//             suggestions: ""
//           }); 
//           onClose();
//         }
//     } catch (error) {
//       console.error("Error during feedback submission:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (hasGivenFeedback) return null; // Don't show modal if feedback already given

//   return (
//     <ModalOverlay>
//       <ModalContent>
//         <CloseButton onClick={onClose}>X</CloseButton>
//         {hasGivenFeedback ? (
//           <div>
//             <p>Thanks for your feedback!</p>
//           </div>
//         ) : (
//           <div>
//             <p>Please submit your feedback below:</p>
//             {/* <FeedbackForm onSubmit={handleSubmit}>
//               <textarea
//                 value={feedback}
//                 onChange={(e) => setFeedback(e.target.value)}
//                 rows="4"
//                 placeholder="Write your feedback here..."
//                 required
//               />
//               <button type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? "Submitting..." : "Submit Feedback"}
//               </button>
//             </FeedbackForm> */}
//             <FeedbackForm onSubmit={handleSubmit}>
//   <label>
//     1. How satisfied are you with the website?
//     <div>
//       {[1, 2, 3, 4, 5].map((num) => (
//         <label key={`satisfaction-${num}`}>
//           <input
//             type="radio"
//             name="satisfaction"
//             value={num}
//             checked={feedback.satisfaction == num}
//             onChange={(e) => setFeedback({ ...feedback, satisfaction: e.target.value })}
//             required
//           />
//           {num}
//         </label>
//       ))}
//     </div>
//   </label>

//   <label>
//     2. How easy was it to submit your information?
//     <div>
//       {[1, 2, 3, 4, 5].map((num) => (
//         <label key={`easeOfUse-${num}`}>
//           <input
//             type="radio"
//             name="easeOfUse"
//             value={num}
//             checked={feedback.easeOfUse == num}
//             onChange={(e) => setFeedback({ ...feedback, easeOfUse: e.target.value })}
//             required
//           />
//           {num}
//         </label>
//       ))}
//     </div>
//   </label>

//   <label>
//     3. Was the information clear and understandable?
//     <div>
//       {[1, 2, 3, 4, 5].map((num) => (
//         <label key={`clarity-${num}`}>
//           <input
//             type="radio"
//             name="clarity"
//             value={num}
//             checked={feedback.clarity == num}
//             onChange={(e) => setFeedback({ ...feedback, clarity: e.target.value })}
//             required
//           />
//           {num}
//         </label>
//       ))}
//     </div>
//   </label>

//   <label>
//     4. How helpful was the response you received?
//     <div>
//       {[1, 2, 3, 4, 5].map((num) => (
//         <label key={`helpfulness-${num}`}>
//           <input
//             type="radio"
//             name="helpfulness"
//             value={num}
//             checked={feedback.helpfulness == num}
//             onChange={(e) => setFeedback({ ...feedback, helpfulness: e.target.value })}
//             required
//           />
//           {num}
//         </label>
//       ))}
//     </div>
//   </label>

//   <label>
//     5. Any suggestions or feedback?
//     <textarea
//       value={feedback.suggestions || ''}
//       onChange={(e) => setFeedback({ ...feedback, suggestions: e.target.value })}
//       rows="4"
//       placeholder="Write your suggestions here..."
//     />
//   </label>

//   <button type="submit" disabled={isSubmitting}>
//     {isSubmitting ? "Submitting..." : "Submit Feedback"}
//   </button>
// </FeedbackForm>

//           </div>
//         )}
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default FeedbackModal;


















// FeedbackModal.jsx

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GetFeedbackStatus, PostFeedback } from "../api/FeedbackApi"; // Adjust path if needed

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-width: 420px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #555;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 16px;
  &:hover {
    color: #000;
  }
`;

const Header = styled.h2`
  background: linear-gradient(90deg, #2196F3, #1E88E5);
  color: #fff;
  margin: 0;
  padding: 16px;
  font-size: 20px;
  text-align: center;
`;

const Body = styled.div`
  padding: 24px;
  max-height: 75vh;
  overflow-y: auto;
`;

const Field = styled.div`
  margin-bottom: 18px;
  p {
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
  }
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    resize: vertical;
  }
`;

const Stars = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-top: 8px;
  input {
    display: none;
  }
  label {
    font-size: 26px;
    color: #ccc;
    cursor: pointer;
    padding: 0 4px;
    transition: color 0.2s;
  }
  input:checked ~ label,
  label:hover,
  label:hover ~ label {
    color: #FFD700;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(90deg, #2196F3, #1E88E5);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(90deg, #1E88E5, #2196F3);
  }
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ThankYouMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
  font-size: 18px;
  color: #333;
`;

// FeedbackModal Component
const FeedbackModal = ({ userId, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [hasGivenFeedback, setHasGivenFeedback] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [feedback, setFeedback] = useState({
    satisfaction: "",
    easeOfUse: "",
    clarity: "",
    helpfulness: "",
    suggestions: ""
  });

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await GetFeedbackStatus(userId);
        setHasGivenFeedback(res.data.hasGivenFeedback);
      } catch (err) {
        console.error("Error fetching feedback status:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStatus();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await PostFeedback({ userId, feedback });
      if (res.status === 200) {
        console.log("✅ Feedback submitted successfully!");
        setHasGivenFeedback(true);
        setSubmitted(true);
        setFeedback({
          satisfaction: "",
          easeOfUse: "",
          clarity: "",
          helpfulness: "",
          suggestions: ""
        });
        setTimeout(() => {
          onClose(); // Auto-close after delay
        }, 1500);
      }
    } catch (err) {
      console.error("Error submitting feedback:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return null;
  if (hasGivenFeedback && !submitted) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <Header>We Value Your Feedback</Header>
        <Body>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {/* Satisfaction */}
              <Field>
                <p>1. How satisfied are you with the website?</p>
                <Stars>
                  {[5,4,3,2,1].map((num) => (
                    <React.Fragment key={`sat-${num}`}>
                      <input
                        type="radio"
                        id={`satisfaction-${num}`}
                        name="satisfaction"
                        value={num}
                        checked={feedback.satisfaction == num}
                        onChange={(e) =>
                          setFeedback({ ...feedback, satisfaction: e.target.value })
                        }
                        required
                      />
                      <label htmlFor={`satisfaction-${num}`}>★</label>
                    </React.Fragment>
                  ))}
                </Stars>
              </Field>

              {/* Ease of Use */}
              <Field>
                <p>2. How easy was it to submit your information?</p>
                <Stars>
                  {[5,4,3,2,1].map((num) => (
                    <React.Fragment key={`ease-${num}`}>
                      <input
                        type="radio"
                        id={`easeOfUse-${num}`}
                        name="easeOfUse"
                        value={num}
                        checked={feedback.easeOfUse == num}
                        onChange={(e) =>
                          setFeedback({ ...feedback, easeOfUse: e.target.value })
                        }
                        required
                      />
                      <label htmlFor={`easeOfUse-${num}`}>★</label>
                    </React.Fragment>
                  ))}
                </Stars>
              </Field>

              {/* Clarity */}
              <Field>
                <p>3. Was the information clear and understandable?</p>
                <Stars>
                  {[5,4,3,2,1].map((num) => (
                    <React.Fragment key={`clarity-${num}`}>
                      <input
                        type="radio"
                        id={`clarity-${num}`}
                        name="clarity"
                        value={num}
                        checked={feedback.clarity == num}
                        onChange={(e) =>
                          setFeedback({ ...feedback, clarity: e.target.value })
                        }
                        required
                      />
                      <label htmlFor={`clarity-${num}`}>★</label>
                    </React.Fragment>
                  ))}
                </Stars>
              </Field>

              {/* Helpfulness */}
              <Field>
                <p>4. How helpful was the response you received?</p>
                <Stars>
                  {[5,4,3,2,1].map((num) => (
                    <React.Fragment key={`helpfulness-${num}`}>
                      <input
                        type="radio"
                        id={`helpfulness-${num}`}
                        name="helpfulness"
                        value={num}
                        checked={feedback.helpfulness == num}
                        onChange={(e) =>
                          setFeedback({ ...feedback, helpfulness: e.target.value })
                        }
                        required
                      />
                      <label htmlFor={`helpfulness-${num}`}>★</label>
                    </React.Fragment>
                  ))}
                </Stars>
              </Field>

              {/* Suggestions */}
              <Field>
                <p>5. Any suggestions or feedback?</p>
                <textarea
                  rows="4"
                  placeholder="Write your suggestions here..."
                  value={feedback.suggestions}
                  onChange={(e) =>
                    setFeedback({ ...feedback, suggestions: e.target.value })
                  }
                />
              </Field>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </SubmitButton>
            </form>
          ) : (
            <ThankYouMessage>
              🎉 Thank you for your feedback!
            </ThankYouMessage>
          )}
        </Body>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FeedbackModal;

