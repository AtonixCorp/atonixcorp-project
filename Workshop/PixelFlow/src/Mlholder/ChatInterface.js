import React, { useState } from 'react';
import './ChatInterface.css'; // Extract inline styles into a CSS file if needed.

const ChatInterface = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [userInput, setUserInput] = useState('');

    const addMessage = (message, isUser = false) => {
        setChatHistory((prevHistory) => [
            ...prevHistory,
            { content: message, isUser },
        ]);
    };

    const getAIResponse = async (userMessage) => {
        try {
            const response = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    chat_history: chatHistory,
                }),
            });
            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('Error:', error);
            return 'Sorry, I encountered an error.';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        const message = userInput.trim();
        addMessage(message, true);
        setUserInput('');

        const aiResponse = await getAIResponse(message);
        addMessage(aiResponse);
    };

    return (
        <div className="chat-interface">
            <header className="chat-header">
                <h1>DeepSeek AI</h1>
                <button onClick={() => setChatHistory([])}>Clear Chat</button>
            </header>
            <div className="chat-messages">
                {chatHistory.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`chat-message ${msg.isUser ? 'user' : 'ai'}`}
                    >
                        {msg.content}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chat-input">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask me anything..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatInterface;