

function Form({handleInputCard, cardData}){
    return(
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
              value={cardData.name}
              onChange={handleInputCard}
            />
            <input
              className="addForm__input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              value={cardData.slogan}
              onChange={handleInputCard}
            />
            <div className="addForm__2col">
              <input
                className="addForm__input"
                type="url"
                name="repo"
                id="repo"
                placeholder="Repositorio"
                value={cardData.repo}
                onChange={handleInputCard}
              />
              <input
                className="addForm__input"
                type="url"
                name="demo"
                id="demo"
                placeholder="Demo"
                value={cardData.demo}
                onChange={handleInputCard}
              />
            </div>
            <input
              className="addForm__input"
              type="text"
              name="technologies"
              id="technologies"
              placeholder="Tecnologías"
              value={cardData.technologies}
              onChange={handleInputCard}
            />
            <textarea
              className="addForm__input"
              type="text"
              name="desc"
              id="desc"
              placeholder="Descripción"
              value={cardData.desc}
              onChange={handleInputCard}
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
              name="author"
              id="author"
              placeholder="Nombre"
              value={cardData.author}
              onChange={handleInputCard}
            />
            <input
              className="addForm__input"
              type="text"
              name="job"
              id="job"
              placeholder="Trabajo"
              value={cardData.job}
              onChange={handleInputCard}
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
    );
}

export default Form

/*handleInputName, handleInputSlogan, handleInputRepo, handleInputDemo, handleInputTech, handleInputDesc, handleInputAuthor, handleInputJob,*/