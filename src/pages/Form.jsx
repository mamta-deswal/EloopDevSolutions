// import { useState } from 'react';

// function Form() {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         workEmail: '',
//         phone: '',
//         companyWebsite: '',
//         helpNeeded: '',
//         projectStart: '',
//         budget: '',
//         agreeToTerms: false
//     });

//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const helpOptions = [
//         'UX Audits',
//         'UI/UX Design',
//         'Branding',
//         'E-commerce Solutions',
//         'Shopify Development',
//         'WordPress Development',
//         'Other'
//     ];

//     const projectTimeline = [
//         'ASAP',
//         'Within 1 month',
//         'Within 2-3 months',
//         'Within 6 months',
//         'Not sure yet'
//     ];

//     const budgetRanges = [
//         '$5,000 - $10,000',
//         '$10,000 - $25,000',
//         '$25,000 - $50,000',
//         '$50,000 - $100,000',
//         '$100,000+'
//     ];

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));

//         // Clear error when user starts typing
//         if (errors[name]) {
//             setErrors(prev => ({
//                 ...prev,
//                 [name]: ''
//             }));
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};

//         if (!formData.fullName.trim()) {
//             newErrors.fullName = 'Full name is required';
//         }

//         if (!formData.workEmail.trim()) {
//             newErrors.workEmail = 'Work email is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
//             newErrors.workEmail = 'Please enter a valid email address';
//         }

//         if (!formData.phone.trim()) {
//             newErrors.phone = 'Phone number is required';
//         }

//         if (!formData.helpNeeded) {
//             newErrors.helpNeeded = 'Please select what you need help with';
//         }

//         if (!formData.projectStart) {
//             newErrors.projectStart = 'Please select when you want to start';
//         }

//         if (!formData.budget) {
//             newErrors.budget = 'Please select your estimated budget';
//         }

//         if (!formData.agreeToTerms) {
//             newErrors.agreeToTerms = 'You must agree to terms and conditions';
//         }

//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const newErrors = validateForm();
//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//             return;
//         }

//         setIsSubmitting(true);

//         // Simulate API call
//         try {
//             await new Promise(resolve => setTimeout(resolve, 2000));
//             alert('Form submitted successfully! We will contact you soon.');
//             setFormData({
//                 fullName: '',
//                 workEmail: '',
//                 phone: '',
//                 companyWebsite: '',
//                 helpNeeded: '',
//                 projectStart: '',
//                 budget: '',
//                 agreeToTerms: false
//             });
//         } catch (error) {
//             alert('There was an error submitting the form. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };


//     const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [currentMonth, setCurrentMonth] = useState(new Date(2025, 6)); // July 2025

//   const timeSlots = {
//     am: [
//       { time: '09:00 AM', available: true },
//       { time: '10:00 AM', available: true },
//       { time: '11:00 AM', available: true }
//     ],
//     pm: [
//       { time: '12:00 PM', available: true },
//       { time: '01:00 PM', available: true },
//       { time: '02:00 PM', available: true },
//       { time: '03:00 PM', available: true },
//       { time: '04:00 PM', available: true },
//       { time: '05:00 PM', available: true }
//     ]
//   };

//   const getDaysInMonth = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const daysInMonth = lastDay.getDate();
//     const startingDayOfWeek = firstDay.getDay();

//     const days = [];

//     // Add empty cells for days before the first day of the month
//     for (let i = 0; i < startingDayOfWeek; i++) {
//       days.push(null);
//     }

//     // Add days of the month
//     for (let day = 1; day <= daysInMonth; day++) {
//       days.push(day);
//     }

//     return days;
//   };

//   const formatDate = (date) => {
//     const options = {
//       weekday: 'short',
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     };
//     return date.toLocaleDateString('en-US', options);
//   };



//   const days = getDaysInMonth(currentMonth);
//   const today = new Date();


