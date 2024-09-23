import { useEffect, useState } from 'react';
import jobsData from '../jobs.json'; // Adjust the path as necessary
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = () => {
            // Use all jobs or limit to 3 if isHome is true
            const fetchedJobs = isHome ? jobsData.jobs.slice(0, 3) : jobsData.jobs;
            setJobs(fetchedJobs);
            setLoading(false);
        };
        fetchJobs();
    }, [isHome]); // Re-run when isHome changes

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>   
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobListings;
