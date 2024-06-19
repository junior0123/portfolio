import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                <div className="skill-image-container">
                  {skills.image ? (
                    typeof skills.image === "string" ? (
                      <img src={skills.image} alt={skills.skillName} className="skill-image" />
                    ) : (
                      <skills.image className="skill-icon" />
                    )
                  ) : (
                    <i className={skills.fontAwesomeClassname}></i>
                  )}
                </div>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
