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
              Website Design Company in Moradabad | Zentrix Infotech
            </h2>
            <p>
              Searching for the top website design company in Moradabad? Zentrix Infotech delivers stunning, user-friendly designs using modern tools like Tailwind CSS, React, and Next.js. Our creative team crafts websites that captivate visitors and convert them into loyal customers.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose a Local Website Design Company in Moradabad
            </h2>
            <p>
              Moradabad businesses deserve designs that reflect their unique identity. As a local design agency, we blend creativity with regional market insights for maximum impact.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Custom Visual Identity:</strong> Unique designs that stand out from generic templates.</li>
              <li><strong>Mobile-First Aesthetics:</strong> Beautiful layouts optimized for 89% mobile users.</li>
              <li><strong>Local Cultural Sensitivity:</strong> Designs respecting Moradabad&apos;s brassware heritage and business culture.</li>
              <li><strong>Conversion-Optimized:</strong> Every element drives calls, bookings, and sales.</li>
              <li><strong>Fast Design Turnaround:</strong> Stunning mockups ready in 3-5 days.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Premium Website Design Services in Moradabad
            </h2>

            <h3 className="font-semibold text-gray-900 mb-2">Business & Brand Websites</h3>
            <p>
              Elegant designs for startups, consultants, and service providers. Professional layouts with hero sections, portfolios, and compelling CTAs.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">E-Commerce Design</h3>
            <p>
              Visually stunning online stores with product showcases, intuitive navigation, and trust-building elements. Perfect for Moradabad retailers.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Corporate Identity Sites</h3>
            <p>
              Sophisticated designs for hospitals, IT firms, and enterprises. Includes executive bios, case studies, and leadership sections.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Landing Page Design</h3>
            <p>
              High-impact single-page designs for campaigns, products, or events. Optimized for maximum conversions.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Web App UI/UX Design</h3>
            <p>
              Intuitive interfaces for booking systems, dashboards, and management portals with seamless user flows.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Website Redesign Services</h3>
            <p>
              Modernize outdated sites with contemporary aesthetics while preserving SEO value.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Technology & Tools
            </h2>
            <p><strong>Modern Design Stack:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Figma & Adobe XD:</strong> Collaborative prototyping with real-time feedback</li>
              <li><strong>Tailwind CSS:</strong> Rapid, responsive design systems</li>
              <li><strong>React Components:</strong> Interactive, animated elements</li>
              <li><strong>Three.js:</strong> Immersive 3D product visualizations for exporters</li>
            </ul>

            <p><strong>Design Principles:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Material Design 3 compliance</li>
              <li>WCAG 2.1 accessibility standards</li>
              <li>Dark/light mode support</li>
              <li>Micro-interactions for engagement</li>
            </ul>

            <p><strong>Performance Integration:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>CSS-in-JS optimization</li>
              <li>Critical CSS extraction</li>
              <li>Font optimization</li>
              <li>Smooth 60fps animations</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Design Success Stories from Moradabad
            </h2>
            <div className="space-y-4">
              <p>
                <strong>Healthcare Branding:</strong> Hospital redesign attracted 380% more patient inquiries through elegant, trustworthy design.
              </p>
              <p>
                <strong>Brassware Showcase:</strong> Export firm&apos;s product gallery design tripled international inquiries with 3D product viewers.
              </p>
              <p>
                <strong>Restaurant Chain Rebrand:</strong> Multi-location visual identity boosted online orders 62% through mouthwatering imagery.
              </p>
              <p>
                <strong>Education Platform:</strong> Coaching center&apos;s modern interface increased course signups 290% with intuitive navigation.
              </p>
              <p>
                <strong>Real Estate Portfolio:</strong> Property showcase design secured top Google images ranking for &quot;Moradabad flats.&quot;
              </p>
            </div>
            <p>
              These projects demonstrate our design excellence delivering real business results.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Industries Our Design Team Serves
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Healthcare & wellness centers</li>
              <li>Hospitality & restaurants</li>
              <li>Manufacturing & exporters</li>
              <li>Retail & fashion brands</li>
              <li>Professional services</li>
              <li>Education institutions</li>
              <li>Real estate developers</li>
              <li>Local boutiques & salons</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Moradabad Design Trends 2025
            </h2>
            <p>Current local design preferences:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Minimalist layouts with bold typography</li>
              <li>3D product visualizations for exports</li>
              <li>Hindi/English bilingual interfaces</li>
              <li>WhatsApp integration prominence</li>
              <li>Fast-loading hero sections (under 1.5s)</li>
              <li>Local color palettes inspired by brasswork</li>
            </ul>
            <p>
              Professional design positions your brand as modern and trustworthy.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our 6-Phase Design Process
            </h2>
            <p>
              <strong>1. Brand Discovery</strong> – Mood boards and style guides
            </p>
            <p>
              <strong>2. Wireframing</strong> – Layout structure with stakeholder approval
            </p>
            <p>
              <strong>3. Visual Design</strong> – High-fidelity mockups (3 iterations included)
            </p>
            <p>
              <strong>4. Interactive Prototypes</strong> – Clickable demos for feedback
            </p>
            <p>
              <strong>5. Responsive Adaptation</strong> – Mobile, tablet, desktop perfection
            </p>
            <p>
              <strong>6. Design System Handoff</strong> – Style guide + assets for developers
            </p>
            <p>
              <strong>Design Timeline:</strong> 1-3 weeks depending on complexity.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Zentrix Infotech is Moradabad&apos;s Design Leader
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>200+ Design Projects:</strong> Portfolio spanning all local industries</li>
              <li><strong>Award-Winning Creatives:</strong> Local design competition winners</li>
              <li><strong>Client-Centric Revisions:</strong> Unlimited minor changes during design phase</li>
              <li><strong>Local Collaboration:</strong> In-person meetings at your convenience</li>
              <li><strong>Future-Proof Aesthetics:</strong> Designs that age gracefully for 3+ years</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Transform Your Online Presence Today!
            </h2>
            <p>
              Partner with Zentrix Infotech—Moradabad&apos;s premier website design company.
            </p>
            <p>
              📞 +91-7248800839<br />
              📞 +91-6397036898<br />
              📧 info@zentrixinfotech.com<br />
            </p>
            

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Website Design FAQs – Moradabad
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How long does website design take in Moradabad?</h3>
                <p>Basic sites: 7-10 days. Complex designs: 2-3 weeks.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you provide source files?</h3>
                <p>Yes—Figma files, style guides, and all assets included.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can I request design changes?</h3>
                <p>3 major revisions included. Unlimited minor tweaks during design phase.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Are designs mobile-friendly?</h3>
                <p>100% responsive across all screen sizes and orientations.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you follow branding guidelines?</h3>
                <p>Absolutely—your logo, colors, and brand voice guide every design.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How do you ensure fast-loading designs?</h3>
                <p>Optimized images, modern CSS, lazy loading, and performance-first approach.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can you design in Hindi too?</h3>
                <p>Yes—bilingual RTL/LTR layouts with proper typography.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Website Design Company in Moradabad | Custom UI/UX | Brand Identity | Responsive Design
              </p>
              <p className="mt-2 text-gray-700">
                Zentrix Infotech creates stunning, conversion-optimized website designs for Moradabad businesses. Modern aesthetics meet local market expertise.
              </p>
            </div>
          </div>

          <PostNavigation slug="website-design-company-moradabad" />
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