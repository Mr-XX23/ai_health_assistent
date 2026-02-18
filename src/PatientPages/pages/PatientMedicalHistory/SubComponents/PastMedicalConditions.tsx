import React from 'react'

const PastMedicalConditions = () => {
    return (
        <section className="scroll-mt-24" id="conditions">
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl">
                <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <h3 className="font-semibold text-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary">healing</span>Past Medical Conditions</h3>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light-secondary text-lg">search</span>
                            <input className="w-full pl-10 pr-4 py-2 text-sm rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Search conditions..." type="text" />
                        </div>
                        <button className="p-2 rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark hover:bg-border-light dark:hover:bg-border-dark">
                            <span className="material-symbols-outlined text-lg">filter_list</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="text-xs text-text-light-secondary dark:text-text-dark-secondary uppercase bg-background-light dark:bg-background-dark">
                            <tr>
                                <th className="px-6 py-3" scope="col">Condition</th>
                                <th className="px-6 py-3" scope="col">Diagnosed Date</th>
                                <th className="px-6 py-3" scope="col">Severity</th>
                                <th className="px-6 py-3" scope="col">Treatment</th>
                                <th className="px-6 py-3" scope="col"><span className="sr-only">Actions</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-border-light dark:border-border-dark hover:bg-background-light/50 dark:hover:bg-background-dark/50">
                                <td className="px-6 py-4 font-medium">Hypertension</td>
                                <td className="px-6 py-4">March 2020</td>
                                <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Moderate</span></td>
                                <td className="px-6 py-4">Lisinopril (10mg), dietary changes.</td>
                                <td className="px-6 py-4 text-right"><button className="text-text-light-secondary hover:text-primary"><span className="material-symbols-outlined text-lg">more_horiz</span></button></td>
                            </tr>
                            <tr className="border-t border-border-light dark:border-border-dark hover:bg-background-light/50 dark:hover:bg-background-dark/50">
                                <td className="px-6 py-4 font-medium">Asthma</td>
                                <td className="px-6 py-4">June 2015</td>
                                <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Mild</span></td>
                                <td className="px-6 py-4">Albuterol inhaler as needed.</td>
                                <td className="px-6 py-4 text-right"><button className="text-text-light-secondary hover:text-primary"><span className="material-symbols-outlined text-lg">more_horiz</span></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default PastMedicalConditions;