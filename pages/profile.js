const Profile = () => (
  <div className="container mx-auto">
    <h1 className="text-xl">Página</h1>
    <span className="text-gray-500">{Profile.pageTitle}</span>
  </div>
);

Profile.pageTitle = "Profile";

export default Profile;