import React from 'react'

const AllergiesandImmunizatiions = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="scroll-mt-24" id="immunizations">
                <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden" open="">
                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                        <h3 className="font-semibold text-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary">vaccines</span>Immunizations</h3>
                        <span className="material-symbols-outlined accordion-arrow transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="section-content">
                        <div className="p-4 border-t border-border-light dark:border-border-dark">
                            <ul className="space-y-2 text-sm">
                                <li className="flex justify-between items-center"><span>Influenza</span> <span className="text-text-light-secondary dark:text-text-dark-secondary">Oct 15, 2023</span></li>
                                <li className="flex justify-between items-center"><span>Tdap Booster</span> <span className="text-text-light-secondary dark:text-text-dark-secondary">Aug 22, 2021</span></li>
                            </ul>
                        </div>
                    </div>
                </details>
            </section>
            <section className="scroll-mt-24" id="allergies">
                <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden" open="">
                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                        <h3 className="font-semibold text-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary">allergy</span>Allergies</h3>
                        <span className="material-symbols-outlined accordion-arrow transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="section-content">
                        <div className="p-4 border-t border-border-light dark:border-border-dark space-y-3">
                            <div className="p-3 rounded-lg bg-background-light dark:bg-background-dark">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold">Penicillin</p>
                                        <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">Medication</p>
                                    </div>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Severe</span>
                                </div>
                                <p className="mt-1 text-sm">Hives, difficulty breathing. Managed with epinephrine.</p>
                            </div>
                            <div className="p-3 rounded-lg bg-background-light dark:bg-background-dark">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold">Pollen</p>
                                        <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">Environmental</p>
                                    </div>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Moderate</span>
                                </div>
                                <p className="mt-1 text-sm">Seasonal rhinitis. Managed with antihistamines.</p>
                            </div>
                        </div>
                    </div>
                </details>
            </section>
        </div>
    )
}

export default AllergiesandImmunizatiions