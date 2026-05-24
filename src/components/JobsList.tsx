import { useEffect, useState } from "react";

import api from "../api";

interface Job {
  id: string;
  title: string;
  requiredSkills: string[];
  minYearsExperience: number;
  location: string;
}

interface JobsListProps {
  onSelectJob: (jobId: string) => void;
}

function JobsList({onSelectJob}: JobsListProps) {

  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {

    api.get("/jobs")
      .then((response) => {
        setJobs(response.data);
      })

      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (

    <div className="space-y-5">

        {jobs.map((job) => (

            <div
                key={job.id}

                onClick={() =>
                    onSelectJob(job.id)
                }

                className="bg-[#0f172a] border border-gray-700 rounded-2xl p-5 cursor-pointer hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition"
            >

                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            {job.title}
                        </h3>
                        <p className="text-gray-400 mt-1">
                            {job.location}
                        </p>
                    </div>
                    <div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.minYearsExperience} Years
                    </div>
                </div>

                <div className="mt-5">

                  <p className="text-gray-400 text-sm mb-3">
                      Required Skills
                  </p>

                  <div className="flex flex-wrap gap-2">

                      {job.requiredSkills.map((skill) => (
                          <span
                              key={skill}
                              className="bg-[#1e293b] text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-500/20"
                          >
                            {skill}
                          </span>
                      ))}
                  </div>
                </div>
            </div>
        ))}
    </div>
  );
}

export default JobsList;