
const Hero = () => {
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter">Clear Plans for Every Need</h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-subtext-light dark:text-subtext-dark">Choose the right plan for your practice. All plans are secure, HIPAA-compliant, and backed by our expert support team.</p>
                <div className="mt-10 flex justify-center items-center gap-4">
                    <span className="font-medium">Monthly</span>
                    <button className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-300 dark:bg-slate-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" type="button">
                        <span className="inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out translate-x-5"></span>
                    </button>
                    <span className="font-medium">Annually</span>
                    <span className="ml-2 inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary">Save 20%</span>
                </div>
            </div>
        </section>
    )
}

export default Hero