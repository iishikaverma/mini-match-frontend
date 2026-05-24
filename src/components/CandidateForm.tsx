import { useState } from "react";

import api from "../api";

function CandidateForm() {

    const [name, setName] = useState("");
    const [skills, setSkills] = useState("");
    const [experience, setExperience] = useState(0);
    const [location, setLocation] = useState("");
    const [success, setSuccess] = useState("");

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {

        event.preventDefault();

        try {

            await api.post("/candidates", {

                name,

                skills: skills
                    .split(",")
                    .map((skill) => skill.trim()),

                experience,

                location
            });

            setSuccess("Candidate added successfully");
            setTimeout(() => {
                setSuccess("");
            }, 3000);

            setName("");
            setSkills("");
            setExperience(0);
            setLocation("");

        } catch (error) {

            console.log(error);
        }
    }

    return (
        <div>
        {success && (
            <div className="bg-green-500/10 text-green-400 border border-green-500/20 p-4 rounded-xl mb-4">
                {success}
            </div>
        )}
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-md space-y-5"
        >

            <h2 className="text-3xl font-bold text-gray-800">
                Add Candidate
            </h2>

            <input
                type="text"
                placeholder="Name"

                value={name}

                onChange={(event) =>
                    setName(event.target.value)
                }

                className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
                type="text"
                placeholder="Skills (React, Node.js)"

                value={skills}

                onChange={(event) =>
                    setSkills(event.target.value)
                }

                className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input type="number" placeholder="Experience"
                min="0" value={experience}
                onChange={(event) => {
                    const value =
                        Number(event.target.value);
                    if (value >= 0) {
                        setExperience(value);
                    }
                }}

                className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
                type="text"
                placeholder="Location"

                value={location}

                onChange={(event) =>
                    setLocation(event.target.value)
                }

                className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
                type="submit"

                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold transition hover:bg-blue-600 cursor-pointer"
            >

                Add Candidate

            </button>

        </form>
        </div>
    );
}

export default CandidateForm;