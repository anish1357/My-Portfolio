import React from 'react';
import { motion } from 'framer-motion';


const RenderMotion = ({ category, items }) => (
    <div>
    <h2 className="text-2xl font-bold text-blue-500 mb-4 border-b-2 border-gray-300 pb-2">{category}</h2>
    <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
      {items.map((el, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}
          className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
        >
          <img alt="" src={el.link} className="w-12" />
          <h4 className="text-md ml-4">{el.name}</h4>
        </motion.div>
      ))}
    </motion.div>
  </div>
  );

  export default RenderMotion;