//   const handleWhatsAppClick = () => {
//     // Replace with your actual WhatsApp number (include country code without + sign)
//     const phoneNumber = "918750648334"; // Example: "919876543210" for India
//     const message = "Hello! I'm interested in your services."; // Optional pre-filled message

//     // WhatsApp URL format
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//     // Open WhatsApp in new tab/window
//     window.open(whatsappUrl, '_blank');
//   };

//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
//             <div className="max-w-6xl mx-auto">
//                 {/* Header */}
//           <div className="text-center mb-8 pt-25">
//             <h1 className="text-4xl font-bold text-teal-500 mb-2">
//               ELoop: Power Up!
//                     </h1>
//                     <p className="text-lg text-gray-600">
//                         Transform your vision into reality with our expertise
//                     </p>
//                 </div>

//                 <div className="grid lg:grid-cols-2 gap-8">
//                     {/* Form Section */}
//                     <div className="bg-white rounded-2xl shadow-xl p-8">
//                         <div className="space-y-6">
//                             {/* Full Name */}
//                             <div>
//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     placeholder="Full Name"
//                                     value={formData.fullName}
//                                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-teal-500'
//                                         }`}
//                                 />
//                   {errors.fullName && <p className="text-teal-500 text-sm mt-1">{errors.fullName}</p>}
//                             </div>

//                             {/* Work Email */}
//                             <div>
//                                 <input
//                                     type="email"
//                                     name="workEmail"
//                                     placeholder="Work Email *"
//                                     value={formData.workEmail}
//                                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.workEmail ? 'border-red-500' : 'border-gray-200 focus:border-teal-500'
//                                         }`}
//                                 />
//                   {errors.workEmail && <p className="text-teal-500 text-sm mt-1">{errors.workEmail}</p>}
//                             </div>

//                             {/* Phone */}
//                             <div>
//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     placeholder="Phone*"
//                                     value={formData.phone}
//                                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-teal-500'
//                                         }`}
//                                 />
//                   {errors.phone && <p className="text-teal-500 text-sm mt-1">{errors.phone}</p>}
//                             </div>

//                             {/* Company Website */}
//                             <div>
//                                 <input
//                                     type="url"
//                                     name="companyWebsite"
//                                     placeholder="Company Website"
//                                     value={formData.companyWebsite}
//                                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
//                                 />
//                             </div>

//                             {/* What do you need help with */}
//                             <div>
//                                 <select
//                                     name="helpNeeded"
//                                     value={formData.helpNeeded}
//                                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.helpNeeded ? 'border-red-500' : 'border-gray-200 focus:border-teal-500'
//                                         }`}
//                                 >
//                                     <option value="">What do you need help with?*</option>
//                                     {helpOptions.map((option) => (
//                                         <option key={option} value={option}>{option}</option>
//                                     ))}
//                                 </select>
//                   {errors.helpNeeded && <p className="text-teal-500 text-sm mt-1">{errors.helpNeeded}</p>}
//                             </div>

//                             {/* Project Timeline */}
//                             <div>
//                                 <select
//                                     name="projectStart"
//                                     value={formData.projectStart}
//                                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.projectStart ? 'border-red-500' : 'border-gray-200 focus:border-teal-500'
//                                         }`}
//                                 >
//                                     <option value="">How soon you want to Start Project</option>
//                                     {projectTimeline.map((option) => (
//                                         <option key={option} value={option}>{option}</option>
//                                     ))}
//                                 </select>
//                   {errors.projectStart && <p className="text-teal-500 text-sm mt-1">{errors.projectStart}</p>}
//                             </div>

//                             {/* Budget */}
//                             <div>
//                                 <select
//                                     name="budget"
//                                     value={formData.budget}
//                                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.budget ? 'border-red-500' : 'border-gray-200 focus:border-teal-500'
//                                         }`}
//                                 >
//                                     <option value="">What is your estimated budget for this project?</option>
//                                     {budgetRanges.map((range) => (
//                                         <option key={range} value={range}>{range}</option>
//                                     ))}
//                                 </select>
//                   {errors.budget && <p className="text-teal-500 text-sm mt-1">{errors.budget}</p>}
//                             </div>

