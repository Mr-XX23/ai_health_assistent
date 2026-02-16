

const Compare = () => {
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-center">Compare All Features</h2>
                <div className="mt-12 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="border-b border-slate-200 dark:border-slate-800">
                            <tr>
                                <th className="p-4 text-lg font-bold min-w-[250px]">Features</th>
                                <th className="p-4 text-center font-bold">Basic</th>
                                <th className="p-4 text-center font-bold">Premium</th>
                                <th className="p-4 text-center font-bold">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            <tr className="bg-slate-50 dark:bg-slate-800/30">
                                <td className="p-4 font-bold" colSpan={4}>Core Platform</td>
                            </tr>
                            <tr>
                                <td className="p-4">Telemedicine Consultations</td>
                                <td className="p-4 text-center">50 / month</td>
                                <td className="p-4 text-center">Unlimited</td>
                                <td className="p-4 text-center">Unlimited</td>
                            </tr>
                            <tr>
                                <td className="p-4">Medication Management</td>
                                <td className="p-4 text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
                                <td className="p-4 text-center"><span className="material-symbols-outlined text-primary dark:text-secondary">check_circle</span></td>
                                <td className="p-4 text-center"><span className="material-symbols-outlined text-accent">star</span></td>
                            </tr>
                            <tr>
                                <td className="p-4">Standard EHR Integration</td>
                                <td className="p-4 text-center"><span className="material-symbols-outlined text-secondary">check</span></td>
                                <td className="p-4 text-center"><span className="material-symbols-outlined text-primary dark:text-secondary">check_circle</span></td>
                                <td className="p-4 text-center"><span className="material-symbols-outlined text-accent">star</span></td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-800/30">
                                <td className="p-4 font-bold" colSpan={4}>AI Features</td>
                            </tr>
                            <tr>
                                <td className="p-4">AI Diagnostic Scans</td>
                                <td className="p-4 text-center text-subtext-light dark:text-subtext-dark">-</td>
                                <td className="p-4 text-center">100 / month</td>
                                <td className="p-4 text-center">Volume-based</td>
                            </tr>
                            <tr>
                                <td className="p-4">AI Adherence Reporting</td>
                                <td className="p-4 text-center text-subtext-light dark:text-subtext-dark">-</td>
                                <td className="p-4 text-center"><span className="material-symbols-outlined text-primary dark:text-secondary">check_circle</span></td>
                                <td className="p-4 text-center"><span className="material-symbols-outlined text-accent">star</span></td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-800/30">
                                <td className="p-4 font-bold" colSpan={4}>Support &amp; Services</td>
                            </tr>
                            <tr>
                                <td className="p-4">Support Level</td>
                                <td className="p-4 text-center">Email &amp; Chat</td>
                                <td className="p-4 text-center">Priority Phone</td>
                                <td className="p-4 text-center">Dedicated Manager</td>
                            </tr>
                            <tr>
                                <td className="p-4">Custom API Access</td>
                                <td className="p-4 text-center text-subtext-light dark:text-subtext-dark">-</td>
                                <td className="p-4 text-center text-subtext-light dark:text-subtext-dark">-</td>
                                <td className="p-4 text-center"><span className="material-symbols-outlined text-accent">star</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Compare