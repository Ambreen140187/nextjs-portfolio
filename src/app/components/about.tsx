import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={require("../../../public/image/cv.png")}
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
            You are a skilled frontend developer with expertise in creating dynamic and visually appealing web applications. You excel in using frameworks like Next.js to deliver responsive and user-friendly designs.







            </p>
            <p className="mb-5 leading-relaxed">
            AI-powered frontend developers leverage machine learning tools and automation to enhance user experiences, streamline workflows, and create adaptive, responsive interfaces. They use AI to analyze user data, optimize designs, and predict user interactions, making web applications more intuitive and efficient.
            </p>
            <div className="flex justify-center">
              <a href={"/image/cv.png"}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

      