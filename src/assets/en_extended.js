import { en } from 'vuetify/lib/locale';

export default {
  ...en,

  name: "Lars Ulbricht",
  profession: "Consultant",
  aboutme:{
    title: "About Me",
    content: 'My ambition is to use my combined financial and IT knowledge to accomplish my goal of utilizing IT technology to improve productivity and to create value for customers and the society. I believe that boring and repetitive tasks should be performed by machines such that human beings can concentrate on the things they are best at i.e. creativity and complex problem solving.'
  },
  education: {
    title: "Education",
    education_master: {
      name: "Technical University of Munich",
      description: "Management and Technology (M.Sc.) at the TU Munich with major in Finance and Informatics.",
      grade: "GPA: 3.9" ,
      degree: "Master of Science",
    },
    education_kyoto: {
      name: "Kyoto University",
      description: "During my master studies I spent one semester abroad at the Kyoto University.",
      class: "MBA" ,
      degree:"Exchange Semester",
    },
    education_bachelor: {
      name: "Technical University of Munich",
      description: "Management and Technology (B.Sc.) at the TU Munich with major in Finance and Informatics.",
      grade: "GPA: 3.3" ,
      degree:"Bachelor of Science",
    },
    education_osaka: {
      name: "Osaka University",
      description: "During my bachelor studies I spent one semester abroad at the Osaka University.",
      circle: "Running Club" ,
      class: "Faculty of Engineering Science",
      degree:"Exchange Semester",
    },
    education_school: {
      name: "BBZ Norderstedt",
      description: "BBZ Norderstedt (Highschool)",
      grade: "GPA: 3.0" ,
      degree:"Higher Education Entrance Qualification",
    },
  }, 
  professional: {  
    title: "Working Experience",
    professional_pwc: {
      name: "PwC Germany",
      description: "Two-month-long internship at the audit industrial services area at PwC. I collected valuable practical experience in different areas of auditing.",
      title: "Internship",
  },
  professional_fujitsu: {
    name: "Fujitsu Technology Solutions GmbH",
    description: "In this positon I mainly worked with new technolgies like blockchain and persistent memory.",
    title: "Working Student",
  },
  professional_deloitte: {
    name: "Deloitte",
    description: "I am part of the team Digital, AI Controls & Algorithms (DAICA) and work with innovative technologies like RPA, DLT/Blockchain and AI.",
    title: "Fulltime",
  },
},
  certifications: {
    title: "Certifications",
    jlptn1: {
      name: "JLPT N1",

    },
    aws1: {
      name: "Certified Cloud Practitioner",

    },
    english_c2: {
      name: "CEFR English C2",

    },    
  },
  controls: {
    close: "Close",
     
  },
  links:{
    title:"Links",
  },
  hobbys:{
    title:"Interests",
    japan:{
      name:"Japan",
      content:"I started learning Japanese in 2012 and have since then obtained the highest Japanese language certificate, the JLPT N1. I have been to Japan several times since 2012. Among them also for two semesters abroad. I spent those two semesters at the Osaka University and at the Kyoto University.",
      tags: ["JLPT N1", "Culture", "Language"]
    },
    program:{
      name:"Programming",
      content:"I only really started programming during my studies. But I enjoyed it so much that I also programmed a lot in my spare time and would now call it a great hobby of mine. In the course of time I was able to acquire some knowledge in various tools and programming languages.",
      tags: ["DLT", "Frontend", "Backend", "Coding"]
    },
    invest: {
      name:"Investing",
      content:"Also imitated by my studies I have great interest and fun in investing. I count myself as a value investor and am particularly interested in long-term investments in profitable companies. When I don't have time to analyze stocks, I also like to invest in ETFs and trust in high diversification and a rising overall market. Due to my development experience in the blockchain space, I have recently started trying myself in crypto investments.",
      tags: ["ETFs", "Value Investing", "Long-term investments", "New: Crypto"]
    }
  },
  contact: {
    title: "Contact"
  },
  skills : {
    title:"Skills",
    frontend: {
      name: "Frontend Development",
       
    },
    backend: {
      name: "Backend Development",
       
    },
    blockchain: {
      name: "Blockchain",
       
    },
    data_science: {
      name: "Data Science",
       
    },
    others: {
      name: "Other",
    }
  }
}