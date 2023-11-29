import React, { useState } from 'react';

const ResultForm = () => {
    const [result, setResult] = useState({
        studentName: '',
        subject1: '',
        mseMarks1: 0,
        eseMarks1: 0,
        subject2: '',
        mseMarks2: 0,
        eseMarks2: 0,
        subject3: '',
        mseMarks3: 0,
        eseMarks3: 0,
        subject4: '',
        mseMarks4: 0,
        eseMarks4: 0,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the backend API
            const response = await fetch('http://localhost:8080/api/results', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(result),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Reset the form after successful submission
            setResult({
                studentName: '',
                subject1: '',
                mseMarks1: 0,
                eseMarks1: 0,
                subject2: '',
                mseMarks2: 0,
                eseMarks2: 0,
                subject3: '',
                mseMarks3: 0,
                eseMarks3: 0,
                subject4: '',
                mseMarks4: 0,
                eseMarks4: 0,
            });

            console.log('Form submitted successfully');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResult((prevResult) => ({
            ...prevResult,
            [name]: value,
        }));
    };

    return (
        <div id="div1">
        <form onSubmit={handleSubmit}>
            <label>
                Student Name:
                <input type="text" name="studentName" value={result.studentName} onChange={handleChange} />
            </label>
            <br />
            <label>
                Subject 1:
                <input type="text" name="subject1" value={result.subject1} onChange={handleChange} />
            </label>
            <br />
            <label>
                MSE Marks 1:
                <input type="number" name="mseMarks1" value={result.mseMarks1} onChange={handleChange} />
            </label>
            <br />
            <label>
                ESE Marks 1:
                <input type="number" name="eseMarks1" value={result.eseMarks1} onChange={handleChange} />
            </label>
            <br />

           
            <label>
                Subject 2:
                <input type="text" name="subject2" value={result.subject2} onChange={handleChange} />
            </label>
            <br />
            <label>
                MSE Marks 2:
                <input type="number" name="mseMarks2" value={result.mseMarks2} onChange={handleChange} />
            </label>
            <br />
            <label>
                ESE Marks 2:
                <input type="number" name="eseMarks2" value={result.eseMarks2} onChange={handleChange} />
            </label>
            <br />


            <label>
                Subject 3:
                <input type="text" name="subject3" value={result.subject3} onChange={handleChange} />
            </label>
            <br />
            <label>
                MSE Marks 3:
                <input type="number" name="mseMarks3" value={result.mseMarks3} onChange={handleChange} />
            </label>
            <br />
            <label>
                ESE Marks 3:
                <input type="number" name="eseMarks3" value={result.eseMarks3} onChange={handleChange} />
            </label>
            <br />


            <label>
                Subject 4:
                <input type="text" name="subject4" value={result.subject4} onChange={handleChange} />
            </label>
            <br />
            <label>
                MSE Marks 4:
                <input type="number" name="mseMarks4" value={result.mseMarks4} onChange={handleChange} />
            </label>
            <br />
            <label>
                ESE Marks 4:
                <input type="number" name="eseMarks4" value={result.eseMarks4} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default ResultForm;


