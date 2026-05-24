import CandidateForm from "../components/CandidateForm";
import Header from "../components/Header";

function AddCandidate() {
    return (
        <div>
            <Header/>
            <div className="min-h-screen bg-[#0f172a] p-6">
                <h1 className="text-4xl text-white font-bold text-center mb-6">
                    Add Candidate
                </h1>
                <div className="max-w-xl mx-auto">
                    <CandidateForm />
                </div>
            </div>
        </div>
    );
}

export default AddCandidate;