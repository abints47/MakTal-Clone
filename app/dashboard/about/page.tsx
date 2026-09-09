import FloatingNav from "@/components/FloatingNav/FloatingNav";
import Footer from "@/components/Footer/Footer";
import {
  Target,
  Heart,
  Users,
  Globe,
  Code,
  Megaphone,
  Lightbulb,
  Shield,
  TrendingUp,
  Award,
} from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description:
      "We stay ahead of the curve, embracing the latest technologies and creative strategies to deliver cutting-edge solutions.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion",
    description:
      "Every project is a canvas. We pour our hearts into crafting digital experiences that inspire and engage.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Integrity",
    description:
      "Transparency and honesty form the foundation of every client relationship we build.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaboration",
    description:
      "We believe the best results come from working closely with our clients as true partners.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Results-Driven",
    description:
      "We measure our success by the measurable growth and ROI we deliver for our clients.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in every line of code, every design, and every strategy.",
  },
];

const team = [
  {
    name: "Rahul Menon",
    role: "Founder & CEO",
    description:
      "Visionary leader with over a decade of experience in web development and digital marketing.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    description:
      "Creative mind behind our stunning UI/UX designs, blending aesthetics with functionality.",
  },
  {
    name: "Arjun Nair",
    role: "Lead Developer",
    description: "Full-stack expert specializing in modern web technologies and scalable architectures.",
  },
  {
    name: "Sneha Patel",
    role: "Digital Marketing Lead",
    description:
      "Strategic marketer with a proven track record of driving organic growth and ROI.",
  },
];

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "500+", label: "Projects Delivered" },
  { number: "200+", label: "Happy Clients" },
  { number: "15+", label: "Countries Served" },
];

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description:
      "Custom websites and web applications built with the latest technologies for optimal performance.",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Digital Marketing",
    description:
      "Comprehensive marketing strategies including SEO, PPC, and social media to boost your online presence.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Brand Strategy",
    description:
      "End-to-end branding solutions that capture your essence and resonate with your audience.",
  },
];

export default function AboutPage() {
  return (
    <>
      <FloatingNav />
      <main className="min-h-screen bg-[#050505] text-white">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/laptop.jpg"
              alt="Laptop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              ABOUT US
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-4 text-white/90">
              A Comprehensive Web Development and Digital Marketing Agency
            </p>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Registered and recognized company in India with 10 years of
              experience in the field serving clients world-wide
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 sm:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-[#00AEEF]" />
                <h2 className="text-3xl sm:text-4xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                To empower businesses worldwide with innovative digital solutions
                that drive growth, enhance brand visibility, and create meaningful
                connections between brands and their audiences.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We strive to be the catalyst for digital transformation, helping
                businesses of all sizes navigate the ever-evolving digital
                landscape with confidence and clarity.
              </p>
            </div>
            <div className="flex-1 relative">
              <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-[#00AEEF]/20 to-[#00AEEF]/5 border border-[#00AEEF]/20 flex items-center justify-center">
                <Target className="w-32 h-32 text-[#00AEEF]/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 sm:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#00AEEF]/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What We Do
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-8 rounded-2xl bg-[#050505] border border-white/5 hover:border-[#00AEEF]/30 transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 sm:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                The talented people behind our success
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="text-center group"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00AEEF]/30 to-[#00AEEF]/10 mx-auto mb-6 flex items-center justify-center border-2 border-[#00AEEF]/20 group-hover:border-[#00AEEF]/50 transition-all duration-300">
                    <Users className="w-12 h-12 text-[#00AEEF]/50" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#00AEEF] text-sm mb-3">{member.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-[#00AEEF]/10 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life. Get in touch
              with us today and let&apos;s create something extraordinary
              together.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00AEEF] text-white font-semibold text-lg transition-all duration-300 hover:bg-[#00AEEF]/90 hover:shadow-lg hover:shadow-[#00AEEF]/30 hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
