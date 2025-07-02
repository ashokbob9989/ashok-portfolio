import './Experience.css';

const Experience = () => {

    const experiences = [
        {
            company: "Zidio Development",
            role: "Java Full Stack Developer Intern - Remote",
            duration: "Apr 2025 - Present",
            highlights: [
                "Contributed to a full-stack job portal focusing on scalable backend and responsive UI.",
                "Implemented secure role-based authentication and access control for Admin, Recruiter, and Student user types.",
                "Built RESTful APIs and dashboards featuring real-time analytics, candidate filtering, and application tracking.",
                "Integrated resume management with validation and cloud storage support; ensured deployment readiness through testing and documentation."
            ]
        },
        {
            company: "Bank of New York - BNY",
            role: "SDE Intern - Pune, India",
            duration: "May 2024 - July 2024",
            highlights: [
                "Optimized deployment by 30% and improved reliability by 50% by merging JAR files and writing JUnit test cases.",
                "Led 90% of a large-scale refactor involving 276 files, 18,825 LOC changes, and 122 commits.",
                "Developed backend logic using Java (40%) and Spring Boot (30%) to boost performance.",
                "Used Swagger, Postman, and Insomnia for testing; handled deployments via WinSCP and Unix systems."
            ]
        }
    ];


    return (
        <div className='experience' id='experience'>
            {experiences.map((experience, index)=>(
                <div key={index} className='experience-card'>
                    <h4>{experience.company}</h4>
                    <p>{experience.highlights}</p>
                    <ul>
                        <li>{experience.role}</li>
                        <li>{experience.duration}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
export default Experience;