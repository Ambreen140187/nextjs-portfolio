import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiVercel } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";




const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        
              <h4>asifambreen187@gmail.com</h4>
            <span className="ml-3 text-xl">AI Developer/common fullter</span>
          
          
            
          
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://vercel.com/ambreen140187s-projects/hackathon-mailston-5"}
              className="text-gray-500"
            >
              <SiVercel 
              className="text-3xl hover:text- [#ff0000]" /> my vercel account
            </Link>
          </span>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://github.com/Ambreen140187/count-down-timer.git"}
              className="text-gray-500"
            >
              <FaGithubSquare 

              className="text-3xl hover:text- [#ff0000]" /> my github account
            </Link>
          </span>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;

      