import { useState } from "react";
import "./InteractionForm.css";
function InteractionForm({
    form,
    setForm
}) {

    

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    return (

        <div className="card">

            <h2>Log Interaction</h2>

            <div className="form-group">

            <label>Doctor Name</label>

                <input
                    name="doctor_name"
                    value={form.doctor_name}
                    onChange={handleChange}
                />

            </div>  

            <div className="form-group">

            <label>Interaction Type</label>

                    <select
                        name="interaction_type"
                        value={form.interaction_type}
                        onChange={handleChange}
                    >
                        <option>Meeting</option>
                        <option>Call</option>
                        <option>Email</option>
                    </select>

            </div>
            <div className="row">

                <div>

                    <label>Date</label>

                    <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                    />

                </div>

                <div>

                    <label>Time</label>

                    <input
                        type="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                    />

                </div>

            </div>

            <label>Topics</label>

            <textarea
                rows="2"
                name="topics"
                value={form.topics}
                onChange={handleChange}
            />

            <label>Summary</label>

            <textarea
                rows="4"
                name="summary"
                value={form.summary}
                onChange={handleChange}
            />

            <label>Sentiment</label>

            <select
                name="sentiment"
                value={form.sentiment}
                onChange={handleChange}
            >

                <option>Positive</option>

                <option>Neutral</option>

                <option>Negative</option>

            </select>

            <label>Outcome</label>

            <textarea
                rows="2"
                name="outcome"
                value={form.outcome}
                onChange={handleChange}
            />

            <label>Follow Up</label>

            <input
                name="follow_up"
                value={form.follow_up}
                onChange={handleChange}
            />

            <button className="save-btn">

                Save Interaction

            </button>

        </div>

    );

}

export default InteractionForm;