//                             {/* Terms and Conditions */}
//                             <div className="flex items-start space-x-3">
//                                 <input
//                                     type="checkbox"
//                                     name="agreeToTerms"
//                                     checked={formData.agreeToTerms}
//                                     onChange={handleInputChange}
//                     className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
//                                 />
//                                 <div className="text-sm">
//                                     <label className="text-gray-700">
//                       I agree to <span className="text-teal-600 underline cursor-pointer">terms & conditions</span> provided by the company. By providing my phone number, I agree to receive text messages from the business.
//                                     </label>
//                     {errors.agreeToTerms && <p className="text-teal-500 text-sm mt-1">{errors.agreeToTerms}</p>}
//                                 </div>
//                             </div>

//                             {/* Submit Button */}
//                             <button
//                                 type="button"
//                   onClick={handleSubmit}
//                                 disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-teal-500 to-teal-500 text-white font-semibold py-4 px-6 rounded-full hover:from-teal-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                             >
//                                 {isSubmitting ? 'Booking...' : 'Book a Call'}
//                             </button>
//                         </div>
//                     </div>

//                     {/* Services Section */}
//                     <div className="bg-white rounded-2xl shadow-xl p-8">
//                         <div className="mb-8">
//                 <p className="text-teal-500 font-semibold mb-2">CONTACT US</p>
//                             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                                 Transform Your Vision into Reality with{' '}
//                   <span className="text-teal-500">Our Expertise</span>
//                             </h2>
//                         </div>

//                         {/* Service Tags */}
//                         <div className="flex flex-wrap gap-2 mb-8">
//                             {['UX Audits', 'UI/UX Design', 'Branding', 'E-commerce Solutions', 'Shopify Development', 'WordPress Development'].map((service) => (
//                                 <span
//                                     key={service}
//                                     className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
//                                 >
//                                     {service}
//                                 </span>
//                             ))}
//                         </div>

//                         {/* Service Details */}
//                         <div className="space-y-6">
//                             <div className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
//                                 <div>
//                                     <p className="font-semibold text-gray-900">UX Audits –</p>
//                                     <p className="text-gray-600">Identify usability challenges and enhance user experience with our comprehensive UX audits.</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
//                                 <div>
//                                     <p className="font-semibold text-gray-900">UI/UX Design –</p>
//                                     <p className="text-gray-600">Create intuitive and visually compelling interfaces that engage users and drive results.</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
//                                 <div>
//                                     <p className="font-semibold text-gray-900">Branding –</p>
//                                     <p className="text-gray-600">Build a memorable brand identity that resonates with your audience and leaves a lasting impression.</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
//                                 <div>
//                                     <p className="font-semibold text-gray-900">E-commerce Solutions –</p>
//                                     <p className="text-gray-600">Boost Sales with Seamless E-commerce Experiences</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
//                                 <div>
//                                     <p className="font-semibold text-gray-900">Shopify Development –</p>
//                                     <p className="text-gray-600">Launch, scale, and optimize your Shopify store with custom solutions designed for success.</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
//                                 <div>
//                                     <p className="font-semibold text-gray-900">WordPress Development –</p>
//                                     <p className="text-gray-600">Develop a robust, secure, and scalable WordPress site tailored to your specific needs.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* Companies Section */}
//             <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 mt-8">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Join <span className="text-teal-500">Over 5,000 Companies</span> from Small Business to Enterprise
//                     </h2>
//                     <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
//                         {/* Instacart */}
//                         <div className="flex items-center space-x-2">
//                             <div className="w-6 h-6 bg-green-500 rounded"></div>
//                             <span className="text-lg font-semibold text-gray-800">Instacart</span>
//                         </div>

