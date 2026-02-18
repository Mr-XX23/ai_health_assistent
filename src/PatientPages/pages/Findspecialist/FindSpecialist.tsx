import React from 'react'
import PatientLayout from '../../../layout/PatientLayout/PatientLayout'
import Aside from './Aside'

const FindSpecialist = () => {
    return (
        <PatientLayout>
                    <main className="flex-1 flex flex-col h-screen overflow-hidden dark:text-secondary">
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark px-8 py-4 bg-card-light dark:bg-card-dark shrink-0">
                            <div className="flex flex-col">
                                <p className="text-2xl font-bold tracking-tight">Find a Specialist</p>
                                <p className="text-base font-normal text-text-light-secondary dark:text-text-dark-secondary">Search and filter top healthcare providers.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="relative flex items-center justify-center rounded-full h-10 w-10 bg-background-light dark:bg-background-dark hover:bg-primary/10 transition-colors">
                                    <span className="material-symbols-outlined ">notifications</span>
                                    <span className="absolute top-1 right-1.5 flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                                    </span>
                                </button>
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDwKLN-DIyGLSsHJVAT6wcoiINFinPdz7BjtIxSlSoatnO-Gfeu0FQgjR8_QNm01ipL6izejmiRO6_-qHMq2-3INDcOzrekGh5oSuMxhEgNLeRK8RwIoVA0Qj9oBafv_zNAx2CItZ6Az6ZAAV4yK70LWrYDyIRGsh4WBu8XFwKSvrBMCHCcK9h85u6WbiHlDSoINFuipHkoBd9Ih2n-Ez6N6ZuexvyzAx8pRnsmu5RONGjVWWUdSUUbfpYeF8b1ABKeCZc3ufCAZ4fB)]"></div>
                            </div>
                        </header>
                        <div className="bg-card-light dark:bg-card-dark border-b border-border-light dark:border-border-dark px-8 py-6 shrink-0">
                            <div className="max-w-4xl mx-auto flex items-center gap-4">
                                <div className="relative flex-1">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-light-secondary">search</span>
                                    <input className="w-full pl-12 pr-4 py-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-base focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="Search by name, specialty, or condition..." type="text" />
                                </div>
                                <div className="relative w-64">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-light-secondary">location_on</span>
                                    <input className="w-full pl-12 pr-4 py-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-base focus:ring-2 focus:ring-primary/50" placeholder="Location" type="text" value="New York, NY" />
                                </div>
                                <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">Search</button>
                            </div>
                        </div>
                        <div className="flex-1 flex overflow-hidden">

                            <Aside />

                            <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark custom-scrollbar p-8">
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold">124 Specialists available</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-text-light-secondary font-medium">Sort by:</span>
                                            <select className="text-sm font-bold border-none bg-transparent focus:ring-0 cursor-pointer">
                                                <option>Recommended</option>
                                                <option>Top Rated</option>
                                                <option>Experience (High to Low)</option>
                                                <option>Price (Low to High)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                        <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-border-light dark:border-border-dark p-6 dark:hover:border-white hover:shadow-lg transition-all">
                                            <div className="flex gap-6">
                                                <div className="relative shrink-0">
                                                    <div className="w-24 h-24 rounded-2xl bg-center bg-cover border-2 border-white  bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuBXgdR9fgxacnA8bv-FOXrmQl3rngBtUSt3sVHP-7x1lh9acKjucsLtemUYApawkGcdjSJ_HQT3zu68yWpnlP2XhD53h007Q7mRs_voOLnjONn5L8nfg5r3SF1fxBeKrKbRKGMPL3WEOWPE72AxijFI-kbihju6BFbanVtdVYp-KQOLhd6c6GB9kR3rkK8cFxWCOngi_vh2HdDZWj2NGShV5u9pAOHxhzHlCxGHCew54tH4-Pz11_NHxTyUz3imp-2nxc24VsIZ4ZS0)]"></div>
                                                    <div className="absolute -top-2 -left-2 bg-secondary px-2 py-0.5 rounded text-[10px] font-bold text-white flex items-center gap-1 shadow-sm">
                                                        <span className="material-symbols-outlined text-[12px] fill">star</span> 4.9
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-bold text-lg">Dr. Sarah Johnson</h4>
                                                            <p className="text-sm text-primary font-medium">Cardiology Specialist</p>
                                                        </div>
                                                        <button className="text-text-light-secondary hover:text-accent transition-colors">
                                                            <span className="material-symbols-outlined">favorite</span>
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-3">
                                                        <div className="flex items-center gap-1 text-sm text-text-light-secondary">
                                                            <span className="material-symbols-outlined text-sm">work_history</span>
                                                            <span>12 Years Exp.</span>
                                                        </div>
                                                        <div className="flex items-center gap-1 text-sm text-text-light-secondary">
                                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                                            <span>0.8 miles</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        <span className="px-2 py-1 bg-background-light dark:bg-background-dark text-[11px] font-semibold text-text-light-primary rounded-md">Video Consult</span>
                                                        <span className="px-2 py-1 bg-background-light dark:bg-background-dark text-[11px] font-semibold text-text-light-primary rounded-md">In-Clinic</span>
                                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-md">Available Today</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 mt-6 pt-6 border-t border-border-light dark:border-border-dark">
                                                <button className="flex-1 py-2.5 text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors">View Profile</button>
                                                <button className="flex-1 py-2.5 text-sm font-bold bg-primary text-white rounded-xl hover:opacity-90 shadow-lg shadow-primary/20 transition-opacity">Book Appointment</button>
                                            </div>
                                        </div>
                                        <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-border-light dark:border-border-dark p-6 dark:hover:border-white hover:shadow-lg transition-all">
                                            <div className="flex gap-6">
                                                <div className="relative shrink-0">
                                                    <div className="w-24 h-24 rounded-2xl bg-center bg-cover border-2 border-white dark:border-border-dark bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDwKLN-DIyGLSsHJVAT6wcoiINFinPdz7BjtIxSlSoatnO-Gfeu0FQgjR8_QNm01ipL6izejmiRO6_-qHMq2-3INDcOzrekGh5oSuMxhEgNLeRK8RwIoVA0Qj9oBafv_zNAx2CItZ6Az6ZAAV4yK70LWrYDyIRGsh4WBu8XFwKSvrBMCHCcK9h85u6WbiHlDSoINFuipHkoBd9Ih2n-Ez6N6ZuexvyzAx8pRnsmu5RONGjVWWUdSUUbfpYeF8b1ABKeCZc3ufCAZ4fB)]"></div>
                                                    <div className="absolute -top-2 -left-2 bg-secondary px-2 py-0.5 rounded text-[10px] font-bold text-white flex items-center gap-1 shadow-sm">
                                                        <span className="material-symbols-outlined text-[12px] fill">star</span> 4.8
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-bold text-lg">Dr. Michael Chen</h4>
                                                            <p className="text-sm text-primary font-medium">Primary Care &amp; General Medicine</p>
                                                        </div>
                                                        <button className="text-text-light-secondary hover:text-accent transition-colors">
                                                            <span className="material-symbols-outlined">favorite</span>
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-3">
                                                        <div className="flex items-center gap-1 text-sm text-text-light-secondary">
                                                            <span className="material-symbols-outlined text-sm">work_history</span>
                                                            <span>8 Years Exp.</span>
                                                        </div>
                                                        <div className="flex items-center gap-1 text-sm text-text-light-secondary">
                                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                                            <span>1.2 miles</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        <span className="px-2 py-1 bg-background-light dark:bg-background-dark text-[11px] font-semibold text-text-light-primary rounded-md">Video Consult</span>
                                                        <span className="px-2 py-1 bg-background-light dark:bg-background-dark text-[11px] font-semibold text-text-light-primary rounded-md">In-Clinic</span>
                                                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-[11px] font-bold rounded-md">Available Tomorrow</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 mt-6 pt-6 border-t border-border-light dark:border-border-dark">
                                                <button className="flex-1 py-2.5 text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors">View Profile</button>
                                                <button className="flex-1 py-2.5 text-sm font-bold bg-primary text-white rounded-xl hover:opacity-90 shadow-lg shadow-primary/20 transition-opacity">Book Appointment</button>
                                            </div>
                                        </div>
                                        <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-border-light dark:border-border-dark p-6 dark:hover:border-white hover:shadow-lg transition-all">
                                            <div className="flex gap-6">
                                                <div className="relative shrink-0">
                                                    <div className="w-24 h-24 rounded-2xl bg-center bg-cover border-2 border-white dark:border-border-dark bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuBXgdR9fgxacnA8bv-FOXrmQl3rngBtUSt3sVHP-7x1lh9acKjucsLtemUYApawkGcdjSJ_HQT3zu68yWpnlP2XhD53h007Q7mRs_voOLnjONn5L8nfg5r3SF1fxBeKrKbRKGMPL3WEOWPE72AxijFI-kbihju6BFbanVtdVYp-KQOLhd6c6GB9kR3rkK8cFxWCOngi_vh2HdDZWj2NGShV5u9pAOHxhzHlCxGHCew54tH4-Pz11_NHxTyUz3imp-2nxc24VsIZ4ZS0)]"></div>
                                                    <div className="absolute -top-2 -left-2 bg-secondary px-2 py-0.5 rounded text-[10px] font-bold text-white flex items-center gap-1 shadow-sm">
                                                        <span className="material-symbols-outlined text-[12px] fill">star</span> 5.0
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-bold text-lg">Dr. Emily Watson</h4>
                                                            <p className="text-sm text-primary font-medium">Dermatology Specialist</p>
                                                        </div>
                                                        <button className="text-accent hover:scale-110 transition-transform">
                                                            <span className="material-symbols-outlined fill">favorite</span>
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-3">
                                                        <div className="flex items-center gap-1 text-sm text-text-light-secondary">
                                                            <span className="material-symbols-outlined text-sm">work_history</span>
                                                            <span>15 Years Exp.</span>
                                                        </div>
                                                        <div className="flex items-center gap-1 text-sm text-text-light-secondary">
                                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                                            <span>2.4 miles</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        <span className="px-2 py-1 bg-background-light dark:bg-background-dark text-[11px] font-semibold text-text-light-primary rounded-md">In-Clinic Only</span>
                                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-md">Available Today</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 mt-6 pt-6 border-t border-border-light dark:border-border-dark">
                                                <button className="flex-1 py-2.5 text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors">View Profile</button>
                                                <button className="flex-1 py-2.5 text-sm font-bold bg-primary text-white rounded-xl hover:opacity-90 shadow-lg shadow-primary/20 transition-opacity">Book Appointment</button>
                                            </div>
                                        </div>
                                        <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-border-light dark:border-border-dark p-6 dark:hover:border-white hover:shadow-lg transition-all">
                                            <div className="flex gap-6">
                                                <div className="relative shrink-0">
                                                    <div className="w-24 h-24 rounded-2xl bg-gray-200 dark:bg-border-dark flex items-center justify-center text-text-light-secondary border-2 border-white dark:border-border-dark">
                                                        <span className="material-symbols-outlined text-4xl">person</span>
                                                    </div>
                                                    <div className="absolute -top-2 -left-2 bg-secondary px-2 py-0.5 rounded text-[10px] font-bold text-white flex items-center gap-1 shadow-sm">
                                                        <span className="material-symbols-outlined text-[12px] fill">star</span> 4.7
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-bold text-lg">Dr. Alan Turing</h4>
                                                            <p className="text-sm text-primary font-medium">Neurologist</p>
                                                        </div>
                                                        <button className="text-text-light-secondary hover:text-accent transition-colors">
                                                            <span className="material-symbols-outlined">favorite</span>
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-3">
                                                        <div className="flex items-center gap-1 text-sm text-text-light-secondary">
                                                            <span className="material-symbols-outlined text-sm">work_history</span>
                                                            <span>20 Years Exp.</span>
                                                        </div>
                                                        <div className="flex items-center gap-1 text-sm text-text-light-secondary">
                                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                                            <span>3.1 miles</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        <span className="px-2 py-1 bg-background-light dark:bg-background-dark text-[11px] font-semibold text-text-light-primary rounded-md">Video Consult</span>
                                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-md">Available Today</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 mt-6 pt-6 border-t border-border-light dark:border-border-dark">
                                                <button className="flex-1 py-2.5 text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors">View Profile</button>
                                                <button className="flex-1 py-2.5 text-sm font-bold bg-primary text-white rounded-xl hover:opacity-90 shadow-lg shadow-primary/20 transition-opacity">Book Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-2 mt-8 py-4">
                                        <button className="w-10 h-10 rounded-lg border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors disabled:opacity-50" disabled>
                                            <span className="material-symbols-outlined">chevron_left</span>
                                        </button>
                                        <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold flex items-center justify-center">1</button>
                                        <button className="w-10 h-10 rounded-lg border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">2</button>
                                        <button className="w-10 h-10 rounded-lg border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">3</button>
                                        <span className="mx-2 text-text-light-secondary">...</span>
                                        <button className="w-10 h-10 rounded-lg border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">12</button>
                                        <button className="w-10 h-10 rounded-lg border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
        </PatientLayout>
    )
}

export default FindSpecialist