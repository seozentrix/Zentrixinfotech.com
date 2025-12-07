'use client';

import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Mrs. Charu Shukla",
    company: "Vasterior Pvt. Ltd.",
    content: "The website looks modern and professional — exactly what we needed to showcase our interiors beautifully.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 2,
    name: "Mrs. Garima Vishnoi",
    company: "Alluring Glimpses",
    content: "The design perfectly reflects our style, and the site is easy to navigate for our clients.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 3,
    name: "Mr. Rounak Shukla",
    company: "PS Decor",
    content: "The website showcases our wedding projects beautifully and helped us get more client inquiries.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 4,
    name: "Mr. Manoj Sikka",
    company: "Morning Bites",
    content: "Our bakery website is inviting and easy to use, making it simple for customers to order online.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 5,
    name: "Mr. Akash Mittal",
    company: "Herbsfox",
    content: "The site is clean, well-organized, and perfectly suits our natural products business.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },

  {
    id: 6,
    name: "Mr. Rishabh Singhal",
    company: "Kairvi Fort Resort",
    content: "The site turned out elegant and functional — Plus, the digital campaigns brought in real results with a noticeable boost in bookings during peak seasons.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 7,
    name: "Dr. C.P. Singh",
    company: "Jigyasa Hospital",
    content: "The website is clean, professional, and makes appointment booking super easy. Thanks to the marketing efforts, we've seen a consistent rise in patient inquiries through Google and social media. Great collaboration overall!",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 8,
    name: "Mrs. Mohini Jain",
    company: "Southern Palate",
    content: "Our spice e-commerce site looks great and is easy for customers to browse and order.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 9,
    name: "Mr. Rakesh Kumar Mishra",
    company: "Kdedu.in",
    content: "The college website is informative and easy for students and faculty to access essential resources.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 10,
    name: "Mr. Vinay Tiwari",
    company: "Intirio World",
    content: "Absolutely love how the website represents our brand — stylish and user-friendly! The digital marketing push also helped us generate qualified leads consistently. Super happy with the experience!",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 11,
    name: "Mr. Sumit Gupta",
    company: "Jai Balaji Bath and Tiles",
    content: "The digital marketing campaigns helped us reach new builders and dealers we couldn't earlier. Our local visibility has drastically improved, and we're seeing a steady flow of inquiries through social media and search. Very satisfied!",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 12,
    name: "Mr. Manish Sharma",
    company: "Park Square",
    content: "The digital marketing team really helped us attract property buyers. Our campaigns generated quality leads, and footfall at the site has gone up. Great results and great coordination!",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 13,
    name: "Mr. Anuj Kumar ",
    company: "Ahlawat Pharmacy",
    content: "Our online presence was almost zero before. Now, people discover us through search and social ads. Orders and footfall have grown steadily since the campaigns started.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 14,
    name: "Mr. Sanjeev Vishnoi",
    company: "Hawk Eye Shooting Institute",
    content: "The grand opening was a success thanks to their targeted ads. We reached the right audience at the right time. Now, we're consistently getting student inquiries through Instagram and Google.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 15,
    name: "Mr. Arush Gogia",
    company: "The Buyzaar Mart",
    content: "Their marketing strategy helped us launch our retail franchise network successfully. The targeted campaigns brought quality franchise inquiries and increased brand visibility across Delhi NCR. Our store openings now generate strong local engagement.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 16,
    name: "Mr. Faiz",
    company: "Select Hospital, Moradabad",
    content: "Their team helped us present our 24/7 emergency and multispeciality services clearly to patients. The branding and communication now reflect our world-class facilities, expert doctors, and seamless care experience.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 17,
    name: "Dr. Girjesh Kain",
    company: "Oracle Eye Hospital",
    content:
      "Their branding and digital presence now match the standard of care we provide in cataract, LASIK, retina, glaucoma, and pediatric eye services. More patients are discovering our super speciality eye hospital and booking appointments with confidence.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
  {
    id: 18,
    name: "Mr. Mohd Nisar",
    company: "Select Handicrafts",
    content:
      "Their marketing showcased our authentic brass handicrafts and metal finishing expertise to global buyers. From Moradabad&apos;s traditional craftsmanship to modern plating techniques, we now reach international markets with premium quality collections.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  }



];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white backdrop-blur-sm border-2 border-slate-200 rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-4 lg:mb-6 min-h-[160px] lg:min-h-[200px] flex flex-col hover:border-cyan-400 hover:shadow-lg transition-all duration-300">
    <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover ring-2 ring-slate-300 shrink-0"
      />
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-slate-900 text-sm lg:text-base truncate">
          {testimonial.name}
        </h3>
        <p className="text-slate-600 text-xs lg:text-sm truncate">{testimonial.company}</p>
      </div>
    </div>
    <p className="text-slate-700 text-sm lg:text-base leading-relaxed flex-1">{testimonial.content}</p>
  </div>
);

const ScrollingColumn = ({ testimonials, direction, speed }) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="h-full overflow-hidden">
      <div
        className={`flex flex-col ${direction === 'up' ? 'testimonial-scroll-up' : 'testimonial-scroll-down'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const MovingTestimonials = () => {
  const column1 = testimonials.slice(0, 5);
  const column2 = testimonials.slice(5, 10);
  const column3 = testimonials.slice(10, 15);

  return (
    <>
      <div className="bg-white relative overflow-hidden py-12 lg:py-0">


        <div className="relative z-10 text-center py-8 lg:py-16 px-4 lg:px-6">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-slate-900 mb-4 lg:mb-6 tracking-tight px-4">
            Loved by <span className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-slate-900 mb-4 lg:mb-6 tracking-tight ">Clients</span>
          </h1>
          <p className="text-slate-600 text-base lg:text-lg max-w-2xl mx-auto mb-0 px-4">
            See what industry leaders are saying about our AI-powered development tools
          </p>
        </div>

        <div className="relative z-10 px-4 lg:px-6 max-w-7xl mx-auto mt-0">
          <div className="block md:hidden h-[500px]">
            <ScrollingColumn testimonials={testimonials.slice(0, 6)} direction="up" speed={25} />
          </div>

          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <ScrollingColumn testimonials={column1} direction="up" speed={20} />
              <ScrollingColumn testimonials={column2} direction="down" speed={25} />
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8 h-[600px]">
              <ScrollingColumn testimonials={column1} direction="up" speed={20} />
              <ScrollingColumn testimonials={column2} direction="down" speed={25} />
              <ScrollingColumn testimonials={column3} direction="up" speed={30} />
            </div>
          </div>
        </div>

        <div className="md:hidden absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none z-20"></div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        
        .testimonial-scroll-up {
          animation: scroll-up linear infinite;
        }
        
        .testimonial-scroll-down {
          animation: scroll-down linear infinite;
        }
        
        @media (hover: hover) {
          .testimonial-scroll-up:hover,
          .testimonial-scroll-down:hover {
            animation-play-state: paused;
          }
        }
      `}} />
    </>
  );
};

export default MovingTestimonials;