//                         {/* JustTravel */}
//                         <div className="flex items-center space-x-2">
//                             <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
//                             <span className="text-lg font-semibold text-gray-800">JustTravel</span>
//                         </div>

//                         {/* Creationsoft */}
//                         <div className="flex items-center space-x-2">
//                             <div className="w-6 h-6 bg-blue-600 rounded"></div>
//                             <span className="text-lg font-semibold text-gray-800">creationsoft</span>
//                         </div>

//                         {/* Barbecue */}
//                         <div className="flex items-center space-x-2">
//                 <div className="w-6 h-6 bg-teal-500 rounded"></div>
//                             <span className="text-lg font-semibold text-gray-800">BARBECUE</span>
//                         </div>

//                         {/* Prograd */}
//                         <div className="flex items-center space-x-2">
//                             <div className="w-6 h-6 bg-green-600 rounded"></div>
//                             <span className="text-lg font-semibold text-gray-800">prograd</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="py-16 px-4 bg-gray-50">
//                 <div className="max-w-6xl mx-auto">
//                     {/* Header */}
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-2">
//                             Book a Call to Get
//                         </h2>
//                         <h3 className="text-4xl font-bold text-gray-900">
//                             Your Custom Strategy
//                         </h3>
//                     </div>

//                     {/* Services Grid */}
//                     <div className="grid md:grid-cols-3 gap-8 mb-12">
//                         {/* Site Audit */}
//                         <div className="bg-white rounded-2xl p-8 shadow-lg">
//                             <div className="flex justify-center mb-6">
//                                 <div className="relative">
//                                     <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
//                                         <div className="w-8 h-10 bg-gray-800 rounded-sm flex items-center justify-center">
//                                             <div className="w-4 h-6 bg-white rounded-sm"></div>
//                                         </div>
//                                     </div>
//                                     <div className="absolute -top-2 -right-2 w-16 h-12 bg-blue-500 rounded-lg transform rotate-12"></div>
//                                     <div className="absolute -bottom-2 -left-2 w-16 h-12 bg-green-400 rounded-lg transform -rotate-12"></div>
//                     <div className="absolute top-4 right-8 w-12 h-8 bg-teal-400 rounded-lg transform rotate-45"></div>
//                                 </div>
//                             </div>
//                             <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
//                                 Site Audit
//                             </h4>
//                             <p className="text-gray-600 text-center leading-relaxed">
//                                 A comprehensive review of your website's health to uncover issues and enhance performance.
//                             </p>
//                         </div>

//                         {/* Action Plan */}
//                         <div className="bg-white rounded-2xl p-8 shadow-lg">
//                             <div className="flex justify-center mb-6">
//                                 <div className="relative">
//                     <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center">
//                                         <div className="w-8 h-8 bg-white rounded-full"></div>
//                                     </div>
//                     <div className="absolute inset-0 border-4 border-teal-500 rounded-full"></div>
//                     <div className="absolute top-1 left-1 w-4 h-4 bg-teal-600 rounded-full"></div>
//                     <div className="absolute bottom-1 right-1 w-4 h-4 bg-teal-600 rounded-full"></div>
//                     <div className="absolute top-1 right-1 w-4 h-4 bg-teal-600 rounded-full"></div>
//                     <div className="absolute bottom-1 left-1 w-4 h-4 bg-teal-600 rounded-full"></div>
//                                     <div className="absolute -top-3 -right-3 w-12 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
//                                         <div className="w-6 h-4 bg-yellow-400 rounded-sm"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
//                                 Action Plan
//                             </h4>
//                             <p className="text-gray-600 text-center leading-relaxed">
//                                 Strategically crafted steps to address audit findings and drive measurable improvements.
//                             </p>
//                         </div>

