import { motion } from "framer-motion";

const footerData = [
  {
    title: "Support",
    links: [
      "Manage your trips",
      "Contact Customer Service",
      "Safety resource centre",
    ],
  },
  {
    title: "Discover",
    links: [
      "Genius loyalty programme",
      "Seasonal and holiday deals",
      "Travel articles",
      "Booking.com for Business",
      "Traveller Review Awards",
      "Car hire",
      "Flight finder",
      "Restaurant reservations",
   
    ],
  },
  {
    title: "Terms and settings",
    links: [
      "Privacy & cookies",
      "Terms of Service",
      "Accessibility Statement",
      "Partner dispute",
      "Modern Slavery Statement",
      "Human Rights Statement",
    ],
  },
  {
    title: "About",
    links: [
      "About Booking.com",
      "How we work",
      "Sustainability",
      "Press centre",
      "Careers",
      "Investor relations",
      "Corporate contact",
      "Content guidelines and reporting",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-10 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {footerData.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-2">{section.title}</h3>

            <motion.div
              className="h-[2px] bg-blue-500 mb-3 rounded"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              style={{ originX: 0 }}
            />

            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="border-t mt-8 pt-4 text-center text-gray-500 text-xs">
        <p>© 1996–2025 ™. All rights reserved.</p>
      </div>
    </footer>
  );
}
