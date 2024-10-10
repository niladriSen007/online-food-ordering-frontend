import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { memo } from "react"

const Footer = memo(function MemoizedFooter() {
  return (
    <motion.footer
      className="bg-gray-800 text-white p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="mb-4">
        <Link to="/" className="mx-4 text-white hover:underline">
          Home
        </Link>
        <Link to="/menu" className="mx-4 text-white hover:underline">
          Menu
        </Link>
        <Link to="/contact" className="mx-4 text-white hover:underline">
          Contact Us
        </Link>
        <Link to="/about" className="mx-4 text-white hover:underline">
          About Us
        </Link>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="https://facebook.com"
          className="mx-2 text-white hover:text-gray-400 transition duration-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://twitter.com"
          className="mx-2 text-white hover:text-gray-400 transition duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com"
          className="mx-2 text-white hover:text-gray-400 transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </motion.footer>
  )
})

export default Footer
