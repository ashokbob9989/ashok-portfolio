import './Projects.css';

const Projects = () => {

    const projects = [
        {
            title: "CatsForCuteness",
            techStack: ["Angular", "Spring Boot", "Java", "Oracle", "Stripe", "JWT", "Bootstrap"],
            highlights: [
                "Built a full-featured e-commerce platform for cat adoption with category filters, ratings, and personalized recommendations.",
                "Implemented secure user authentication with JWT, protected routes, and role-based UI rendering across modules.",
                "Created and consumed RESTful APIs for order tracking, cart management, and wishlist synchronization.",
                "Integrated Stripe payment gateway for seamless checkout, invoice generation, and transactional safety.",
                "Optimized application performance and responsiveness with lazy loading, modular routing, and component-level state control."
            ],
            gitHub: "https://github.com/ashokbob9989/CatsForCuteness-Frontend"
        },
        {
            title: "Disaster Response Coordination Platform",
            techStack: ["React.js", "Express.js", "Node.js", "Supabase"],
            highlights: [
                "Built and deployed a full-stack disaster response system with real-time geospatial coordination.",
                "Created secure REST APIs with role-based access, audit trails, structured logging, and caching using Postgres and JSONB.",
                "Integrated Gemini AI for automatic location extraction and image authenticity verification in disaster reports.",
                "Implemented real-time updates using Socket.IO and performed radius-based lookups using PostGIS geospatial queries.",
                "Added scraping of official updates, simulated social media feeds, keyword filtering, and a lightweight frontend for testing."
            ],
            gitHub: "https://github.com/sauashwork/DRCP",
            website: "https://drcp-one.vercel.app/"
        },
        {
            title: "Library Management System",
            techStack: ["Java", "Spring Boot", "Swagger", "HTML", "CSS", "JS", "Oracle"],
            highlights: [
                "Built a full-stack library app with secure login and role-based access control.",
                "Contributed 60% backend, 25% frontend, and 15% testing in a team-based development setup.",
                "Developed RESTful APIs with Spring Boot and improved login/signup speed by 40%.",
                "Enhanced system performance by 25% through backend optimization.",
                "Integrated Swagger for API testing, cutting QA time by 50%."
            ],
            gitHub: "https://github.com/ashokbob9989/Library_Management_System_Project"
        },
        {
            title: "Job Portal",
            techStack: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS", "JavaScript", "React.js", "REST APIs"],
            highlights: [
                "Contributed to a full-stack job portal focusing on scalable backend and responsive UI.",
                "Implemented secure role-based authentication and access control for Admin, Recruiter, and Student user types.",
                "Built RESTful APIs and dashboards featuring real-time analytics, candidate filtering, and application tracking.",
                "Integrated resume parsing (partially complete – please finish this entry if needed)."
            ],
            gitHub: "https://github.com/sauashwork/zidio_internship/tree/main/zidio-job-portal"
        }
    ];

    const handleProjectCardClick=(e, project)=>{
        e.preventDefault();
        console.log(project);
        window.open( project.website ?? project.gitHub, "_blank");
    };

    return (
        <div className='projects' id='projects'>
            {projects.map((project, index) => (
                <div key={index} className='project-card' onClick={(e)=>handleProjectCardClick(e, project)}>
                    <h3>Project {index}</h3>
                    <div className='project-title'>
                        <h2>{project.title}</h2>
                    </div>
                    <div className='project-details'>
                        <div className='project-highligts'>
                            {project.highlights}
                        </div>
                        <div className='project-tech-stacks'>
                            <ul>
                                {project.techStack.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Projects;