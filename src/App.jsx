// import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";

// export default function App() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const messagesEndRef = useRef(null);

//   // Auto-scroll to latest message
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = {
//       from: "user",
//       text: input,
//       time: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     };

//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     try {
//       const res = await axios.post(
//         "https://chatbotbackend-658d.onrender.com/chat",
//         {
//           message: input,
//         }
//       );
//       const botMsg = {
//         from: "bot",
//         text: res.data.reply,
//         time: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages((prev) => [...prev, botMsg]);
//     } catch (err) {
//       const botMsg = {
//         from: "bot",
//         text: "Server error! Please try again.",
//         time: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages((prev) => [...prev, botMsg]);
//       console.error(err);
//     }
//   };

//   return (
//     /* FULL SCREEN BACKGROUND */
//     <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
//       {/* CHAT BOX – CENTER + FULL HEIGHT */}
//       <div className="w-full max-w-md h-full bg-white shadow-2xl flex flex-col overflow-hidden rounded-none">
//         {/* HEADER */}
//         <div className="bg-green-500 text-white p-4 flex items-center justify-between flex-shrink-0">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
//             <div>
//               <div className="font-bold">ChatBot</div>
//               <div className="text-sm text-gray-100">online</div>
//             </div>
//           </div>
//           <div className="text-xl cursor-pointer">⋮</div>
//         </div>

//         {/* MESSAGES */}
//         <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-100">
//           {messages.map((msg, idx) => (
//             <div
//               key={idx}
//               className={`flex ${
//                 msg.from === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`max-w-[70%] px-4 py-2 rounded-xl text-sm break-words shadow
//                 ${
//                   msg.from === "user"
//                     ? "bg-green-500 text-white rounded-br-none"
//                     : "bg-white text-gray-800 rounded-bl-none"
//                 }`}
//               >
//                 <span>{msg.text}</span>
//                 <div className="text-[10px] text-gray-300 text-right mt-1">
//                   {msg.time}
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* INPUT */}
//         <div className="p-4 flex gap-2 border-t border-gray-300 flex-shrink-0 bg-white">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             placeholder="Type a message"
//             className="flex-1 px-4 py-2 rounded-full border outline-none focus:ring-2 focus:ring-green-400"
//           />
//           <button
//             onClick={sendMessage}
//             className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import logo from "./assets/a.v.png";
export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = {
      from: "user",
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await axios.post(
        // "https://chatbotbackend-658d.onrender.com/chat",
        "http://localhost:5000/chat",
        {
          message: input,
        }
      );

      const botMsg = {
        from: "bot",
        text: res.data.reply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const botMsg = {
        from: "bot",
        text: "Server error! Please try again.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMsg]);
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
      <div className="w-full max-w-md h-full bg-white shadow-2xl flex flex-col overflow-hidden rounded-none">
        {/* HEADER */}
        <div className="bg-[#41C5C2] text-white p-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full">
              <img
                src={logo}
                alt="Chatbot Logo"
                className="w-10 h-10 rounded-full object-cover bg-white p-1"
              />
            </div>
            <div>
              <div className="font-bold">AV Academy Bot</div>
              <div className="text-sm text-gray-100">online</div>
            </div>
          </div>
          <div className="text-xl cursor-pointer">⋮</div>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-100">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-xl text-sm break-words shadow
                ${
                  msg.from === "user"
                    ? "bg-[#41C5C2] text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none"
                }`}
              >
                <span>{msg.text}</span>
                <div className="text-[10px] text-gray-300 text-right mt-1">
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT */}
        <div className="p-4 flex gap-2 border-t border-gray-300 flex-shrink-0 bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message"
            className="flex-1 px-4 py-2 rounded-full border outline-none focus:ring-2 focus:ring-[#41C5C2]"
          />
          <button
            onClick={sendMessage}
            className="bg-[#41C5C2] text-white px-4 py-2 rounded-full hover:bg-[#3ab5b1] transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
