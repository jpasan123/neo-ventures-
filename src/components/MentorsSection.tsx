// import { FaLinkedin, FaTwitter } from 'react-icons/fa';

// const MentorsSection = () => {
//   const mentors = [
//     {
//       name: "Hemindra Jayaweera",
//       position: "Director at TRACE Expert City",
//       expertise: "Startup & Innovation Expert",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
//       linkedin: "#",
//       twitter: "#"
//     },
//     {
//       name: "Sarah Johnson",
//       position: "CEO at TechVentures",
//       expertise: "Business Strategy & Funding",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
//       linkedin: "#",
//       twitter: "#"
//     },
//     {
//       name: "Raj Patel",
//       position: "Angel Investor",
//       expertise: "Financial Planning & Investment",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
//       linkedin: "#",
//       twitter: "#"
//     },
//     {
//       name: "Lisa Wong",
//       position: "Marketing Director",
//       expertise: "Digital Marketing & Brand Strategy",
//       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
//       linkedin: "#",
//       twitter: "#"
//     }
//   ];

//   return (
//     <section id="mentors" className="py-20 bg-light">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="section-title">Meet Your Mentors & Experts</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//             Learn from industry leaders who have successfully built and scaled startups.
//             Our mentors will guide you through every step of your entrepreneurial journey.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {mentors.map((mentor, index) => (
//             <div key={index} className="card overflow-hidden group">
//               <div className="relative overflow-hidden rounded-lg mb-4">
//                 <img 
//                   src={mentor.image} 
//                   alt={mentor.name} 
//                   className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
//                   <div className="flex space-x-4">
//                     <a href={mentor.linkedin} className="text-white text-2xl hover:text-secondary transition-colors">
//                       <FaLinkedin />
//                     </a>
//                     <a href={mentor.twitter} className="text-white text-2xl hover:text-secondary transition-colors">
//                       <FaTwitter />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-primary">{mentor.name}</h3>
//               <p className="text-secondary font-medium">{mentor.position}</p>
//               <p className="text-gray-600 mt-2">{mentor.expertise}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MentorsSection;