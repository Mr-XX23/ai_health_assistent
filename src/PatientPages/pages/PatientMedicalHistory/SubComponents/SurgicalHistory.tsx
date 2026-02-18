import React from 'react'

const SurgicalHistory = () => {
    return (
        <section className="scroll-mt-24" id="surgeries">
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl">
                <div className="p-4 flex items-center justify-between">
                    <h3 className="font-semibold text-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary">stethoscope_arrow</span>Surgical History</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="text-xs text-text-light-secondary dark:text-text-dark-secondary uppercase bg-background-light dark:bg-background-dark">
                            <tr>
                                <th className="px-6 py-3" scope="col">Surgery Type</th>
                                <th className="px-6 py-3" scope="col">Date</th>
                                <th className="px-6 py-3" scope="col">Recovery Notes</th>
                                <th className="px-6 py-3" scope="col"><span className="sr-only">Actions</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-border-light dark:border-border-dark hover:bg-background-light/50 dark:hover:bg-background-dark/50">
                                <td className="px-6 py-4 font-medium">Appendectomy</td>
                                <td className="px-6 py-4">July 2018</td>
                                <td className="px-6 py-4">Standard recovery, no complications.</td>
                                <td className="px-6 py-4 text-right"><button className="text-text-light-secondary hover:text-primary"><span className="material-symbols-outlined text-lg">more_horiz</span></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default SurgicalHistory