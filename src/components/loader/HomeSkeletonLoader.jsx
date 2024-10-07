import { motion } from "framer-motion";

export const HomeSkeletonLoader = () => {
  return (
    <div className="bg-[#f32563] h-[85vh] py-16">
      <section className="z-50 banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-50 text-center">
          <motion.div
            className="bg-gray-300 h-12 lg:h-20 w-full mb-5"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      </section>
      <div className="flex justify-center mt-4">
        <motion.div
          className="bg-gray-300 h-64 w-64 mx-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="bg-gray-300 h-64 w-64 mx-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="bg-gray-300 h-64 w-64 mx-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <div className="flex justify-center mt-4">
        <motion.div
          className="bg-gray-300 h-32 w-full mx-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <div className="flex justify-center mt-4">
        <motion.div
          className="bg-gray-300 h-16 w-full mx-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
    </div>
  );
};

