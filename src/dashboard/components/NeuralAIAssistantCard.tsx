"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

// Message fade-in animation
const messageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Typing effect animation
const typingEffect = {
  hidden: { width: "0%" },
  visible: { width: "100%", transition: { duration: 1, ease: "easeOut" } },
};

// AI Chat Messages
const initialMessages = [
  {
    sender: "AI",
    text: "Your portfolio has outperformed the market by 12% this week. Would you like me to suggest optimization opportunities?",
  },
];

export default function NeuralAIAssistantCard() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "You", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "AI", text: "Analyzing... Please wait." },
      ]);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center w-full px-4">
      <motion.div
        className="relative w-full max-w-md p-6 rounded-xl shadow-lg border border-cyan-400/40 text-white bg-gray-900 backdrop-blur-xl overflow-hidden"
        initial="hidden"
        animate="visible"
      >
        {/* Background Glow Effect */}
        <motion.div
          initial={{ rotate: 0, opacity: 0.3 }}
          animate={{ rotate: 180, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 to-purple-500 blur-3xl opacity-20 rounded-xl"
        />

        {/* Header */}
        <div className="relative z-10 flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Neural AI Assistant</h2>
          <span className="text-green-400 flex items-center text-sm">● Active</span>
        </div>

        {/* Chat Box */}
        <motion.div className="relative bg-gray-800 p-3 rounded-lg shadow-md h-40 overflow-y-auto space-y-2">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              className={`p-2 rounded-md max-w-[80%] ${
                msg.sender === "AI"
                  ? "bg-gray-700 text-gray-300 self-start"
                  : "bg-cyan-500 text-black self-end"
              }`}
            >
              <strong className={msg.sender === "AI" ? "text-green-400" : ""}>
                {msg.sender}
              </strong>
              {msg.sender === "AI" && msg.text === "Analyzing... Please wait." ? (
                <motion.p
                  variants={typingEffect}
                  initial="hidden"
                  animate="visible"
                  className="overflow-hidden whitespace-nowrap inline-block"
                >
                  {msg.text}
                </motion.p>
              ) : (
                <p>{msg.text}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Input Box */}
        <div className="relative flex items-center mt-3">
          <input
            type="text"
            className="w-full p-2 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:border-cyan-400"
            placeholder="Ask Neural AI about your portfolio..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            className="absolute right-2 p-2 bg-cyan-500 rounded-full text-black shadow-lg hover:bg-cyan-600 transition-all"
          >
            <Send size={18} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
