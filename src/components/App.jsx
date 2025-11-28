import "../styles/App.scss";
import LogoBrand from "../images/laptop-code-solid.svg";
import LogoAdalab from "../images/adalab.png";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./layout/Hero";
import Preview from "./create/Preview";
import Form from "./create/Form";
import { useState, useEffect} from "react";


function App() {
  const [cardData, setCardData] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    author: "",
    job: "",
    photo: "",
    image: "",
  });

 useEffect(() => {
  // Este código se lanza cuando cambie cardData
  localStorage.setItem('form-backup', JSON.stringify(cardData));
}, [cardData]);

  const handleInputCard = (ev) => {
    setCardData({
      ...cardData,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleClick = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardData),
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData.success) {
          // Hacemos algo para indicar la dirección del servidor, ole y ole
        } else {
          // Hacemos algo para indicar que hay un error, fíjate tú
        }
      })
      .catch((error) => {
        console.error("Error en la petición:", error);
      });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Hero />
        <Preview cardData={cardData} />
        <Form
          handleInputCard={handleInputCard}
          cardData={cardData}
          setCardData={setCardData}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

/*handleInputName={handleInputName} handleInputSlogan={handleInputSlogan} handleInputRepo={handleInputRepo} handleInputDemo={handleInputDemo} handleInputTech={handleInputTech} handleInputDesc={handleInputDesc} handleInputAuthor={handleInputAuthor} handleInputJob={handleInputJob}*/
