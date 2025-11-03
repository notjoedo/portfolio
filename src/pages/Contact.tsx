import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Using EmailJS - Free service (200 emails/month)
      // Get credentials from https://www.emailjs.com
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
            template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
              to_email: "joedo2910@vt.edu",
            },
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white pt-12 pb-4 mb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left side - Heading */}
          <motion.div className="flex-shrink-0" variants={itemVariants}>
            <motion.h2
              className="text-4xl font-light text-gray-900"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Lets work together.
            </motion.h2>
          </motion.div>

          {/* Right side - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex-1 w-full space-y-6"
            aria-label="Contact form"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="sr-only">Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-6 py-3 rounded-full border-2 border-gray-300 focus:border-[#466EA2] focus:outline-none focus:ring-2 focus:ring-[#466EA2] focus:ring-offset-2 transition-colors duration-200"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="sr-only">Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-6 py-3 rounded-full border-2 border-gray-300 focus:border-[#466EA2] focus:outline-none focus:ring-2 focus:ring-[#466EA2] focus:ring-offset-2 transition-colors duration-200"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="sr-only">Message</label>
              <motion.textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                rows={6}
                className="w-full px-6 py-4 rounded-3xl border-2 border-gray-300 focus:border-[#466EA2] focus:outline-none focus:ring-2 focus:ring-[#466EA2] focus:ring-offset-2 transition-colors duration-200 resize-none"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            <motion.div className="flex justify-end" variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Sending message" : "Submit contact form"}
                className="px-8 py-3 rounded-full bg-gray-300 text-gray-700 hover:bg-[#466EA2] hover:text-white transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#466EA2] focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isSubmitting ? "Sending..." : "submit"}
              </motion.button>
            </motion.div>

            {submitStatus === "success" && (
              <motion.div
                role="status"
                aria-live="polite"
                className="text-green-600 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Message sent successfully!
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                role="alert"
                aria-live="assertive"
                className="text-red-600 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Failed to send message. Please try again.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
