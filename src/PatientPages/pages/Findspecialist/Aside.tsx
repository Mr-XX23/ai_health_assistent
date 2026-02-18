import React from 'react'

const Aside = () => {
    return (
        <aside className="w-80 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark overflow-y-auto custom-scrollbar p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <button className="text-sm text-primary font-medium hover:underline">Clear all</button>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-bold uppercase tracking-wider text-text-light-secondary">Specialty Category</p>
                    <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                        <label className="flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors group">
                            <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                            <span className="material-symbols-outlined text-primary text-xl">favorite</span>
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">Cardiology</span>
                        </label>
                        <label className="flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors group">
                            <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                            <span className="material-symbols-outlined text-primary text-xl">face</span>
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">Dermatology</span>
                        </label>
                        <label className="flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors group">
                            <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                            <span className="material-symbols-outlined text-primary text-xl">child_care</span>
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">Pediatrics</span>
                        </label>
                        <label className="flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors group">
                            <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                            <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">Neurology</span>
                        </label>
                        <label className="flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors group">
                            <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                            <span className="material-symbols-outlined text-primary text-xl">visibility</span>
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">Ophthalmology</span>
                        </label>
                        <label className="flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors group">
                            <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                            <span className="material-symbols-outlined text-primary text-xl">dentistry</span>
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">Dental</span>
                        </label>
                        <label className="flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors group">
                            <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                            <span className="material-symbols-outlined text-primary text-xl">medical_services</span>
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">General Medicine</span>
                        </label>
                        <label className="flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors group">
                            <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                            <span className="material-symbols-outlined text-primary text-xl">skeleton</span>
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">Orthopedics</span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-bold uppercase tracking-wider text-text-light-secondary">Availability</p>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                        <span className="text-sm group-hover:text-primary transition-colors">Available Today</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                        <span className="text-sm group-hover:text-primary transition-colors">Available This Week</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                        <span className="text-sm group-hover:text-primary transition-colors">Weekends Only</span>
                    </label>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-bold uppercase tracking-wider text-text-light-secondary">Consultation Type</p>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                        <span className="text-sm group-hover:text-primary transition-colors">Video Consultation</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                        <span className="text-sm group-hover:text-primary transition-colors">In-Clinic Visit</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                        <span className="text-sm group-hover:text-primary transition-colors">Home Visit</span>
                    </label>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-bold uppercase tracking-wider text-text-light-secondary">Doctor's Gender</p>
                    <div className="flex gap-2">
                        <button className="flex-1 py-2 text-sm font-medium border border-border-light dark:border-border-dark rounded-lg hover:border-primary hover:text-primary transition-colors bg-background-light dark:bg-background-dark">Male</button>
                        <button className="flex-1 py-2 text-sm font-medium border border-border-light dark:border-border-dark rounded-lg hover:border-primary hover:text-primary transition-colors bg-background-light dark:bg-background-dark">Female</button>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-bold uppercase tracking-wider text-text-light-secondary">Insurance Accepted</p>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light-secondary text-sm">search</span>
                        <input className="w-full pl-9 pr-3 py-2 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-xs" placeholder="Search provider..." type="text" />
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer group mt-2">
                        <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                        <span className="text-sm group-hover:text-primary transition-colors">Aetna</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                        <span className="text-sm group-hover:text-primary transition-colors">Blue Cross</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="rounded text-primary focus:ring-primary border-border-light" type="checkbox" />
                        <span className="text-sm group-hover:text-primary transition-colors">UnitedHealthcare</span>
                    </label>
                </div>
            </div>
        </aside>
    )
}

export default Aside