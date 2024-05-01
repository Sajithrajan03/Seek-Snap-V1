import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserProfile.css'; // Import custom CSS for styling

const UserProfile = () => {
  const initialUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '1234567890',
    address: '123 Main St, Cityville',
    gender: 'Male',
    occupation: 'Software Engineer',
    employeeId: 'hyd123456' // Initial Employee ID
  };

  const [userData, setUserData] = useState(initialUserData);
  const [editMode, setEditMode] = useState(false);
  const [isDirty, setIsDirty] = useState(false); // Track if any changes are made

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setIsDirty(true); // Set isDirty to true when changes are made
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDirty) { // Only save changes if any changes are made
      // Validate Employee ID
      const regex = /^(hyd|cbe|bmb|chn|dlh)\d{6}$/; // Regex pattern for validation
      if (!regex.test(userData.employeeId)) {
        toast.error('Invalid Employee ID. Please enter a valid ID.');
        return;
      }
      toast.success('Changes saved successfully!');
    } else {
      toast.info('No changes to save.');
    }
    setIsDirty(false); // Reset isDirty after saving changes
  };

  return (
    <div className="container py-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm p-4 user-profile-card">
            <div className="text-center">
              <FaUserCircle className="display-4 mb-4 text-primary" />
              <h2 className="fw-bold mb-3">{userData.name}</h2>
              <p className="lead mb-0">{userData.email}</p>
            </div> 

            <hr className="my-4" />
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={userData.name} onChange={handleChange} disabled={!editMode} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleChange} disabled={!editMode} required />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} disabled={!editMode} required />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" name="address" value={userData.address} onChange={handleChange} disabled={!editMode} />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select className="form-select" id="gender" name="gender" value={userData.gender} onChange={handleChange} disabled={!editMode} required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="occupation" className="form-label">Occupation</label>
                <input type="text" className="form-control" id="occupation" name="occupation" value={userData.occupation} onChange={handleChange} disabled={!editMode} required />
              </div>
              <div className="mb-3">
                <label htmlFor="employeeId" className="form-label">Employee ID</label>
                <input type="text" className="form-control" id="employeeId" name="employeeId" value={userData.employeeId} onChange={handleChange} disabled={!editMode} required />
              </div>
              <div className="text-center">
                {editMode ? (
                  <>
                    <button type="button" className="btn btn-secondary me-3" onClick={() => { setEditMode(false); setIsDirty(false); }}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                  </>
                ) : (
                  <button type="button" className="btn btn-primary" onClick={() => setEditMode(true)}>Edit Profile</button>
                )}
              </div>
            </form>
          </div>
          <div className="card shadow-sm mt-4 p-4 trip-history-card">
            <h2 className="mb-4 text-center text-primary">Trip History</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h3 className="mb-3 text-center text-primary">Ongoing Trips</h3>
                <ul className="list-unstyled clickable-trips">
                  <li className="mb-2">Trip 1</li>
                  <li className="mb-2">Trip 2</li>
                </ul>
              </div>
              <div className="col-md-8">
                <h3 className="mb-3 text-center text-primary">Upcoming Trips</h3>
                <ul className="list-unstyled clickable-trips">
                  <li className="mb-2">Trip 3</li>
                  <li className="mb-2">Trip 4</li>
                </ul>
              </div>
              <div className="col-md-8">
                <h3 className="mb-3 text-center text-primary">Previous Trips</h3>
                <ul className="list-unstyled clickable-trips">
                  <li className="mb-2">Trip 5</li>
                  <li className="mb-2">Trip 6</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
