import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, content, icon }) => (
  <Tilt className='lg:w-[22%] xxml:w-[44%] xml:w-[44%]  sm:w-[44%]  md:w-[44%] xs:w-3/4 '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 2,
          speed: 450,
        }}
        className='bg-tertiary  rounded-[20px]  min-h-[280px] flex  items-center flex-col'
      >
        <img
          src={icon}
          alt='ai codelabs'
          className='lg:w-[100%] xxml:w-[100%] xml:w-[100%]  sm:w-[100%]  md:w-[100%] xs:w-100%'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className={"px-8 py-6 text-center"}>{content}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>The Process</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Data analysis is hard. What can you do with the data and how can it be used to positively 
        impact your business? AI is revoltionizing the process of gathering and analyzing data. It is also 
        making connection we as humans cannot make because of the shear amount of data it is able to sift through.
        And with this data it can together action plans at the click of a mouse.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");



