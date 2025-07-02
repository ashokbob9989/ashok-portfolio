import './Education.css';

const Education=()=>{
    return (
        <div className='education' id='education'>
            <div className='X'>
                <div className='X-top'>
                    <h2>97%</h2>
                </div>
                <div className='X-bottom'>
                    <p>I completed my <span style={{color: "red"}}>schooling</span> at TSWREIS, Jangaon in 2020 with an overall score of 97%, studying subjects including Telugu, Hindi, English, Mathematics, Science (with Chemistry and Biology), and Social Studies.</p>
                </div>
            </div>
            <div className='XII'>
                <div className='XII-top'>
                    <h2>94.8%</h2>
                </div>
                <div className='XII-bottom'>
                    <p>I pursued my <span style={{color: "red"}}>intermediate</span> education at ABV Junior College, Jangaon and passed with 94.8%, focusing on subjects such as Telugu, English, Mathematics, Physics, and Chemistry.</p>
                </div>
            </div>
            <div className='BTech'>
                <div className='BTech-top'>
                    <h2>85.6%</h2>
                </div>
                <div className='BTech-bottom'>
                    <p>I completed my <span style={{color: "red"}}>B.Tech in Computer Science and Engineering</span> from the National Institute of Technology, Durgapur with a score of 85.6%, demonstrating strong performance in core subjects crucial to the field such as Data Structures, Algorithms, Operating Systems, Computer Networks, Database Management Systems, etc...</p>
                </div>
            </div>
        </div>
    );
}
export default Education;