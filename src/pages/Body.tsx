import { useState } from "react";
import api from "../api";

import JobsList from "../components/JobsList";
import MatchesList from "../components/MatchesList";
import Header from "../components/Header";

function Body() {

    const [matches, setMatches] = useState([]);
    const [minScore, setMinScore] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function fetchMatches(jobId: string) {
        try {
            setLoading(true);
            setError("");

        const response = await api.post(
            "/match",
            {
            jobId,
            minScore
            }
        );

        setMatches(response.data);

        } catch (error) {

        console.log(error);
        setError("Failed to fetch matches");

        } finally {
        setLoading(false);
        }
    }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#0f172a] p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="bg-[#1e293b] border border-blue-500/20 rounded-2xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-white text-2xl font-bold">
                  Match Threshold
                </h2>
                <p className="text-gray-400 text-sm">
                  Filter candidates by minimum score
                </p>
              </div>

              <div className="text-blue-400 text-3xl font-bold">
                {(minScore * 100).toFixed(0)}%
              </div>

            </div>

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={minScore}
              onChange={(event) =>
                setMinScore(Number(event.target.value))
              }
              className="w-full cursor-pointer"
            />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#1e293b] border border-blue-500/20 rounded-2xl p-6 shadow-lg">

              <h2 className="text-white text-2xl font-bold mb-5">
                Open Jobs
              </h2>

              <JobsList onSelectJob={fetchMatches} />

            </div>

            <div className="bg-[#1e293b] border border-blue-500/20 rounded-2xl p-6 shadow-lg min-h-[500px]">

              <h2 className="text-white text-2xl font-bold mb-5">
                Candidate Matches
              </h2>

              {loading && (

                <div className="bg-blue-500/10 text-blue-400 p-4 rounded-xl mb-4">
                  Loading matches...
                </div>

              )}

              {error && (

                <div className="bg-red-500/10 text-red-400 p-4 rounded-xl mb-4">
                  {error}
                </div>

              )}

              <MatchesList matches={matches} />

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Body;