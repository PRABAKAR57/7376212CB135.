import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Those passwords didn’t match. Try again.";
        }
        return errors;
    };

    return (
        <>
        <center><h1>Welcome to Shopify</h1></center>
        <center><h1>A Great Shopping Website to Buy Best Goods from our Sellers</h1></center>
            <div className="bgImg"></div>
            <div className="container">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">
                        Signed in successfully
                    </div>
                ) : (
                    console.log("Entered Details", formValues)
                )}

                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>OwnerName</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Choose a your ownername"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.username}</p>
                        <div className="field">
                            <label>OwnerEmail</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your OwnerEmail"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.username}</p>
                        <div className="field">
                            <label>RollNO</label>
                            <input
                                type="text"
                                name="rollno"
                                placeholder="Enter your RollNo"
                                value={formValues.RollNo}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.username}</p>
                        <div className="field">
                            <label>Access Code</label>
                            <input
                                type="text"
                                name="accesscode"
                                placeholder="Enter your Access Code"
                                value={formValues.accesscode}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.confirmPassword}</p>
                        <button className="fluid ui button blue">Submit</button>
                    </div>
                </form>
                <div className="text">
                    Already have an account? <span>Login</span>
                </div>
            </div>{" "}
        </>
    );
}

export default App;