import { BiMenuAltLeft } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import ChatGPT2 from '../../../public/images/ChatGPT2.png';
import { Input } from "@material-tailwind/react";

function ChatPage() {
  return (
    <div className="fixed h-screen w-full mt-2 prose prose-invert">
      {/* Header */}
      <div className="flex justify-between items-center w-full px-3">
        <BiMenuAltLeft className="text-white text-2xl" />
        <h5 className="font-semibold text-violet-600">Get Plus +</h5>
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
      <div className="md:w-[1330px] w-[350px] mx-3 mt-5 flex gap-4">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Search"
          className="!h-12 pl-12 bg-zinc-800 rounded-full   placeholder:text-gray-500 !focus:border-gray-900 !focus:ring-gray-900/10" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} success={undefined}          />
        
      </div>
     
    </div>
    </div>
  );
}

export default ChatPage;