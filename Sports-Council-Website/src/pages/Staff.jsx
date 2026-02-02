import img from "../images/image.png";

/* 🔹 Reusable Social/Contact Icon Component */
const ContactIcon = ({ icon, href }) => (
  <a 
    href={href} 
    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#00a896] hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

export default function Staff() {
    
    const faculty = [
        { key: "Staff01", title: "Dr. Aarav Patel", Subtitle: "Dean of Students", phone: "+91 98765 43210", email: "dean@college.edu", img: img },
        { key: "Staff02", title: "Dr. Sneha Gupta", Subtitle: "Head of Dept", phone: "+91 91234 56789", email: "hod@college.edu", img: img },
        { key: "Staff03", title: "Mr. Mike Ross", Subtitle: "Sports Officer", phone: "+91 99887 76655", email: "sports@college.edu", img: img },
        { key: "Staff04", title: "Ms. Sarah Lee", Subtitle: "Event Coordinator", phone: "+91 88776 65544", email: "events@college.edu", img: img },
    ];

    return (
        <div className="bg-white min-h-screen w-full pt-28 pb-20 px-4 font-poppins selection:bg-[#00a896] selection:text-white">
            <div className="max-w-[1400px] mx-auto">
                
                {/* 🔹 HEADER SECTION (Styled) */}
                <div className="text-center mb-20 relative">
                    {/* Decorative Background Blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00a896] opacity-10 blur-3xl rounded-full pointer-events-none"></div>
                    
                    <span className="text-[#00a896] text-xs font-black uppercase tracking-[0.3em] block mb-3 relative z-10">
                        Our Pillars
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-[#1a1c24] mb-6 relative z-10">
                        Faculty & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#017a6c]">Staff</span>
                    </h1>
                    <div className="w-16 h-1 bg-[#1a1c24] mx-auto rounded-full relative z-10"></div>
                </div>

                {/* 🔹 GRID SECTION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {faculty.map((member) => (
                        
                        /* 🔹 CARD DESIGN */
                        <div 
                            key={member.key}
                            className="group relative w-full bg-white rounded-[2rem] border border-gray-100 p-6 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,168,150,0.1)] hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative mb-6 w-32 h-32">
                                <div className="absolute inset-0 bg-[#00a896] rounded-full opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500"></div>
                                <img 
                                    src={member.img} 
                                    alt={member.title} 
                                    className="relative w-full h-full rounded-full object-cover border-[3px] border-white shadow-lg group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-1 right-1 bg-[#1a1c24] text-white p-1.5 rounded-full border-2 border-white shadow-sm z-10">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-xl font-bold text-[#1a1c24] mb-1 group-hover:text-[#00a896] transition-colors">
                                {member.title}
                            </h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                                {member.Subtitle}
                            </p>

                            {/* Divider */}
                            <div className="w-full h-px bg-gray-100 mb-6 group-hover:bg-[#00a896]/20 transition-colors"></div>

                            {/* Contact Details */}
                            <div className="space-y-3 w-full">
                                {/* Email */}
                                <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-3 text-sm text-gray-500 hover:text-[#1a1c24] transition-colors p-2 rounded-xl hover:bg-gray-50 group/item">
                                    <svg className="w-4 h-4 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <span className="font-medium truncate">{member.email}</span>
                                </a>
                                
                                {/* Phone */}
                                <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-3 text-sm text-gray-500 hover:text-[#1a1c24] transition-colors p-2 rounded-xl hover:bg-gray-50 group/item">
                                    <svg className="w-4 h-4 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span className="font-medium">{member.phone}</span>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}