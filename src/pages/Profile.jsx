
import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/profileService";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();

      setUser(data);

      setFormData({
        name: data.name,
        email: data.email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const data = await updateProfile(formData);

      alert(data.message);

      setUser(data.user);

      setIsEditing(false);
    } catch (error) {
      alert(error.response?.data?.message || "Update Failed");
    }
  };

  if (!user) {
    return (
      <div className="profile-loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <h2>My Profile</h2>

        {isEditing ? (
          <div className="profile-info">

            <input
              className="profile-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
            />

            <input
              className="profile-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />

            <button
              className="save-btn"
              onClick={handleUpdate}
            >
              Save Changes
            </button>

            <button
              className="cancel-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>

          </div>
        ) : (
          <div className="profile-info">

            <div className="info-box">
              <span>Name</span>
              <p>{user.name}</p>
            </div>

            <div className="info-box">
              <span>Email</span>
              <p>{user.email}</p>
            </div>

            <div className="info-box">
              <span>Role</span>
              <p>{user.role}</p>
            </div>

            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Profile;