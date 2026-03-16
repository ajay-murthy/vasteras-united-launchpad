import { motion } from "framer-motion";
import { Mail, MapPin, Trophy, Users, Star, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-navy/90 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Västerås United" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-display text-xl font-bold text-primary-foreground tracking-wide">Västerås United</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wider uppercase">
            <a href="#about" className="text-gold-light hover:text-gold transition-colors">About</a>
            <a href="#championship" className="text-gold-light hover:text-gold transition-colors">Championship</a>
            <a href="#squad" className="text-gold-light hover:text-gold transition-colors">Squad</a>
            <a href="#sponsors" className="text-gold-light hover:text-gold transition-colors">Sponsors</a>
            <a href="#contact" className="bg-gold/20 border border-gold/40 text-gold px-5 py-2 rounded hover:bg-gold/30 transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={heroBg}
          >
            <source src="/videos/logo-animation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-hero opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={logo} alt="Västerås United Crest" className="mx-auto h-44 w-44 md:h-56 md:w-56 rounded-full gold-glow animate-pulse-gold object-cover" />
          </motion.div>
          <motion.h1
            className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-gradient-gold">Västerås</span>{" "}
            <span className="text-primary-foreground">United</span>
          </motion.h1>
          <motion.p
            className="mt-4 font-body text-lg md:text-xl text-gold-light/80 tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Est. 2026 &bull; MMXXVI
          </motion.p>
          <motion.p
            className="mt-6 font-display text-2xl md:text-3xl text-primary-foreground/90 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            A new era of Nordic cricket begins
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <a href="#sponsors" className="bg-gold text-navy font-body font-semibold px-8 py-4 rounded text-sm uppercase tracking-widest hover:bg-gold-light transition-colors">
              Become a Sponsor
            </a>
            <a href="#about" className="border border-gold/40 text-gold font-body px-8 py-4 rounded text-sm uppercase tracking-widest hover:bg-gold/10 transition-colors">
              Learn More
            </a>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-gold/50" />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-cream relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={0} className="text-gold-dark font-body text-sm uppercase tracking-[0.3em] mb-3">About Us</motion.p>
            <motion.h2 variants={fadeInUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-navy mb-8">The Franchise</motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="text-navy-light/80 font-body text-lg leading-relaxed">
              Västerås United is a bold new cricket franchise based in Västerås, Sweden. Born from a passion for the gentleman's game and a vision to elevate Nordic cricket to the world stage, we are assembling a squad of exceptional talent to compete at the highest level.
            </motion.p>
          </motion.div>
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Shield, title: "Heritage", desc: "Built on traditions of excellence, sportsmanship, and the pursuit of greatness." },
              { icon: Trophy, title: "Ambition", desc: "Competing in the Nordic Smashers T20 Championship with a world-class roster." },
              { icon: Users, title: "Community", desc: "Uniting Västerås and beyond through the spirit of cricket." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                custom={i + 3}
                className="bg-card p-8 rounded-lg border border-border text-center hover:border-gold/40 hover:gold-glow transition-all duration-500"
              >
                <item.icon className="h-10 w-10 text-gold mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Championship */}
      <section id="championship" className="py-24 bg-gradient-hero relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={0} className="text-gold/70 font-body text-sm uppercase tracking-[0.3em] mb-3 text-center">The Tournament</motion.p>
            <motion.h2 variants={fadeInUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-6">
              Nordic Smashers T20
            </motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="text-gold-light/70 font-body text-lg text-center max-w-2xl mx-auto mb-16">
              The premier T20 cricket championship in the Nordics. Explosive cricket, fierce rivalries, and a stage where legends are made.
            </motion.p>
            <motion.div variants={fadeInUp} custom={3} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Format", value: "T20" },
                { label: "Region", value: "Nordics" },
                { label: "Season", value: "2026" },
                { label: "Status", value: "Forming" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-lg border border-gold/20 bg-navy-light/30">
                  <p className="text-gold font-body text-xs uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="font-display text-3xl font-bold text-primary-foreground">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Squad */}
      <section id="squad" className="py-24 bg-cream relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={0} className="text-gold-dark font-body text-sm uppercase tracking-[0.3em] mb-3">The Team</motion.p>
            <motion.h2 variants={fadeInUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">Playing Squad</motion.h2>
            <motion.div variants={fadeInUp} custom={2} className="max-w-xl mx-auto">
              <div className="border-2 border-dashed border-gold/30 rounded-lg p-12 bg-card">
                <Star className="h-16 w-16 text-gold/30 mx-auto mb-6" />
                <p className="font-display text-2xl md:text-3xl text-navy/70 italic mb-4">Coming Soon</p>
                <p className="font-body text-muted-foreground">
                  Our playing squad is being carefully assembled. Stay tuned for the official roster announcement.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="py-24 bg-gradient-hero relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={0} className="text-gold/70 font-body text-sm uppercase tracking-[0.3em] mb-3">Partner With Us</motion.p>
            <motion.h2 variants={fadeInUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Sponsorship Opportunities</motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="text-gold-light/70 font-body text-lg mb-12">
              Be part of history. Associate your brand with the rise of Västerås United and gain exposure across the Nordic cricket community.
            </motion.p>
            <motion.div variants={fadeInUp} custom={3} className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { tier: "Gold", perks: ["Jersey Logo", "Stadium Branding", "Social Media Features", "VIP Access"] },
                { tier: "Silver", perks: ["Cap Logo", "Match Day Presence", "Social Mentions", "Season Tickets"] },
                { tier: "Bronze", perks: ["Website Feature", "Social Mentions", "Match Tickets", "Newsletter Feature"] },
              ].map((pkg) => (
                <div key={pkg.tier} className="border border-gold/20 rounded-lg p-6 bg-navy-light/30 hover:border-gold/50 transition-colors">
                  <h3 className="font-display text-2xl font-bold text-gold mb-4">{pkg.tier}</h3>
                  <ul className="space-y-2">
                    {pkg.perks.map((perk) => (
                      <li key={perk} className="font-body text-sm text-gold-light/70 flex items-center gap-2 justify-center">
                        <Star className="h-3 w-3 text-gold/50" /> {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-cream relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} custom={0} className="text-gold-dark font-body text-sm uppercase tracking-[0.3em] mb-3 text-center">Get In Touch</motion.p>
            <motion.h2 variants={fadeInUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-navy mb-8 text-center">Connect With Us</motion.h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-12 bg-card rounded-lg border border-gold/30"
              >
                <Star className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-display text-2xl text-navy mb-2">Thank You!</h3>
                <p className="font-body text-muted-foreground">We'll be in touch shortly.</p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeInUp}
                custom={2}
                onSubmit={handleSubmit}
                className="bg-card p-8 rounded-lg border border-border space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-sm text-muted-foreground block mb-2">Name *</label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-muted border border-border rounded px-4 py-3 font-body text-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground block mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-muted border border-border rounded px-4 py-3 font-body text-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground block mb-2">Company / Organization</label>
                  <input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-muted border border-border rounded px-4 py-3 font-body text-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground block mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-muted border border-border rounded px-4 py-3 font-body text-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy text-gold font-body font-semibold py-4 rounded text-sm uppercase tracking-widest hover:bg-navy-light transition-colors border border-gold/30"
                >
                  Send Message
                </button>
              </motion.form>
            )}

            <motion.div variants={fadeInUp} custom={3} className="mt-12 flex flex-col sm:flex-row gap-6 justify-center text-center">
              <div className="flex items-center gap-2 justify-center">
                <Mail className="h-4 w-4 text-gold" />
                <span className="font-body text-sm text-muted-foreground">info@vasterasunited.se</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="font-body text-sm text-muted-foreground">Västerås, Sweden</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-8 border-t border-gold/20">
        <div className="container mx-auto px-6 text-center">
          <img src={logo} alt="Västerås United" className="mx-auto h-12 w-12 rounded-full mb-4 opacity-60 object-cover" />
          <p className="font-body text-xs text-gold-light/40 tracking-widest uppercase">
            © 2026 Västerås United Cricket Club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
