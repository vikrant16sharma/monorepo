import { useState } from "react";
import ChatPanel from "../components/ChatPanel";
import InteractionForm from "../components/InteractionForm";

function Dashboard() {

    const [form, setForm] = useState({

        doctor_name: "",

        interaction_type: "Meeting",

        date: "",

        time: "",

        topics: "",

        summary: "",

        sentiment: "Neutral",

        outcome: "",

        follow_up: ""

    });

    return (

        <div>

            <ChatPanel
                setForm={setForm}
            />

            <InteractionForm
                form={form}
                setForm={setForm}
            />

        </div>

    );

}

export default Dashboard;