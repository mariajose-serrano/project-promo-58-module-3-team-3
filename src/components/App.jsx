import "../styles/App.scss";
import LogoBrand from "../images/laptop-code-solid.svg";
import LogoAdalab from "../images/adalab.png";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./layout/Hero";
import Preview from "./create/Preview";
import Form from "./create/Form";
import { useState } from "react";

function App() {
  const [cardData, setCardData] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    author: '',
    job: '',
    photo: '',
    image: '',
  });

  const handleInputCard = (ev) => {
    setCardData({
      ...cardData,
      [ev.target.name]: ev.target.value
    });
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Hero />
        <Preview cardData={cardData} />
        <Form handleInputCard={handleInputCard} cardData={cardData} setCardData={setCardData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

/*handleInputName={handleInputName} handleInputSlogan={handleInputSlogan} handleInputRepo={handleInputRepo} handleInputDemo={handleInputDemo} handleInputTech={handleInputTech} handleInputDesc={handleInputDesc} handleInputAuthor={handleInputAuthor} handleInputJob={handleInputJob}*/