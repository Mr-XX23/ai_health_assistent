const EndContent = () => {
  return (
    <section className="light:bg-slate-50 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwgKcOV8YbA51GXJxksHJwGvixzf5QYSmxqEO2lNFSfPa92En1pESGj1kgL6_XrOEvpVxc2h1YUK1PGCKJLIM88HM4REAqV1oUu8puK43sMTvIVZ2-r4jLywBOsZbSVKsESU3pD9HOeuwyFGHk_P-JRceVnnHac06Bn6WJmqsP8euXKLkdahwBs9Q6Rq13bUxu_B7hoJcMdK5T9wPrH2LuWXf40QRIc8GpbnnhFUG7l_ROtnQUUuB8Yr3xFzL-WE2upZkKwEBtF9pq')]"></div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Future Roadmap
            </h2>
            <p className="mt-4 text-lg text-light">
              We are committed to continuous innovation. Our development roadmap
              is focused on expanding our AI capabilities to address the
              evolving needs of modern healthcare.
            </p>
            <div className="mt-8 space-y-6">
              <div className="light:bg-white p-6 rounded-lg shadow-sm">
                <p className="text-sm font-bold text-primary dark:text-secondary">
                  Q4 2024
                </p>
                <h3 className="mt-1 font-semibold">
                  Personalized Treatment Plans
                </h3>
                <p className="mt-1 text-gray-450 text-sm">
                  AI generation of treatment plan recommendations based on
                  patient genetics, lifestyle, and medical history.
                </p>
              </div>
              <div className="light:bg-white p-6 rounded-lg shadow-sm">
                <p className="text-sm font-bold text-primary dark:text-secondary">
                  Q2 2025
                </p>
                <h3 className="mt-1 font-semibold">
                  Real-Time Patient Monitoring
                </h3>
                <p className="mt-1 text-gray-450 text-sm">
                  Integration with wearable devices for proactive health
                  monitoring and anomaly detection.
                </p>
              </div>
              <div className="light:bg-white p-6 rounded-lg shadow-sm">
                <p className="text-sm font-bold text-primary dark:text-secondary">
                  Q4 2025
                </p>
                <h3 className="mt-1 font-semibold">
                  Voice-Enabled Clinical Notes
                </h3>
                <p className="mt-1 text-gray-450 text-sm">
                  Advanced voice recognition and NLP for hands-free, real-time
                  documentation during patient consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndContent;