//                         {/* Quote */}
//                         <div className="bg-white rounded-2xl p-8 shadow-lg">
//                             <div className="flex justify-center mb-6">
//                                 <div className="relative">
//                                     <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
//                                         <span className="text-white text-xs font-medium">Transparent</span>
//                                     </div>
//                                     <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
//                                     <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
//                                     <div className="absolute top-6 -right-4 bg-white rounded-lg p-2 shadow-md">
//                                         <span className="text-xs text-gray-600">Time estimate</span>
//                                     </div>
//                                     <div className="absolute -bottom-4 right-2 w-12 h-8 bg-purple-400 rounded-lg"></div>
//                                 </div>
//                             </div>
//                             <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
//                                 Quote
//                             </h4>
//                             <p className="text-gray-600 text-center leading-relaxed">
//                                 Get a detailed and transparent estimate tailored to your specific needs and long-term goals.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CTA Button */}
//                     <div className="text-center">
//               <button onClick={handleWhatsAppClick} className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center space-x-2 transition-colors">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
//                                 <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
//                                 <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
//                             </svg>
//                             <span>Book a call</span>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//       {/* Selected Summary */}
//       {selectedDate && selectedTime && (
//         <div className="mt-4 p-4 bg-blue-50 rounded-lg text-center">
//               <p className="text-sm text-teal-700">
//             Selected: {formatDate(selectedDate)} at {selectedTime}
//           </p>
//         </div>
//       )}
//       </div>
//     );
// }

