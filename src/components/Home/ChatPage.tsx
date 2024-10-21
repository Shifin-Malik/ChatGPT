import { BiMenuAltLeft } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import ChatGPT2 from '../../../public/images/ChatGPT2.png';

import { Link } from "react-router-dom";


function ChatPage() {
  return (
    <div className="fixed h-screen w-full mt-2 min-w-max prose prose-invert">
      {/* Header */}
      <div className="flex justify-between items-center w-full px-3">
        <BiMenuAltLeft className="text-white text-2xl" />
        <Link to=""> {/* Update the link to navigate to a new page */}
          <h5 className="font-semibold text-violet-600">Get Plus +</h5>
        </Link>
        <FiEdit className="text-zinc-700 text-xl" />
      </div>
      
      {/* Centered Image */}
      <div className="flex justify-center items-center h-[calc(100vh-120px)]">
        <img
          src={ChatGPT2}
          alt="ChatGPT Logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Input Box */}
     
     <div className="flex flex-col space-y-2  items-center ">
     <input
        type="text"
        id="inputField"
        className="w-80 md:w-full bg-black border border-gray-300 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Message Chatgpt"
      />
     </div>
    

     
    </div>
  );
}

export default ChatPage;
