import Stories from "../../components/Stories";
import Sliders from "../../components/Sliders";
import Header from "../../components/Header";
import Partners from "../../components/clients-partners/clients-partners";
const Home = () => {
  return (
    <>
      <Header/>
      <Sliders />
      <Stories />
      <Partners />
    </>
  );
}

export default Home;
