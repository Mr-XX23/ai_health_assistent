
const MidContent = () => {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">The AI Analysis Process</h2>
                    <p className="mt-4 text-lg text-light">Our AI follows a systematic, multi-stage process to ensure every analysis is thorough, accurate, and contextually aware, transforming raw data into actionable clinical insights.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                    <div className="absolute top-10 left-0 right-0 h-1 hidden md:block">
                        <svg className="w-full" preserveAspectRatio="none" viewBox="0 0 100 1">
                            <line className="stroke-current text-slate-300" stroke-dasharray="4 4" stroke-width="2" x1="0" x2="100" y1="0.5" y2="0.5"></line>
                        </svg>
                    </div>
                    <div className="flex flex-col items-center relative z-10">
                        <div className="flex items-center justify-center size-20 rounded-full bg-primary text-white border-8 border-slate-50">
                            <span className="material-symbols-outlined text-3xl">input</span>
                        </div>
                        <h3 className="mt-6 text-xl font-bold">1. Secure Data Ingestion</h3>
                        <p className="mt-2 text-gray">Encrypted patient data, symptoms, and medical history are securely uploaded into the system via our patient portal or EHR integration.</p>
                    </div>
                    <div className="flex flex-col items-center relative z-10">
                        <div className="flex items-center justify-center size-20 rounded-full bg-primary text-white border-8 border-slate-50">
                            <span className="material-symbols-outlined text-3xl">psychology</span>
                        </div>
                        <h3 className="mt-6 text-xl font-bold">2. Multi-Model Analysis</h3>
                        <p className="mt-2 text-gray">Data is processed through a cascade of specialized AI models, including NLP for context and predictive algorithms for risk assessment.</p>
                    </div>
                    <div className="flex flex-col items-center relative z-10">
                        <div className="flex items-center justify-center size-20 rounded-full bg-primary text-white border-8 border-slate-50">
                            <span className="material-symbols-outlined text-3xl">rule</span>
                        </div>
                        <h3 className="mt-6 text-xl font-bold">3. Clinical Validation</h3>
                        <p className="mt-2 text-gray">The AI's findings are cross-referenced with established clinical guidelines and evidence-based medicine to ensure reliability and relevance.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MidContent