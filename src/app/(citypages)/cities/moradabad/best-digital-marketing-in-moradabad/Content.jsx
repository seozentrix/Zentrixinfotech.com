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
              Grow Your Business with the Best Digital Marketing Services in Moradabad
            </h2>
            <p>
              In today's digital-first world, having a strong online presence is essential for business success. Whether you're a startup, small business, or established enterprise in Moradabad, our comprehensive digital marketing services help you reach your target audience, increase brand visibility, and drive measurable results. As the best digital marketing agency in Moradabad, we combine creativity, data-driven strategies, and cutting-edge technology to deliver campaigns that convert.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Our Digital Marketing Agency
            </h2>
            <p>
              We are Moradabad's leading digital marketing agency with a proven track record of helping businesses grow online. Our team of certified digital marketers, SEO specialists, content creators, and social media experts brings years of industry experience and local market knowledge. We understand the unique challenges and opportunities that businesses in Moradabad face, and we craft customized strategies that deliver real ROI.
            </p>
            <p>
              Our mission is to empower businesses in Moradabad with affordable, results-oriented digital marketing solutions that drive traffic, generate leads, and increase sales. From SEO and social media marketing to PPC advertising and content marketing, we offer everything you need to succeed online.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Us - Best Digital Marketing in Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Market Expertise</strong> - Deep understanding of Moradabad's business landscape and consumer behavior.</li>
              <li><strong>Proven Results</strong> - Track record of increasing website traffic, leads, and sales for businesses across industries.</li>
              <li><strong>Customized Strategies</strong> - Tailored digital marketing plans designed specifically for your business goals and budget.</li>
              <li><strong>Transparent Reporting</strong> - Detailed monthly reports showing campaign performance, ROI, and actionable insights.</li>
              <li><strong>Affordable Packages</strong> - Cost-effective digital marketing solutions that deliver maximum value for money.</li>
              <li><strong>Certified Professionals</strong> - Google-certified experts and experienced marketers who stay updated with latest trends.</li>
              <li><strong>Full-Service Agency</strong> - One-stop solution for all your digital marketing needs under one roof.</li>
              <li><strong>Dedicated Support</strong> - Personal account manager and responsive customer service throughout your campaign.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Comprehensive Digital Marketing Services in Moradabad
            </h2>
            <p>
              As the best digital marketing company in Moradabad, we offer a complete suite of services to establish and grow your online presence.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Search Engine Optimization (SEO)</h3>
            <p>
              Rank higher on Google and attract organic traffic with our proven SEO strategies. We optimize your website with keyword research, on-page SEO, technical SEO, link building, and local SEO to ensure maximum visibility in search results. Our SEO services help Moradabad businesses dominate local search rankings and attract qualified leads.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Social Media Marketing (SMM)</h3>
            <p>
              Build a strong social media presence and engage with your audience on Facebook, Instagram, LinkedIn, Twitter, and YouTube. Our social media experts create compelling content, manage your profiles, run targeted ad campaigns, and grow your follower base to increase brand awareness and customer loyalty.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Pay-Per-Click Advertising (PPC)</h3>
            <p>
              Get instant visibility and drive qualified traffic with Google Ads, Facebook Ads, and Instagram Ads campaigns. We create high-converting ad campaigns with precise targeting, compelling ad copy, and optimized landing pages to maximize your ROI and minimize cost per acquisition.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Content Marketing</h3>
            <p>
              Attract, engage, and convert your audience with high-quality content. Our content marketing services include blog writing, article creation, infographics, video content, and email newsletters that establish your brand as an industry authority and drive organic traffic.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Website Design & Development</h3>
            <p>
              Create a professional, mobile-responsive website that converts visitors into customers. We design modern, fast-loading websites with intuitive navigation, compelling visuals, and clear calls-to-action optimized for both user experience and search engines.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Email Marketing</h3>
            <p>
              Nurture leads and retain customers with targeted email campaigns. We create personalized email sequences, newsletters, and promotional campaigns that drive engagement, repeat purchases, and customer loyalty.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Online Reputation Management</h3>
            <p>
              Protect and enhance your brand's online reputation. We monitor reviews, manage negative feedback, encourage positive testimonials, and build a strong online presence that attracts new customers and retains existing ones.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">E-commerce Marketing</h3>
            <p>
              Grow your online store with specialized e-commerce marketing strategies. We optimize product listings, run shopping ads, implement conversion rate optimization, and create retargeting campaigns to increase sales and revenue.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Industries We Serve in Moradabad
            </h2>
            <p>
              Our digital marketing expertise spans across multiple industries including manufacturing, retail, education, healthcare, real estate, hospitality, automotive, professional services, and more. We understand that each industry has unique challenges and opportunities, and we create customized strategies that deliver results.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Proven Digital Marketing Process
            </h2>
            <p>
              <strong>1. Discovery & Research:</strong> We analyze your business, competitors, target audience, and market opportunities to understand your unique needs.
            </p>
            <p>
              <strong>2. Strategy Development:</strong> Based on research insights, we create a comprehensive digital marketing strategy with clear goals, KPIs, and timelines.
            </p>
            <p>
              <strong>3. Implementation:</strong> Our team executes the strategy across multiple channels with precision, creativity, and attention to detail.
            </p>
            <p>
              <strong>4. Monitoring & Optimization:</strong> We continuously track performance, analyze data, and optimize campaigns for better results.
            </p>
            <p>
              <strong>5. Reporting & Communication:</strong> You receive detailed monthly reports and regular updates on campaign performance and recommendations.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Success Stories from Moradabad Businesses
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                &quot;Our website traffic increased by 300% in just 6 months! Their SEO strategies really work. Best digital marketing agency in Moradabad.&quot; - Rajesh Kumar, Manufacturing Business Owner
              </blockquote>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                &quot;We were struggling with social media, but their team transformed our Instagram presence. We now get daily inquiries through social media.&quot; - Priya Sharma, Boutique Owner
              </blockquote>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                &quot;Their PPC campaigns delivered amazing ROI. We got quality leads at half the cost we were paying before. Highly recommended!&quot; - Amit Verma, Real Estate Developer
              </blockquote>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Who is the best digital marketing agency in Moradabad?</h3>
                <p>A: We are recognized as one of the best digital marketing agencies in Moradabad, offering comprehensive services including SEO, social media marketing, PPC, content marketing, and more with proven results for local businesses.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. How much does digital marketing cost in Moradabad?</h3>
                <p>A: Digital marketing costs vary based on your business goals, industry, and services required. We offer flexible packages starting from affordable monthly plans to comprehensive enterprise solutions. Contact us for a customized quote.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. How long does it take to see results from digital marketing?</h3>
                <p>A: Results vary by channel. PPC campaigns can drive traffic within days, while SEO typically shows significant results in 3-6 months. Social media and content marketing build momentum over time. We provide realistic timelines and milestones for each service.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you provide digital marketing for small businesses in Moradabad?</h3>
                <p>A: Absolutely! We specialize in helping small and medium businesses in Moradabad grow online with affordable, results-driven digital marketing strategies tailored to your budget and goals.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. What makes your agency different from other digital marketing companies?</h3>
                <p>A: Our deep understanding of the Moradabad market, transparent reporting, personalized service, proven track record, and commitment to delivering measurable ROI sets us apart. We focus on long-term partnerships and sustainable growth.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q6. Can you help with both website design and digital marketing?</h3>
                <p>A: Yes! We offer complete digital solutions including website design, development, and all aspects of digital marketing to create a cohesive online presence that drives results.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q7. Do you offer local SEO services for Moradabad businesses?</h3>
                <p>A: Yes, local SEO is one of our specialties. We optimize your Google My Business profile, build local citations, and implement location-based strategies to help you dominate local search results in Moradabad.</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact the Best Digital Marketing Agency in Moradabad Today
            </h2>
            <p>
              Ready to transform your online presence and grow your business? Get in touch with us for a free consultation and customized digital marketing proposal.
            </p>
            

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Best Digital Marketing Agency in Moradabad | SEO | Social Media Marketing | PPC | Content Marketing | Website Design
              </p>
              <p className="mt-2 text-gray-700">
                Helping Moradabad businesses grow online with data-driven digital marketing strategies that deliver real results and measurable ROI.
              </p>
            </div>
          </div>

          <PostNavigation slug="best-digital-marketing-moradabad" />
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