import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Incubation from "../../components/Info-incubation"
import Project from "../../components/Stories/Project"
import Footer from "@app/components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
          <Incubation />
        <Project/>
      <Footer />
    </>
  );
};

export default Home;
