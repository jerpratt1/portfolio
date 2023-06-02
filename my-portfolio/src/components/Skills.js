
import React from "react";
import { skills } from "../Data";

export default function Skills() {
  return (
    <section id="skills">
      <div >
        <div >
          <h1 >
            Skills &amp; Technologies
          </h1>
          <p >
            Put what I have learned and my tech stack here
          </p>
        </div>
        <div id="skill_container">
          {skills.map((skill) => (
            <div key={skill} >
              <div>

                <span id="skill">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}