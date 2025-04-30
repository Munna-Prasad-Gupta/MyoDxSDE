import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { resetpassword,verifyToken } from '../api/index';


function ResetPassword() {
    
    const { token } = useParams();
    const navigate = useNavigate();  // Use useNavigate for programmatic navigation
    console.log('Token received:', token);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [sumit, setSumit] = useState(false);
    const [error, setError] = useState(null);
    const [isTokenValid, setIsTokenValid] = useState(false);
const [isCheckingToken, setIsCheckingToken] = useState(true); // NEW

    // Validate the token
    useEffect(() => {

        const verifytoken = async () => {
            try {
                console.log('Token received in verifytoken for calling backend :', token);
                // Assume an API to validate the token exists
                const response = await verifyToken({ token });
                
                if (response.status === 200) {
                    setIsTokenValid(true); // Token is valid
                }
                console.log('Token back from backend  in verifytoken for calling backend :', isTokenValid);
            } catch (err) {
                if (err.response) {
                    // Handle different error statuses
                    if (err.response.status === 400) {
                        window.Toastify({ text: "❌ Token is invalid or has expired.", duration: 4000, gravity: "top", position: "center", style: { background: "rgba(220, 53, 69, 0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#fff", fontWeight: "500", fontSize: "16px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }, close: true, stopOnFocus: true }).showToast();

                        navigate("/", { state: { showUserSignUp: true } }); // Redirect to sign-up page
                    } else if (err.response.status === 500) {
                        // alert("Internal server error. Please try again later.");
                        window.Toastify({ text: "❌ Internal server error. Please try again later.", duration: 4000, gravity: "top", position: "center", style: { background: "rgba(220, 53, 69, 0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#fff", fontWeight: "500", fontSize: "16px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }, close: true, stopOnFocus: true }).showToast();

                        // navigate("/error"); // Redirect to an error page or a different route for internal issues
                        navigate("/", { state: { showUserSignUp: true } }); // Redirect to sign-up page
                    } else {
                        // alert("An unexpected error occurred.");
                        window.Toastify({ text: "❌ An unexpected error occurred.", duration: 4000, gravity: "top", position: "center", style: { background: "rgba(220, 53, 69, 0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#fff", fontWeight: "500", fontSize: "16px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }, close: true, stopOnFocus: true }).showToast();

                        navigate("/", { state: { showUserSignUp: true } }); // Redirect to sign-up page
                    }
                } else {
                    // Handle network or unknown errors
                    // alert("Network error. Please check your connection.");
                    window.Toastify({ text: "❌ Network error. Please check your connection.", duration: 4000, gravity: "top", position: "center", style: { background: "rgba(220, 53, 69, 0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#fff", fontWeight: "500", fontSize: "16px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }, close: true, stopOnFocus: true }).showToast();

                }
            } finally {
                setIsCheckingToken(false); // Token check is done
            }
        };

        verifytoken();
    }, [token]);

    const handleReset = async (e) => {
        e.preventDefault();
        setSumit(true);
        
        // Check if the new password matches the confirm password
        if (newPassword !== confirmPassword) {
            // alert("Passwords do not match!");
            window.Toastify({ text: "❌ Passwords do not match!", duration: 4000, gravity: "top", position: "center", style: { background: "rgba(220, 53, 69, 0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#fff", fontWeight: "500", fontSize: "16px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }, close: true, stopOnFocus: true }).showToast();
            
            setError("Passwords do not match.");
            setSumit(false);
            
            // Optionally, you can reload the page after password mismatch
            window.location.reload(); // Refresh the page to reset the form
            return;
        }
      
        try {
            console.log("Password being sent to backend: " + newPassword);
            
            // Send reset request
            const res = await resetpassword({ token, newPassword });
    
            // If the password reset is successful
            if (res.status === 200) {
                // alert("Password reset successful!");
                window.Toastify({ text: "✅ Password reset successful!", duration: 4000, gravity: "top", position: "center", style: { background: "rgba(40, 167, 69, 0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#fff", fontWeight: "500", fontSize: "16px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }, close: true, stopOnFocus: true }).showToast();

                if (res.data.role === "admin") {
                    navigate("/", { state: { showAdminSignIn: true, key: new Date().getTime() } });
                } else {
                    navigate("/", { state: { showUserSignIn: true, key: new Date().getTime() } });
                }
            }
        } catch (err) {
            console.error("Error occurred during reset:", err);
    
            // Handle specific error codes based on the server response
            if (err.response && err.response.status === 400) {
                // Token is invalid or has expired
                // alert("Token is invalid or has expired. Redirecting to login page.");
                window.Toastify({ text: "❌ Token is invalid or has expired. Redirecting to login page.", duration: 4000, gravity: "top", position: "center", style: { background: "rgba(220, 53, 69, 0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#fff", fontWeight: "500", fontSize: "16px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }, close: true, stopOnFocus: true }).showToast();

                navigate("/", { state: { showUserSignUp: true } }); // Redirect to sign-up page
            } else if (err.response && err.response.status === 500) {
                // Internal server error
                // alert("Internal server error. Please try again later.");
                window.Toastify({ text: "❌ Internal server error. Please try again later.", duration: 4000, gravity: "top", position: "center", style: { background: "rgba(220, 53, 69, 0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#fff", fontWeight: "500", fontSize: "16px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }, close: true, stopOnFocus: true }).showToast();

                navigate("/"); // Redirect to home or a fallback page
            } else {
                setError("Something went wrong.");
                // alert("Something went wrong. Please try again later.");
                window.Toastify({ text: "❌ Something went wrong. Please try again later.", duration: 4000, gravity: "top", position: "center", style: { background: "rgba(220, 53, 69, 0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#fff", fontWeight: "500", fontSize: "16px", padding: "14px 28px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }, close: true, stopOnFocus: true }).showToast();

            }
        }
        setSumit(false);
    };
    


    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px',
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px', // Makes it responsive
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginTop: '8px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const labelStyle = {
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            {isCheckingToken ? (
                <p>Validating token...</p>
            ) : isTokenValid ? (
                <form style={formStyle} onSubmit={handleReset}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Reset Password</h2>
                <div>
                    <label style={labelStyle} htmlFor="password">New Password</label>
                    <input
                    type="password"
                    id="password"
                    placeholder="Enter New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    style={inputStyle}
                    />
                    <label style={labelStyle} htmlFor="confirm_password">Confirm New Password</label>
                    <input
                    type="password"
                    id="confirm_password"
                    placeholder="Confirm Your Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    style={inputStyle}
                    />
                </div>
                {/* <button type="submit" style={buttonStyle}>Submit</button> */}
                <button type="submit" style={buttonStyle} disabled={sumit}>
  {sumit ? "Submitting..." : "Submit"}
</button>

                </form>
            ) : (
                <p style={{ color: "red" }}>{error || "Invalid or expired token."}</p>
            )}
            </div>

    );
}

export default ResetPassword;
