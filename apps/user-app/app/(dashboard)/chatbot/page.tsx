"use client"
import { Button } from '@repo/ui/button';
import { useState } from 'react';

const Chatbot = () => {
    const [userMessage, setUserMessage] = useState<string>('');
    const [messages, setMessages] = useState<Array<{ sender: string; text: string }>>([]);
    const url = process.env.BACKEND_URL;
    console.log(url);
    
    const sendMessage = async () => {
        if (!userMessage.trim()) return;

        setMessages((prevMessages) => [...prevMessages, { sender: 'You', text: userMessage }]);

        try {
            const response = await fetch(`https://chatbot-z7ot.onrender.com/chatbot/message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            setMessages((prevMessages) => [...prevMessages, { sender: 'Bot', text: data.reply }]);
        } catch (error) {
            setMessages((prevMessages) => [...prevMessages, { sender: 'Bot', text: 'Error: Unable to connect to the chatbot.' }]);
        }

        setUserMessage('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="text-4xl text-gray-950 pt-8 mb-8 font-bold letter">
                Chatbot
            </div>
            <textarea
                className="xeno-chat-box border border-xeno-border rounded-lg p-4 mb-4 w-96 h-64"
                readOnly
                value={
                    messages.length > 0 
                        ? messages.map((message) => `${message.sender}: ${message.text}`).join('\n')
                        : 'Feel free to ask anything about XenoPay'
                }
            />
            <input
                type="text"
                className="w-96 p-3 border border-xeno-border rounded-lg mb-4"
                placeholder="Type your message here..."
                value={userMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <Button onClick={sendMessage}>Send</Button>
        </div>
    );
};

export default Chatbot;
