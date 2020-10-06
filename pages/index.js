const Home = () => (
  <div className="container mx-auto">
    <h1 className="text-xl">Página</h1>
    <span className="text-gray-500">{Home.pageTitle}</span>
  </div>
);

Home.pageTitle = "Home";

export default Home;