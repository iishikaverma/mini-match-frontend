interface Match {
    candidate: {
        id: string;
        name: string;
        skills: string[];
        experience: number;
        location: string;
    };

    totalScore: number;

    breakdown: {
        skillScore: number;
        experienceScore: number;
        locationScore: number;
    };
}

interface MatchesListProps {
  matches: Match[];
}

function MatchesList({matches}: MatchesListProps) {
  return (

    <div className="space-y-5">

        {matches.length === 0 && (

            <div className="bg-[#0f172a] border border-gray-700 rounded-2xl p-8 text-center text-gray-400">

                Select a job to view matches

            </div>
        )}

        {matches.map((match) => (

            <div
                key={match.candidate.id}

                className="bg-[#0f172a] border border-gray-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition"
            >

                <div className="flex items-center justify-between mb-4">

                    <div>

                        <h3 className="text-2xl font-bold text-white">
                            {match.candidate.name}
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                            {match.candidate.location}
                        </p>

                    </div>

                    <div className="text-right">

                        <p className="text-blue-400 text-3xl font-bold">
                            {(match.totalScore * 100).toFixed(0)}%
                        </p>

                        <p className="text-gray-400 text-sm">
                            Match Score
                        </p>

                    </div>

                </div>

                <div className="w-full bg-gray-700 rounded-full h-3 mb-5">

                    <div
                        className="bg-blue-500 h-3 rounded-full"

                        style={{
                            width: `${match.totalScore * 100}%`
                        }}
                    />

                </div>

                <div className="grid grid-cols-3 gap-4">

                    <div className="bg-[#1e293b] rounded-xl p-3 text-center">

                        <p className="text-gray-400 text-sm">
                            Skills
                        </p>

                        <p className="text-white text-lg font-bold mt-1">
                            {(match.breakdown.skillScore * 100).toFixed(0)}%
                        </p>

                    </div>

                    <div className="bg-[#1e293b] rounded-xl p-3 text-center">

                        <p className="text-gray-400 text-sm">
                            Experience
                        </p>

                        <p className="text-white text-lg font-bold mt-1">
                            {(match.breakdown.experienceScore * 100).toFixed(0)}%
                        </p>

                    </div>

                    <div className="bg-[#1e293b] rounded-xl p-3 text-center">

                        <p className="text-gray-400 text-sm">
                            Location
                        </p>

                        <p className="text-white text-lg font-bold mt-1">
                            {(match.breakdown.locationScore * 100).toFixed(0)}%
                        </p>

                    </div>

                </div>

            </div>
        ))}
    </div>
);
}

export default MatchesList;