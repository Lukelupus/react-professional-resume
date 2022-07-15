import React from "react";

function Skills() {
    return (<>
        <div className="skill-page">
            <h1>Habilidades</h1>
            <div className="wrapper">
            <div className="skills-card">
                <div className="skills">
                    <ul className="skill-subtopic">
                        <h1 className="frontend">Front-End</h1>
                        <li className="skill-item">
                         <img className="skill-icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"    />
                             <span className="skill-text"> React</span>
                        </li>
                       
                        <li className="skill-item">
                         <img className="skill-icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap"/>
                              <span className="skill-text">Bootstrap</span>
                        </li>
                        <li className="skill-item">
                         <img className="skill-icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5"    />
                              <span className="skill-text">HTML5</span>
                        </li>
                        <li className="skill-item">
                         <img className="skill-icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"    />
                              <span className="skill-text">CSS3</span>
                        </li>
                        <li className="skill-item">
                         <img className="skill-icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"    />
                              <span className="skill-text">JavaScript</span>
                        </li>
                    </ul>
                    <ul className="skill-subtopic">
                    <h1 className="backend">Backend-End</h1>
                        <li className="skill-item">
                         <img className="skill-icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"    />
                              <span className="skill-text">Node</span>
                        </li>
                        <li className="skill-item">
                         <img className="skill-icon" src="images/express.png" alt="express"    />
                              <span className="skill-text">Express</span>
                        </li>
                    </ul>
                    <ul className="skill-subtopic">
                    <h1 className="tools">Ferramentas</h1>
                        <li className="skill-item">
                         <img className="skill-icon" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"    />
                              <span className="skill-text">Git</span>
                        </li>
                        <li className="skill-item">
                        <img className="skill-icon" src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="github"></img>
                              <span className="skill-text">GitHub</span>
                        </li>
                        <li className="skill-item">
                         <img className="skill-icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"    />
                              <span className="skill-text">MongoDB</span>
                        </li>
                        <li className="skill-item">
                         <img className="skill-icon" src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku"    />
                              <span className="skill-text">Heroku</span>
                        </li>
                        <li className="skill-item">
                         <img className="skill-icon" src="images/next.png" alt="nextjs"    />
                              <span className="skill-text">Next.js</span>
                        </li>
                    </ul>
                    <ul className="skill-subtopic">
                    <h1 className="in-dev">Desenvolvendo</h1>
                        <li className="skill-item">
                         <img className="skill-icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux"    /> 
                              <span className="skill-text">Redux</span>
                        </li>
                        <li className="skill-item">
                         <img className="skill-icon" src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript"/>
                              <span className="skill-text">TypeScript</span>
                        </li>
                        <li className="skill-item">
                         <img className="skill-icon" src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest"    />
                              <span className="skill-text">Jest</span>
                        </li>
                        <li className="skill-item">
                            <img className="skill-icon" src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="docker"></img>
                              <span className="skill-text">Docker</span>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
       
    </>)
}


export default Skills