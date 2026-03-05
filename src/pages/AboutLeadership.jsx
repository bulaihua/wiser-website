import { motion } from 'framer-motion';

export default function AboutLeadership() {
  const team = [
    {
      icon: "👔",
      name: "The Founder",
      title: "20+ years industry visionary",
      description: "Building bridges between East and West since 2006.",
      quote: "Empower people, deliver excellence."
    },
    {
      icon: "🧵",
      name: "Master Craftsmen",
      title: "15-20 years of knitting expertise",
      description: "Trained in traditional techniques, modern innovators.",
      quote: "Guardians of quality, mentors to the next generation."
    },
    {
      icon: "🎨",
      name: "NYC Design Team",
      title: "Parsons, FIT, Pratt graduates",
      description: "Fresh perspectives from the fashion capital.",
      quote: "Bridging trends with production reality."
    },
    {
      icon: "🌏",
      name: "Global Operations",
      title: "China, Vietnam, Bangladesh, Cambodia",
      description: "Cultural diversity as our strength.",
      quote: "Local expertise, global standards."
    }
  ];

  return (
    <div className="pt-36 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-secondary mb-6">LEADERSHIP TEAM</h1>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Our strength lies in our diversity—craftsmen with decades of experience, forward-thinking leadership, and creative talent from fashion capitals around the world.
          </p>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex gap-6 p-8 border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent-black rounded-full flex items-center justify-center">
                    <span className="text-3xl">{member.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-accent-black mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{member.description}</p>
                  <p className="text-gray-600 text-sm italic">{member.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center p-12 bg-accent-warm"
      >
        <h2 className="heading-tertiary mb-4">Let's Work Together</h2>
        <p className="text-gray-600 mb-8">
          Join the list of prestigious brands that trust Wiser Enterprise.
        </p>
        <a href="/contact" className="btn-primary">Get in Touch</a>
      </motion.div>
    </div>
  );
}
