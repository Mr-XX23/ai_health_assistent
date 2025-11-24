
const EndQns = () => {
    return (
        <section className="bg-slate-100 dark:bg-slate-800 py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Pricing &amp; Billing Questions</h2>
                    <p className="mt-4 text-lg text-subtext-light dark:text-subtext-dark">Your questions, answered.</p>
                </div>
                <div className="mt-12 space-y-4">
                    <details className="group rounded-lg bg-background-light dark:bg-background-dark p-6 [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h3 className="font-bold">What counts as one "provider"?</h3>
                            <span className="relative size-5 shrink-0 transition-transform duration-500 group-open:rotate-180">
                                <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity">add</span>
                                <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity">remove</span>
                            </span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-subtext-light dark:text-subtext-dark">A provider is any user who conducts consultations or makes diagnoses, such as a doctor, nurse practitioner, or specialist. Administrative staff are included for free.</p>
                    </details>
                    <details className="group rounded-lg bg-background-light dark:bg-background-dark p-6 [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h3 className="font-bold">Is there a discount for non-profits?</h3>
                            <span className="relative size-5 shrink-0 transition-transform duration-500 group-open:rotate-180">
                                <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity">add</span>
                                <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity">remove</span>
                            </span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-subtext-light dark:text-subtext-dark">Yes, we offer special pricing for qualified non-profit organizations and educational institutions. Please contact our sales team for more information.</p>
                    </details>
                    <details className="group rounded-lg bg-background-light dark:bg-background-dark p-6 [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h3 className="font-bold">How does the 14-day free trial work?</h3>
                            <span className="relative size-5 shrink-0 transition-transform duration-500 group-open:rotate-180">
                                <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity">add</span>
                                <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity">remove</span>
                            </span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-subtext-light dark:text-subtext-dark">You get full access to all features on our Premium plan for 14 days. No credit card is required to start. At the end of the trial, you can choose a plan or your account will be suspended.</p>
                    </details>
                    <details className="group rounded-lg bg-background-light dark:bg-background-dark p-6 [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h3 className="font-bold">Can I change my plan later?</h3>
                            <span className="relative size-5 shrink-0 transition-transform duration-500 group-open:rotate-180">
                                <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity">add</span>
                                <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity">remove</span>
                            </span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-subtext-light dark:text-subtext-dark">Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Changes will be prorated and reflected in your next billing cycle.</p>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default EndQns