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

  const [name, setName] = useState('Elegant Workspace');
  const [slogan, setSlogan] = useState('Diseños Exclusivos');
  const [repo, setRepo] = useState('');  // para estos hay que poner {repo}
  const [demo, setDemo] = useState('');  //  y {demo} tanto en el href como dentro del <a>
  const [technologies, setTechnologies] = useState('React JS - HTML - CSS');
  const [desc, setDesc] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione');
  const [author, setAuthor] = useState('Emmelie Bjôrklund');
  const [job, setJob] = useState('Full stack Developer');

  //const [image, setImage] = useSet();
  //const [image, steImage] = useSet();


  const handleInputName = (ev) => {
    setName(ev.target.value);
  };

  const handleInputSlogan = (ev) => {
    setSlogan(ev.target.value);
  };

  const handleInputRepo = (ev) => {
    setRepo(ev.target.value);
  };

  const handleInputDemo = (ev) => {
    setDemo(ev.target.value);
  };

  const handleInputTech = (ev) => {
    setTechnologies(ev.target.value);
  };

  const handleInputDesc = (ev) => {
    setDesc(ev.target.value);
  };

  const handleInputAuthor = (ev) => {
    setAuthor(ev.target.value);
  };

  const handleInputJob = (ev) => {
    setJob(ev.target.value);
  };

  return (
    <div className="container">
      <Header />

      <main className="main">
        
      <Hero />

        <Preview name={name} slogan={slogan} repo={repo} demo={demo} technologies={technologies} desc={desc} author={author} job={job} />
        <Form handleInputName={handleInputName} handleInputSlogan={handleInputSlogan} handleInputRepo={handleInputRepo} handleInputDemo={handleInputDemo} handleInputTech={handleInputTech} handleInputDesc={handleInputDesc} handleInputAuthor={handleInputAuthor} handleInputJob={handleInputJob}/>
      </main>

      <Footer />

    </div>
  );
}

export default App;
