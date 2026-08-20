const blogPosts = [
  {
    title: "Is Your Website Built for Humans or Just Search Engines?",
    date: "August 18, 2026",
    image: "https://maktalseo.com/wp-content/uploads/2026/08/human-friendly-SEO-Website.webp",
    url: "#",
  },
  {
    title: "Proven Shopify Conversion Rate Optimization Strategies to Boost Sales",
    date: "July 27, 2026",
    image: "https://maktalseo.com/wp-content/uploads/2026/07/Shopify-conversion-rate-optimization-strategies.webp",
    url: "#",
  },
  {
    title: "Brand Authority Signals Become Critical for Rankings",
    date: "July 7, 2026",
    image: "https://maktalseo.com/wp-content/uploads/2026/07/Brand-Authority-Signals.webp",
    url: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-[#0a0a0b] py-20 sm:py-24 lg:pt-50">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* ── Eyebrow ── */}
        <p className="text-center text-[#cbfb45] text-sm sm:text-[15px] font-medium tracking-[0.12em] uppercase mb-4">
          Recent Posts from Our Blog
        </p>

        {/* ── Heading ── */}
        <h2 className="text-center text-[#f6f6f4] font-bold sm:font-extrabold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[1.15] max-w-237.5 mx-auto mb-14 sm:mb-16 lg:mb-16.25">
          Informative tech articles, tips and news from our team.
        </h2>

        {/* ── Card Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              className="group block"
            >
              {/* Image */}
              <div className="relative w-full aspect-[1.65/1] rounded-[14px] overflow-hidden bg-[#141416]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[#f6f6f4] text-[21px] sm:text-[23px] lg:text-[25px] font-medium leading-[1.45] transition-colors duration-250 group-hover:text-[#cbfb45]">
                {post.title}
              </h3>

              {/* Date */}
              <p className="mt-2 text-[#94A3B8] text-[15px] font-normal">
                {post.date}
              </p>
            </a>
          ))}
        </div>

        {/* ── View All Posts Button ── */}
        <div className="flex justify-center mt-9 sm:mt-10 lg:mt-10.5">
          <a
            href="#blog"
            className="inline-flex items-center justify-center w-42.5 h-11.25 rounded-full border border-white/20 bg-transparent text-[#f6f6f4] text-[13px] font-medium tracking-wider transition-all duration-200 hover:bg-[#141416] hover:border-[#cbfb45]/50"
          >
            VIEW ALL POSTS
          </a>
        </div>
      </div>
    </section>
  );
}
