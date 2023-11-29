import React, { useEffect, useState } from 'react';

const ResultList = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Implement logic to fetch results from the backend
        // Update the state with the fetched results
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/results');

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error('Error fetching results:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div id="div1">
            <h2>Results List</h2>
            <table>
            <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>{results.length > 0 && results[0].subject1}</th>
                        <th>{results.length > 0 && results[0].subject2}</th>
                        <th>{results.length > 0 && results[0].subject3}</th>
                        <th>{results.length > 0 && results[0].subject4}</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {results.map((result) => (
                        <tr key={result.id}>
                            <td><strong>{result.studentName}</strong></td>
                            <td>
                                {result.subject1 && (
                                    <div>
                                        <div>MSE: {result.mseMarks1}</div>
                                        <div>ESE: {result.eseMarks1}</div>
                                    </div>
                                )}
                            </td>
                            <td>
                                {result.subject2 && (
                                    <div>
                                        <div>MSE: {result.mseMarks2}</div>
                                        <div>ESE: {result.eseMarks2}</div>
                                    </div>
                                )}
                            </td>
                            <td>
                                {result.subject3 && (
                                    <div>
                                        <div>MSE: {result.mseMarks3}</div>
                                        <div>ESE: {result.eseMarks3}</div>
                                    </div>
                                )}
                            </td>
                            <td>
                                {result.subject4 && (
                                    <div>
                                        <div>MSE: {result.mseMarks4}</div>
                                        <div>ESE: {result.eseMarks4}</div>
                                    </div>
                                )}
                            </td>
                            <td>{calculateTotalMarks(result)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Helper function to calculate total marks
const calculateTotalMarks = (result) => {
    const totalMarks1 = result.mseMarks1 * 0.3 + result.eseMarks1 * 0.7;
    const totalMarks2 = result.mseMarks2 * 0.3 + result.eseMarks2 * 0.7;
    const totalMarks3 = result.mseMarks3 * 0.3 + result.eseMarks3 * 0.7;
    const totalMarks4 = result.mseMarks4 * 0.3 + result.eseMarks4 * 0.7;

    // Calculate the average of the total marks for four subjects
    const averageTotalMarks = (totalMarks1 + totalMarks2 + totalMarks3 + totalMarks4) / 4.0;

    return averageTotalMarks.toFixed(2); // Display total marks with two decimal places
};

export default ResultList;
