export const ProfileCard = ({ name, age, greeting, children }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      {children}
    </div>
  );
};

function Profile() {
  return (
    <div className="profile-container">
      <h1>Profile Card</h1>

      <ProfileCard
        name="Alex"
        age={25}
        greeting="Hello, welcome to my profile!"
      >
        <p>Hobbies: Reading, hiking, and coding.</p>
        <button>Contact</button>
      </ProfileCard>

      <h1>Profile Card</h1>

      <ProfileCard
        name="Justin"
        age={33}
        greeting="Hello, welcome to my profile!"
      >
        <p>Hobbies: Singing, dancing, and playing guitar.</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

export default Profile;
