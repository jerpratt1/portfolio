import React from "react";
import { projects } from "../Data";

export default function Projects() {
    return (
        <section id="projects" >
          <div>
            <div >
              <h1>
                Projects
              </h1>
              <p>
                Put what I have worked on / working on here
              </p>
            </div>
            <div>
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.image}>
                  <div >
                    <img
                      alt="gallery"
                      src={project.image}
                    />
                    <div>
                      <h1 >
                        {project.title}
                      </h1>
                      <p >{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}

