// import React, { useState } from 'react';

// const CostEffectiveDesign = () => {
//   const [selectedService, setSelectedService] = useState('Website Design');
  
//   const services = [
//     'Website Design',
//     'App Design',
//     'Wireframes/Structure',
//     'User Flow',
//     '& More'
//   ];

//   const handleBookTrial = () => {
//     // Simulate booking a trial
//     alert('Redirecting to trial booking...');
//     // In a real application, you would redirect to a booking form or calendar
//     // window.location.href = '/book-trial';
//   };

//   const handleServiceClick = (service) => {
//     setSelectedService(service);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             Cost-Effective Choice
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
//             The Most Cost-Effective Design Choice
//           </h1>
//         </div>

//         {/* Comparison Section */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          
//           {/* Mad Brains Side */}
//           <div className="flex items-center gap-4">
//             <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-2xl">A</span>
//             </div>
//             <div>
//               <div className="text-lg font-semibold text-gray-900 mb-1">ELoopDev Solutions</div>
//               <div className="text-2xl font-bold text-green-600">$599/40 Hours</div>
//             </div>
//           </div>

//           {/* VS */}
//           <div className="text-gray-500 font-medium text-lg">VS</div>

//           {/* Other Agencies Side */}
//           <div className="flex items-center gap-4">
//             <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
//               <div className="grid grid-cols-2 gap-1">
//                 <div className="w-2 h-2 bg-white rounded-sm"></div>
//                 <div className="w-2 h-2 bg-white rounded-sm"></div>
//                 <div className="w-2 h-2 bg-white rounded-sm"></div>
//                 <div className="w-2 h-2 bg-white rounded-sm"></div>
//               </div>
//             </div>
//             <div>
//               <div className="text-lg font-semibold text-gray-900 mb-1">Other Agencies</div>
//               <div className="text-2xl font-bold text-red-600">$3,000-$10,000+</div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action Section */}
//         <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
//             <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
//             <div className="absolute top-1/2 left-1/3 w-12 h-12 border-2 border-white rounded-full"></div>
//           </div>

//           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            
//             {/* Left Side - Text and Services */}
//             <div className="flex-1 mb-8 md:mb-0">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Still Thinking?<br />
//                 Let's Try It.
//               </h2>
              
//               {/* Service Tags */}
//               <div className="flex flex-wrap gap-3 mb-6">
//                 {services.map((service, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleServiceClick(service)}
//                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                       selectedService === service
//                         ? 'bg-white text-orange-500 shadow-lg transform scale-105'
//                         : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
//                     }`}
//                   >
//                     {service}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Right Side - Price and CTA */}
//             <div className="flex-shrink-0 text-center md:text-right">
//               <div className="mb-6">
//                 <div className="text-4xl md:text-5xl font-bold">$599</div>
//                 <div className="text-lg opacity-90">/40 Hours</div>
//               </div>
              
//               <button
//                 onClick={handleBookTrial}
//                 className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//               >
//                 Book a Trial Today
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CostEffectiveDesign;





import React, { useState } from 'react';

const CostEffectiveDesign = () => {
  const [selectedService, setSelectedService] = useState('Website Design');
  
  const services = [
    'Website Design',
    'App Design',
    'Wireframes/Structure',
    'User Flow',
    '& More'
  ];

  const handleBookTrial = () => {
    // Simulate booking a trial
    alert('Redirecting to trial booking...');
    // In a real application, you would redirect to a booking form or calendar
    // window.location.href = '/book-trial';
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Cost-Effective Choice
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
            The Most Cost-Effective Design Choice
          </h1>
        </div>

        {/* Comparison Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
          
          {/* ELoopDev Solutions Side */}
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">E</span>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">ELoopDev Solutions</div>
              <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-green-600">$599/40 Hours</div>
            </div>
          </div>

          {/* VS */}
          <div className="text-gray-500 font-medium text-base sm:text-lg md:text-xl order-first sm:order-none mb-2 sm:mb-0">VS</div>

          {/* Other Agencies Side */}
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">Other Agencies</div>
              <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-red-600">$3,000-$10,000+</div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-white rounded-full"></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-8">
            
            {/* Left Side - Text and Services */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Still Thinking?<br />
                Let's Try It.
              </h2>
              
              {/* Service Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick(service)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      selectedService === service
                        ? 'bg-white text-orange-500 shadow-lg transform scale-105'
                        : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30 active:bg-opacity-40'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Price and CTA */}
            <div className="flex-shrink-0 text-center">
              <div className="mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">$599</div>
                <div className="text-base sm:text-lg md:text-xl opacity-90">/40 Hours</div>
              </div>
              
              <button
                onClick={handleBookTrial}
                className="bg-white text-orange-500 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg md:text-xl hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 w-full sm:w-auto min-w-[200px] sm:min-w-[240px]"
              >
                Book a Trial Today
              </button>
            </div>
          </div>
        </div>

        {/* Additional spacing for larger screens */}
        <div className="h-8 sm:h-12 md:h-16 lg:h-20"></div>
      </div>
    </div>
  );
};

export default CostEffectiveDesign;