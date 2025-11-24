import Card from "./Card";

function Preview ({name, job, author, slogan, desc, technologies, demo, repo}) {

    const changeData = {name, job, author, slogan, desc, technologies, demo, repo};

    return (
        <section className="preview">
          <div className="projectImage"></div>
          <Card changeData={changeData}/>
        </section>
    );
}

export default Preview