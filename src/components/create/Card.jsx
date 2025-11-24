
function Card ({changeData}){
    return(
        <article className="card">
            <h2 className="card__projectTitle">
              <span className="card__projectTitle--text">
                Personal project card
              </span>
            </h2>

            <div className="card__author">
              <div className="card__authorPhoto"></div>
              <p className="card__job">{changeData.job === '' ? 'Full stack Developer' : changeData.job}</p>
              <h3 className="card__name">{changeData.author === '' ? 'Emmelie Bjôrklund' : changeData.author}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{changeData.name === '' ? 'Elegant Workspace' : changeData.name}</h3>
              <p className="card__slogan">{changeData.slogan === '' ? 'Diseños Exclusivos' : changeData.slogan}</p>
              <h3 className="card__descriptionTitle">Product description</h3>
              <p className="card__description">{changeData.desc === '' ? 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione' : changeData.desc}</p>

              <div className="card__technicalInfo">
                <p className="card__technologies">{changeData.technologies === '' ? 'React JS - HTML - CSS' : changeData.technologies}</p>

                <a
                  className="icon icon__www"
                  href={changeData.demo}
                  title="Haz click para ver el proyecto online"
                >
                  {changeData.demo}
                </a>
                <a
                  className="icon icon__github"
                  href={changeData.repo}
                  title="Haz click para ver el código del proyecto"
                >
                  {changeData.repo}
                </a>
              </div>
            </div>
          </article>
    );
}

export default Card