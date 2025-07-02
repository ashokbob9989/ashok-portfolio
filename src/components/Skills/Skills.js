import './Skills.css';

const Skills = () => {

    const skills = [
        {
            category: "Languages",
            items: ["C", "C++", "Java", "Python", "MySQL", "HTML", "CSS", "JavaScript", "Express.Js", "Node.Js", "XML", "PHP"]
        },
        {
            category: "Developer Tools",
            items: ["VS Code", "Postman", "Swagger", "Insomnia", "IntelliJ IDEA Ultimate", "Power BI", "RESTful APIs", "WebSockets"]
        },
        {
            category: "Technologies & Frameworks",
            items: ["Spring", "Spring Boot", "Microservices", "Linux", "GitHub", "Git", "React.js", "Angular.js", "JSX"]
        },
        {
            category: "Coursework",
            items: ["Data Structures", "Algorithms", "Operating Systems", "OOPs", "DBMS", "Computer Networks"]
        }
    ];

    return (
        <div className='skills' id='skills'>
           {skills.map((skill, idx)=>(
            <div className='skill-category' key={idx}>
                <h3>
                    {skill.category}
                </h3>
                <ul>
                    {skill.items.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
           ))}
        </div>
    );
}
export default Skills;