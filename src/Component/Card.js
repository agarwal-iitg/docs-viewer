import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} >
      <div className="w-52 h-72 ml-3 bg-zinc-800/90 text-white rounded-[25px] p-2 relative overflow-hidden">
        <div className="text-xl mb-2">
          <FaFileAlt />
        </div>
        <p>{data.desc}</p>
        {data.open?

        <div>
            {data.tag.type ?
          <div className="footer w-full absolute bottom-0 bg-sky-600 h-10 left-0 flex justify-between items-center px-5">
            <h1>{data.filesize}</h1>
            <button className="bg-zinc-300 rounded-full text-xl flex justify-center text-black">
              <MdDownload />
            </button>
          </div>
          :
          <div className={`w-full h-10 ${data.tag.colour==="blue"? "bg-blue-600" : "bg-green-600"} absolute bottom-0 left-0 flex justify-center items-center`}>
            <button>Download Now!!</button>
          </div>
          }
        </div>
        :""
        }
      </div>
    </motion.div>
  );
};

export default Card;
