import { useState } from "react";
import "./ChatPanel.css";
import api from "../services/api";
function ChatPanel({setForm}) {

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hello! Describe your interaction with a healthcare professional."
        }
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSend = async () => {
        if (input.trim() === "") return;

        const userMessage = input;

        setMessages(prev => [

            ...prev,

            {
                sender: "user",
                text: userMessage
            }

        ]);

        setInput("");

        setLoading(true);

        try {

            const response = await api.post("/chat", {
                message: userMessage
            });
            
            console.log(response.data);
            setForm(response.data);
            setMessages(prev => [

                ...prev,

                {

                    sender: "ai",

                    text: response.data.tool_output.status

                }

            ]);

        }

        catch (error) {

            console.log(error);

            setMessages(prev => [

                ...prev,

                {

                    sender: "ai",

                    text: "Something went wrong."

                }

            ]);

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="chat-card">

            <h2>AI Assistant</h2>

            <div className="chat-body">

                {messages.map((msg, index) => (

                    <div
                        key={index}
                        className={
                            msg.sender === "user"
                                ? "user-message"
                                : "ai-message"
                        }
                    >

                        {msg.text}

                    </div>

                ))}

            </div>

            <div className="chat-footer">

                <textarea

                    rows="3"

                    placeholder="Describe interaction..."

                    value={input}

                    onChange={(e) => setInput(e.target.value)}

                />

                <button
                    onClick={handleSend}
                    disabled={loading}
                >

                    {loading ? "Sending..." : "Send"}

                </button>

            </div>

        </div>

    );

}

export default ChatPanel;