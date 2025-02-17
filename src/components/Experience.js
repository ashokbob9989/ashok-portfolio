import React from 'react';

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h1>Experience</h1>
        <div className="experience-block">
          <h2>Work Experience</h2>
          <ul>
            <li>
              <div className="experience-detail">
                <i className="fa fa-briefcase"></i>
                <strong>Intern @BNY (21 May - 19 July 2024)</strong>
                <p>Actively involved in a real-world project aimed at consolidating two JAR files into a single jar without disrupting Business as Usual (BAU).</p>
                <p>Developed JUnit test cases to ensure robustness and reliability of the consolidated JAR file.</p>
                <p>Implemented installation kit using shell script to ease the deployment of the codebase.</p>
                <p>Collaborated effectively within a team environment, enhancing teamwork skills and cultivating a professional approach to work.</p>
                <div className="progress-stats">
                  Progress: 276+ file changes, 18825 lines of code changes, 15517 deletions, 3308 insertions, 122 commits (average of 5 commits).
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="experience-block">
          <h2>Positions of Responsibility</h2>
          <ul>
            <li>
              <div className="experience-detail">
                <i className="fa fa-tasks"></i>
                <strong>Sponsorship and Public Relations Head @RECursion</strong>
                <p>Strategic Partnerships: Develop and manage partnerships that align with organizational goals, enhancing visibility and market reach.</p>
                <p>Brand Representation: Serve as the public face, ensuring all communications reflect the organization's values and maintain a positive reputation.</p>
                <p>Event Coordination: Plan and promote events to maximize sponsorship impact, managing media relations and evaluating outcomes for strategic alignment.</p>
              </div>
            </li>
            <li>
              <div className="experience-detail">
                <i className="fa fa-users"></i>
                <strong>Senior Coordinator @ RECursion (Nov 2022 - May 2025)</strong>
                <p>Tutor and mentor for RECursion classes, teaching C++ and Data Structures & Algorithms (DSA) concepts weekly.</p>
                <p>Mentoring 12 first-year students, guiding them in programming and clearing doubts.</p>
                <p>Problem Setter and Tester at RECode 26.0, a series of monthly programming contests held by RECursion.</p>
              </div>
            </li>
            <li>
              <div className="experience-detail">
                <i className="fa fa-calendar"></i>
                <strong>Senior Coordinator @ Aarohan - The Tech Fest of NIT Durgapur (Mar 2023 - Present)</strong>
                <p>Coordinated REChase, the largest treasure hunt and flagship event of Aarohan.</p>
                <p>Worked as Junior Fest Coordinator for Aarohan, the 2nd largest fest of its kind in Eastern India.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};