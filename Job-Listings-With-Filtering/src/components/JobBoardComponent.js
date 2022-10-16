import React from "react";

// {
//     "id": 1,
//     "company": "Photosnap",
//     "logo": "/images/photosnap.svg",
//     "new": true,
//     "featured": true,
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []
// }

function JobBoardComponent({ job }) {
    return (
        <div className="job_board_component flex">
            <div>
                <img src={`${job.logo}`} alt={job.company} />
            </div>
            <h1 className="text-2xl">{job.company}</h1>
        </div>
    );
}

export default JobBoardComponent;
