const blogPosts = [
  { title: "Is Your Website Built for Humans or Just Search Engines?", date: "August 18, 2026", image: "https://maktalseo.com/wp-content/uploads/2026/08/human-friendly-SEO-Website.webp", url: "#" },
  { title: "Proven Shopify Conversion Rate Optimization Strategies to Boost Sales", date: "July 27, 2026", image: "https://maktalseo.com/wp-content/uploads/2026/07/Shopify-conversion-rate-optimization-strategies.webp", url: "#" },
  { title: "Brand Authority Signals Become Critical for Rankings", date: "July 7, 2026", image: "https://maktalseo.com/wp-content/uploads/2026/07/Brand-Authority-Signals.webp", url: "#" },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <p className="text-center text-[#059669] text-xs sm:text-sm font-medium tracking-[0.12em] uppercase mb-3">Recent Posts from Our Blog</p>
        <h2 className="text-center text-[#111827] font-bold sm:font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.15] max-w-3xl mx-auto mb-10 sm:mb-14">Informative tech articles, tips and news from our team.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <a key={index} href={post.url} className="group block">
              <div className="relative w-full aspect-[1.6/1] rounded-xl overflow-hidden bg-gray-100">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]" />
              </div>
              <h3 className="mt-3 sm:mt-4 text-[#111827] text-base sm:text-lg lg:text-xl font-medium leading-[1.4] transition-colors duration-250 group-hover:text-[#059669]">{post.title}</h3>
              <p className="mt-1.5 sm:mt-2 text-gray-400 text-xs sm:text-sm font-normal">{post.date}</p>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-8 sm:mt-10">
          <a href="#blog" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-gray-300 bg-transparent text-[#111827] text-sm font-medium tracking-wide transition-all duration-200 hover:bg-gray-50 hover:border-[#059669]/50">VIEW ALL POSTS</a>
        </div>
      </div>
    </section>
  );
}
