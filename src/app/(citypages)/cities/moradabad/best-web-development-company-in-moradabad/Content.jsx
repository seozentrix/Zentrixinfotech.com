import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";

const PostNavigation = ({ slug }) => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-300">
      <div className="flex justify-between items-center">
        <button className="text-blue-600 hover:text-blue-700 font-semibold">
          ← Previous Article
        </button>
        <button className="text-blue-600 hover:text-blue-700 font-semibold">
          Next Article →
        </button>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-0 order-1 lg:order-1">

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Best Web Development Company in Moradabad | Zentrix Infotech
            </h2>
            <p>
              Looking for the best web development company in Moradabad to transform your business online? Zentrix Infotech, a local leader in Moradabad, builds high-performance websites using React, Next.js, and Tailwind CSS. We deliver custom solutions that drive leads, boost sales, and establish your brand authority.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Zentrix Infotech in Moradabad
            </h2>
            <p>
              Businesses trust us because we prioritize results over templates. Our Moradabad-based team understands local markets, from brassware exporters to healthcare providers.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Custom Designs:</strong> No cookie-cutter sites—every project reflects your unique brand.</li>
              <li><strong>Speed & Performance:</strong> Lightning-fast sites with Core Web Vitals optimization.</li>
              <li><strong>Mobile-First Approach:</strong> 85% of Moradabad users browse on phones—we make sure your site shines there.</li>
              <li><strong>Local Market Knowledge:</strong> We optimize for searches like &quot;best café in Moradabad&quot; or &quot;hospital near me.&quot;</li>
              <li><strong>Affordable Packages:</strong> Quality development starting at ₹15,000 without compromising features.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Comprehensive Web Development Services
            </h2>

            <h3 className="font-semibold text-gray-900 mb-2">Custom Website Development</h3>
            <p>
              We create responsive sites for startups, schools, and service providers. Expect SEO-ready designs that rank in local Google searches.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">E-Commerce Solutions</h3>
            <p>
              Launch your online store with secure payments, inventory management, and fast checkout. Perfect for Moradabad&apos;s growing retail scene.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Corporate & Business Websites</h3>
            <p>
              Professional sites for IT firms, consultants, and hospitals. Includes lead capture forms and appointment booking.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Web Applications</h3>
            <p>
              Advanced apps for CRM, booking systems, or dashboards. Scalable with modern tech stacks.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Maintenance & Redesign</h3>
            <p>
              Upgrade outdated sites with faster load times, better UX, and fresh designs. We handle hosting and security too.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Technologies We Master
            </h2>
            <p>
              Zentrix Infotech stays ahead with cutting-edge tools:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS, Three.js for 3D animations.</li>
              <li><strong>Backend:</strong> Node.js, Express, MongoDB, Firebase for robust performance.</li>
              <li><strong>Performance Tools:</strong> Lighthouse scores 95+, image optimization, lazy loading.</li>
              <li><strong>SEO Integration:</strong> Schema markup, Google My Business setup, local citations.</li>
            </ul>
            <p>
              These ensure your site loads in under 2 seconds and ranks higher than competitors.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Success Stories in Moradabad
            </h2>
            <div className="space-y-4">
              <p>
                <strong>Hospital Website Revamp:</strong> A local clinic saw 300% more patient inquiries after our redesign. Mobile bookings increased by 250% in 3 months.
              </p>
              <p>
                <strong>Café E-Commerce Launch:</strong> From zero to ₹2.5 lakhs revenue in first quarter. Online orders now make up 40% of sales.
              </p>
              <p>
                <strong>IT Services Ranking Boost:</strong> Top 3 Google position for &quot;IT services Moradabad.&quot; Organic traffic up 400%.
              </p>
              <p>
                <strong>Brassware Exporter Site:</strong> Export inquiries doubled with multilingual support and product galleries.
              </p>
            </div>
            <p>
              These real results prove our expertise in delivering measurable growth.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Industries We Serve in Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Hospitals & clinics</li>
              <li>Restaurants & cafés</li>
              <li>IT services & startups</li>
              <li>E-commerce & retail</li>
              <li>Real estate agents</li>
              <li>Education centers</li>
              <li>Brassware exporters</li>
              <li>Vastu consultants</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Moradabad Market Insights
            </h2>
            <p>
              70% of local consumers research online before buying. Mobile traffic dominates at 85%, and voice search via Google Assistant is rising. A modern website positions your business ahead of competitors still using basic templates.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Your Business Needs a Professional Website
            </h2>
            <p>
              Stand out in Moradabad&apos;s competitive market:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dominate local Google searches like &quot;web developer Moradabad.&quot;</li>
              <li>Build instant credibility with professional design.</li>
              <li>Capture leads 24/7, even when you&apos;re closed.</li>
              <li>Reach beyond city limits to nearby Rampur and Badaun.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Proven 5-Step Process
            </h2>
            <p>
              <strong>Step 1: Free Consultation</strong> – Understand your goals and challenges.
            </p>
            <p>
              <strong>Step 2: Wireframes & Design</strong> – Audience-focused mockups with feedback rounds.
            </p>
            <p>
              <strong>Step 3: Development</strong> – Clean, scalable code with daily progress updates.
            </p>
            <p>
              <strong>Step 4: Testing & Optimization</strong> – Cross-device testing, speed audits.
            </p>
            <p>
              <strong>Step 5: Launch & Support</strong> – Seamless deployment plus 3 months free maintenance.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Sets Us Apart
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>10+ Years Local Experience:</strong> Delivered 150+ projects in Moradabad region.</li>
              <li><strong>Transparent Pricing:</strong> Fixed costs, no surprises.</li>
              <li><strong>Lifetime Support:</strong> Free updates for core functionality.</li>
              <li><strong>Results Guarantee:</strong> We optimize until you see traffic growth.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Ready to Grow Online?
            </h2>
            <p>
              Contact Zentrix Infotech — Moradabad&apos;s top web development experts — today!
            </p>
            <p>
              📞 +91-7248800839<br />
              📞 +91-6397036898<br />
              📧 info@zentrixinfotech.com<br />
              
            </p>
            <p>
              Limited slots available—book your free consultation now!
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. How much does a website cost from the best web development company in Moradabad?</h3>
                <p>A: Packages start at ₹15,000 for basic sites, ₹35,000+ for e-commerce. Custom quotes based on features.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. How long to build my website?</h3>
                <p>A: 2-4 weeks for most projects. Complex apps take 6-8 weeks.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Do you offer hosting and domain?</h3>
                <p>A: Yes, affordable plans with free SSL, backups, and 99.9% uptime.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Is my website SEO-optimized?</h3>
                <p>A: Every site includes on-page SEO, schema, and local optimization for Moradabad searches.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Can I edit content myself?</h3>
                <p>A: Yes, user-friendly CMS with training included.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q6. What if I need digital marketing too?</h3>
                <p>A: Full services: Google Ads, social media, and local SEO packages available.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Best Web Development Company in Moradabad | Custom Websites | E-Commerce | React & Next.js Experts
              </p>
              <p className="mt-2 text-gray-700">
                Zentrix Infotech delivers high-performance websites that drive leads and sales for Moradabad businesses. Modern tech, local expertise, affordable pricing.
              </p>
            </div>
          </div>

          <PostNavigation slug="best-web-development-moradabad" />
        </div>

        {/* Form Section - Smart positioning with CSS order */}
        <div className="w-[400px] lg:w-[500px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
            <RecentBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;