const Content = () => {
  return (
    <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-slate-400 rounded-xl p-8">
            <div className="flex items-center justify-center bg-primary/10 rounded-full h-16 w-16 mb-6">
              <span className="material-symbols-outlined text-primary dark:text-secondary text-4xl">
                verified_user
              </span>
            </div>
            <h3 className="text-xl font-bold">HIPAA Compliance</h3>
            <p className="mt-2 text-light">
              Our platform is designed to meet the rigorous standards of the
              Health Insurance Portability and Accountability Act (HIPAA),
              ensuring the confidentiality, integrity, and availability of
              protected health information (PHI).
            </p>
          </div>
          <div className="border border-slate-400 rounded-xl p-8">
            <div className="flex items-center justify-center bg-primary/10 rounded-full h-16 w-16 mb-6">
              <span className="material-symbols-outlined text-primary dark:text-secondary  text-4xl">
                shield_lock
              </span>
            </div>
            <h3 className="text-xl font-bold">Data Encryption</h3>
            <p className="mt-2 text-light">
              All data, both in transit and at rest, is encrypted using
              industry-standard AES-256 encryption. This ensures that sensitive
              patient information is protected from unauthorized access at all
              times.
            </p>
          </div>
          <div className="border border-slate-400 rounded-xl p-8">
            <div className="flex items-center justify-center bg-primary/10 rounded-full h-16 w-16 mb-6">
              <span className="material-symbols-outlined text-primary dark:text-secondary  text-4xl">
                admin_panel_settings
              </span>
            </div>
            <h3 className="text-xl font-bold">Access Control</h3>
            <p className="mt-2 text-light">
              We implement strict, role-based access controls to ensure that
              users can only access the information necessary for their roles.
              Multi-factor authentication (MFA) is enforced for all user
              accounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
