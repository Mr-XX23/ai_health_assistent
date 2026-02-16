import AppLayout from "../../../layout/AppLayout/AppLayout";

const ConctactUs = () => {
  return (
    <AppLayout>
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-light">
              We’re here to help and answer any question you might have. We look
              forward to hearing from you.
            </p>
          </div>
          <div className="mt-16 grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="light:bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg ">
                <h2 className="text-2xl font-bold text-light">
                  Send us a message
                </h2>
                <form action="#" className="mt-6 space-y-6" method="POST">
                  <div>
                    <label
                      className="block text-sm font-medium text-light"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        className=" p-2 block w-full rounded-lg border-slate-300 shadow-sm  focus:border-primary focus:ring-primary sm:text-sm"
                        id="name"
                        name="name"
                        placeholder="Rohan Balami"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-light"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <div className="mt-1 ">
                      <input
                        className="p-2 block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-light"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        className="p-2 block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-light"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        className="p-2 block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        required
                        rows={6}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="p-2 w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-light">
                    Contact Information
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Our team is available to answer your questions.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">
                        call
                      </span>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-gray-400">01-5522295</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">
                        mail
                      </span>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-400">support@medisecure.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">
                        location_on
                      </span>
                      <div>
                        <h4 className="font-medium">Office Address</h4>
                        <p className="text-gray-400">
                          Patan Hospital
                          <br />
                          Lagankhel Satdobato Rd, Lalitpur 44700
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-light">Our Location</h3>
                  <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl shadow-lg">
                    <iframe
                      allowFullScreen
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5852162712417!2d85.3205683!3d27.668301999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d1be9baf71%3A0x48893d580864792f!2sPatan%20Hospital!5e0!3m2!1sen!2snp!4v1767380598014!5m2!1sen!2snp"
                      style={{ border: 0 }}
                      width="100%"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default ConctactUs;