// export default Form;

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    companyWebsite: "",
    helpNeeded: "",
    projectStart: "",
    budget: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Options for dropdowns
  const helpOptions = [
    "UX Audits",
    "UI/UX Design",
    "Branding",
    "E-commerce Solutions",
    "Shopify Development",
    "WordPress Development",
    "Other",
  ];

  const projectTimeline = [
    "ASAP",
    "Within 1 month",
    "Within 2-3 months",
    "Within 6 months",
    "Not sure yet",
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    window.scrollTo(0, 0);
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error on field edit
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.helpNeeded)
      newErrors.helpNeeded = "Please select what you need help with";
    if (!formData.projectStart)
      newErrors.projectStart = "Please select project timeline";
    if (!formData.budget) newErrors.budget = "Please select your budget";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to terms and conditions";
    return newErrors;
  };

  // Form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // IMPORTANT: Replace these with your actual EmailJS credentials
      const serviceId = "service_ky9qd6s"; // Your EmailJS service ID
      const templateId = "template_a0oa3xb"; // Your EmailJS template ID
      const publicKey = "A6ua1d5eca2sUUzN1"; // Your EmailJS public key

      /*
      CRITICAL: EmailJS Template Configuration Required!
      
      To fix "recipient address missing" error:
      1. Go to EmailJS Dashboard → Email Templates → Your Template
      2. In the "To" field, enter your email address: ankitgulia9012@gmail.com
      3. In the "Reply To" field, use: {{from_email}}
      4. In the template content, use these variable names:
         - {{from_name}} - Customer's name
         - {{from_email}} - Customer's email
         - {{phone}} - Customer's phone
         - {{company_website}} - Customer's website
         - {{help_needed}} - Service they need
         - {{project_start}} - Timeline
         - {{budget}} - Budget range
         - {{message}} - Complete message
      
      Example EmailJS template setup:
      
      To: ankitgulia9012@gmail.com (FIXED - your email)
      Reply To: {{from_email}}
      Subject: New Contact Form Submission from {{from_name}}
      
      Body:
      You have a new contact form submission:
      
      Name: {{from_name}}
      Email: {{from_email}}
      Phone: {{phone}}
      Company Website: {{company_website}}
      Service Needed: {{help_needed}}
      Project Timeline: {{project_start}}
      Budget: {{budget}}
      
      Full Details:
      {{message}}
      */

      // Dynamic import of emailjs since it's not available in this environment
      const emailjs = await import('@emailjs/browser');

      // Template parameters that match your EmailJS template variables
      const templateParams = {
        // These variable names must match what you set in your EmailJS template
        from_name: formData.fullName,
        from_email: formData.workEmail, // Customer's email (for reply-to)
        phone: formData.phone,
        company_website: formData.companyWebsite || "Not provided",
        help_needed: formData.helpNeeded,
        project_start: formData.projectStart,
        budget: formData.budget,
        // Formatted message with all details
        message: `
New Contact Form Submission Details:

Customer Information:
━━━━━━━━━━━━━━━━━━━━
Name: ${formData.fullName}
Email: ${formData.workEmail}
Phone: ${formData.phone}
Company Website: ${formData.companyWebsite || "Not provided"}

Project Details:
━━━━━━━━━━━━━━━━━━━━
Service Needed: ${formData.helpNeeded}
Timeline: ${formData.projectStart}
Budget: ${formData.budget}

Submitted on: ${new Date().toLocaleString()}
        `.trim(),
      };

      console.log("Sending email with params:", templateParams); // For debugging

      // Send the email via EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully:", response); // For debugging

      // Success message
      alert("Thank you! Your message has been sent successfully. We'll contact you soon.");

      // Reset form to initial state
      setFormData({
        fullName: "",
        workEmail: "",
        phone: "",
        companyWebsite: "",
        helpNeeded: "",
        projectStart: "",
        budget: "",
        agreeToTerms: false,
      });
      setErrors({});

    } catch (error) {
      console.error("EmailJS Error Details:", error);

      // More specific error handling
      let errorMessage = "There was an error submitting the form. Please try again.";

      if (error.text) {
        if (error.text.includes("recipient")) {
          errorMessage = "Email configuration error. Please contact support.";
        } else if (error.text.includes("template")) {
          errorMessage = "Email template error. Please contact support.";
        } else if (error.text.includes("service")) {
          errorMessage = "Email service error. Please contact support.";
        }
      }

      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp CTA with your number
  const handleWhatsAppClick = () => {
    const phoneNumber = "918750648334"; // Your WhatsApp number
    const message = "Hello! I'm interested in your services";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-6">
          <h1 className="text-4xl font-bold text-teal-500 mb-2">
            ELoop: Power Up!
          </h1>
          <p className="text-lg text-gray-600">
            Transform your vision into reality with our expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.fullName
                    ? "border-red-500"
                    : "border-gray-200 focus:border-teal-500"
                    }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <input
                  type="email"
                  name="workEmail"
                  placeholder="Work Email *"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.workEmail
                    ? "border-red-500"
                    : "border-gray-200 focus:border-teal-500"
                    }`}
                />
                {errors.workEmail && (
                  <p className="text-red-500 text-sm mt-1">{errors.workEmail}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.phone
                    ? "border-red-500"
                    : "border-gray-200 focus:border-teal-500"
                    }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Company Website */}
              <div>
                <input
                  type="url"
                  name="companyWebsite"
                  placeholder="Company Website (Optional)"
                  value={formData.companyWebsite}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                />
              </div>

              {/* What do you need help with */}
              <div>
                <select
                  name="helpNeeded"
                  value={formData.helpNeeded}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.helpNeeded
                    ? "border-red-500"
                    : "border-gray-200 focus:border-teal-500"
                    }`}
                >
                  <option value="">What do you need help with? *</option>
                  {helpOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.helpNeeded && (
                  <p className="text-red-500 text-sm mt-1">{errors.helpNeeded}</p>
                )}
              </div>

              {/* Project Timeline */}
              <div>
                <select
                  name="projectStart"
                  value={formData.projectStart}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.projectStart
                    ? "border-red-500"
                    : "border-gray-200 focus:border-teal-500"
                    }`}
                >
                  <option value="">How soon you want to start project? *</option>
                  {projectTimeline.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.projectStart && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectStart}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.budget
                    ? "border-red-500"
                    : "border-gray-200 focus:border-teal-500"
                    }`}
                >
                  <option value="">What is your estimated budget for this project? *</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <div className="text-sm">
                  <label className="text-gray-700">
                    I agree to{" "}
                    <span className="text-teal-600 underline cursor-pointer">
                      terms & conditions
                    </span>{" "}
                    provided by the company. By providing my phone number, I agree
                    to receive text messages from the business. *
                  </label>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-4 px-6 rounded-full hover:from-teal-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Book a Call"
                )}
              </button>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <p className="text-teal-500 font-semibold mb-2">CONTACT US</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transform Your Vision into Reality with{" "}
                <span className="text-teal-500">Our Expertise</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {helpOptions.slice(0, 6).map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
            <div className="space-y-6">
              {helpOptions.slice(0, 6).map((service) => (
                <div key={service} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{service} –</p>
                    <p className="text-gray-600">
                      {service === "UX Audits" &&
                        "Identify usability challenges and enhance user experience with our comprehensive UX audits."}
                      {service === "UI/UX Design" &&
                        "Create intuitive and visually compelling interfaces that engage users and drive results."}
                      {service === "Branding" &&
                        "Build a memorable brand identity that resonates with your audience and leaves a lasting impression."}
                      {service === "E-commerce Solutions" &&
                        "Boost Sales with Seamless E-commerce Experiences"}
                      {service === "Shopify Development" &&
                        "Launch, scale, and optimize your Shopify store with custom solutions designed for success."}
                      {service === "WordPress Development" &&
                        "Develop a robust, secure, and scalable WordPress site tailored to your specific needs."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Companies Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 mt-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Join{" "}
              <span className="text-teal-500">Over 5,000 Companies</span> from
              Small Business to Enterprise
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
                <span className="text-lg font-semibold text-gray-800">
                  Instacart
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <span className="text-lg font-semibold text-gray-800">
                  JustTravel
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span className="text-lg font-semibold text-gray-800">
                  creationsoft
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-teal-500 rounded"></div>
                <span className="text-lg font-semibold text-gray-800">
                  BARBECUE
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
                <span className="text-lg font-semibold text-gray-800">
                  prograd
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Book a Call to Get
              </h2>
              <h3 className="text-4xl font-bold text-gray-900">
                Your Custom Strategy
              </h3>
            </div>
            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Site Audit */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                      <div className="w-8 h-10 bg-gray-800 rounded-sm flex items-center justify-center">
                        <div className="w-4 h-6 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-16 h-12 bg-blue-500 rounded-lg transform rotate-12"></div>
                    <div className="absolute -bottom-2 -left-2 w-16 h-12 bg-green-400 rounded-lg transform -rotate-12"></div>
                    <div className="absolute top-4 right-8 w-12 h-8 bg-teal-400 rounded-lg transform rotate-45"></div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Site Audit
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  A comprehensive review of your website's health to uncover
                  issues and enhance performance.
                </p>
              </div>
              {/* Action Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute inset-0 border-4 border-teal-500 rounded-full"></div>
                    <div className="absolute top-1 left-1 w-4 h-4 bg-teal-600 rounded-full"></div>
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-teal-600 rounded-full"></div>
                    <div className="absolute top-1 right-1 w-4 h-4 bg-teal-600 rounded-full"></div>
                    <div className="absolute bottom-1 left-1 w-4 h-4 bg-teal-600 rounded-full"></div>
                    <div className="absolute -top-3 -right-3 w-12 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-4 bg-yellow-400 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Action Plan
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  Strategically crafted steps to address audit findings and drive
                  measurable improvements.
                </p>
              </div>
              {/* Quote */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-xs font-medium">
                        Transparent
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
                    <div className="absolute top-6 -right-4 bg-white rounded-lg p-2 shadow-md">
                      <span className="text-xs text-gray-600">Time estimate</span>
                    </div>
                    <div className="absolute -bottom-4 right-2 w-12 h-8 bg-purple-400 rounded-lg"></div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Quote
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  Get a detailed and transparent estimate tailored to your specific
                  needs and long-term goals.
                </p>
              </div>
            </div>
            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center space-x-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                </svg>
                <span>Book a call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
