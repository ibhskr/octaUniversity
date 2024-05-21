import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className=" top-[500px] relative   bg-gray-900 text-white pt-8 ">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className=" text-sm">
              At Octa University, we are dedicated to empowering the next
              generation of tech leaders with cutting-edge education and
              practical skills in Computer Science, Artificial Intelligence,
              Machine Learning, Information Technology, Big Data, and Data
              Science.
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>123 University Street, Siliguri, India</p>
            <p>Email: octa@mail.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a href="#">Admissions</a>
              </li>
              <li>
                <a href="#">Academics</a>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex items-center space-x-4">
              <ul>
                <li className="flex my-1">
                  <FaFacebookSquare size="25px" />
                  Facebook
                </li>
                <li className="flex my-1">
                  <FaLinkedin size="25px" />
                  LinkedIn
                </li>
                <li className="flex my-1">
                  <FaTwitter size="25px" />
                  Twitter
                </li>
                <li className="flex my-1">
                  <FaYoutube size="25px" />
                  YouTube
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Octa University . All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
