import "../styles/App.scss";

import LogoBrand from "../images/laptop-code-solid.svg";
import LogoAdalab from "../images/adalab.png";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./layout/Hero";

import { useState } from "react";

function App() {

  const [proyect, setProyect] = useState('Elegant Workspace');
  const [slogan, setSlogan] = useState('Diseños Exclusivos');
  const [repo, setRepo] = useState('');  // para estos hay que poner {repo}
  const [demo, setDemo] = useState('');  //  y {demo} tanto en el href como dentro del <a>
  const [tech, setTech] = useState('React JS - HTML - CSS');
  const [desc, setDesc] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione');
  const [name, setName] = useState('Emmelie Bjôrklund');
  const [job, setJob] = useState('Full stack Developer');

  const handleInputProyect = (ev) => {
    setProyect(ev.target.value);
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
    setTech(ev.target.value);
  };

  const handleInputDesc = (ev) => {
    setDesc(ev.target.value);
  };

  const handleInputName = (ev) => {
    setName(ev.target.value);
  };

  const handleInputJob = (ev) => {
    setJob(ev.target.value);
  };

  return (
    <div className="container">
      <Header />

      <main className="main">
        
      <Hero />

        <section className="preview">
          <div className="projectImage"></div>
          <article className="card">
            <h2 className="card__projectTitle">
              <span className="card__projectTitle--text">
                Personal project card
              </span>
            </h2>

            <div className="card__author">
              <div className="card__authorPhoto"></div>
              <p className="card__job">{job}</p>
              <h3 className="card__name">{name === '' ? 'Emmelie Bjôrklund' : name}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{proyect === '' ? 'Elegant Workspace' : proyect}</h3>
              <p className="card__slogan">{slogan}</p>
              <h3 className="card__descriptionTitle">Product description</h3>
              <p className="card__description">{desc}</p>

              <div className="card__technicalInfo">
                <p className="card__technologies">{tech}</p>

                <a
                  className="icon icon__www"
                  href={demo}
                  title="Haz click para ver el proyecto online"
                >
                  {demo}
                </a>
                <a
                  className="icon icon__github"
                  href={repo}
                  title="Haz click para ver el código del proyecto"
                >
                  {repo}
                </a>
              </div>
            </div>
          </article>
        </section>
        <form className="addForm">
          <h2 className="title">Información</h2>
          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre el proyecto
            </legend>
            <input
              className="addForm__input"
              type="text"
              name="name"
              id="name"
              placeholder="Nombre del proyecto"
              onInput={handleInputProyect}
            />
            <input
              className="addForm__input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              onInput={handleInputSlogan}
            />
            <div className="addForm__2col">
              <input
                className="addForm__input"
                type="url"
                name="repo"
                id="repo"
                placeholder="Repositorio"
                onInput={handleInputRepo}
              />
              <input
                className="addForm__input"
                type="url"
                name="demo"
                id="demo"
                placeholder="Demo"
                onInput={handleInputDemo}
              />
            </div>
            <input
              className="addForm__input"
              type="text"
              name="technologies"
              id="technologies"
              placeholder="Tecnologías"
              onInput={handleInputTech}
            />
            <textarea
              className="addForm__input"
              type="text"
              name="desc"
              id="desc"
              placeholder="Descripción"
              onInput={handleInputDesc}
              rows="5"
            ></textarea>
          </fieldset>

          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre la autora
            </legend>
            <input
              className="addForm__input"
              type="text"
              name="autor"
              id="autor"
              placeholder="Nombre"
              onInput={handleInputName}
            />
            <input
              className="addForm__input"
              type="text"
              name="job"
              id="job"
              placeholder="Trabajo"
              onInput={handleInputJob}
            />
          </fieldset>

          <fieldset className="addForm__group--upload">
            <label htmlFor="image" className="button">
              Subir foto del proyecto
            </label>
            <input
              className="addForm__hidden"
              type="file"
              name="image"
              id="image"
            />
            <label htmlFor="photo" className="button">
              Subir foto de la autora
            </label>
            <input
              className="addForm__hidden"
              type="file"
              name="photo"
              id="photo"
            />
            <button className="button--large">Guardar proyecto</button>
          </fieldset>
        </form>
      </main>

      <Footer />

    </div>
  );
}

export default App;
