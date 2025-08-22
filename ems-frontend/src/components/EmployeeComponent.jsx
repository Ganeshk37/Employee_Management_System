import React, { useState, useEffect } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  const [errors, setErrors] = useState({ firstName: "", lastName: "", email: "" });
  const [loading, setLoading] = useState(true);

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    if (validateForm()) {
      const employee = { firstName, lastName, email };
      if (id) {
        updateEmployee(id, employee).then(() => navigator("/employees"));
      } else {
        createEmployee(employee).then(() => navigator("/employees"));
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    errorsCopy.firstName = firstName.trim() ? "" : "First name is required";
    errorsCopy.lastName = lastName.trim() ? "" : "Last name is required";
    errorsCopy.email = !email.trim()
      ? "Email is required"
      : !emailRegex.test(email)
      ? "Invalid email format"
      : "";

    setErrors(errorsCopy);
    valid = !errorsCopy.firstName && !errorsCopy.lastName && !errorsCopy.email;
    return valid;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="card col-lg-6 col-md-8 col-sm-12 shadow p-4 border-0">
          {loading ? (
            <h4 className="text-center text-secondary">Loading...</h4>
          ) : (
            <>
              <h2 className="text-center mb-4 fw-bold text-primary">
                {id ? "Update Employee" : "Add Employee"}
              </h2>

              <form onSubmit={saveOrUpdateEmployee}>
                {/* First Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>

                {/* Last Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Submit button */}
                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg rounded-pill"
                  >
                    {id ? "Update Employee" : "Add Employee"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
