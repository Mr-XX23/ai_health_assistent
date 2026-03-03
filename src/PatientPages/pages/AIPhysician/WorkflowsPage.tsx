
import React from 'react';
import { useNavigate } from 'react-router-dom';
import VaidyaSidebar from '../../../components/AIPhysician/VaidyaSidebar';

interface Workflow {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  badge?: string;
  icons: React.ReactNode;
  accentClass: string;
  bgClass: string;
  borderClass: string;
}

const WORKFLOWS: Workflow[] = [
  {
    id: 'symptom-check',
    title: 'Symptom Checker',
    description: 'Describe your symptoms and get an AI-powered triage assessment.',
    longDescription: 'Our symptom analysis agent asks targeted questions, assesses urgency, and gives you a prioritised action plan.',
    badge: 'Most Used',
    accentClass: 'text-primary',
    bgClass: 'bg-primary/10',
    borderClass: 'border-primary/30 hover:border-primary',
    icons: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    ),
  },
  {
    id: 'medication-review',
    title: 'Medication Review',
    description: 'Check for drug interactions and get details about your medications.',
    longDescription: 'Input your current medications and our AI pharmacy agent flags potential interactions and advises on safe usage.',
    accentClass: 'text-accent',
    bgClass: 'bg-accent/10',
    borderClass: 'border-accent/30 hover:border-accent',
    icons: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    ),
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care',
    description: 'Personalised screening, vaccination, and lifestyle recommendations.',
    longDescription: 'Our preventive care agent analyses your medical history and demographics to create a tailored wellness plan.',
    accentClass: 'text-emerald-500',
    bgClass: 'bg-emerald-500/10',
    borderClass: 'border-emerald-500/30 hover:border-emerald-500',
    icons: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
  {
    id: 'find-specialist',
    title: 'Find a Specialist',
    description: 'Locate nearby healthcare providers and specialists for your condition.',
    longDescription: 'Tell us what type of care you need and your location — our provider locator agent finds the best-matched professionals near you.',
    accentClass: 'text-sky-500',
    bgClass: 'bg-sky-500/10',
    borderClass: 'border-sky-500/30 hover:border-sky-500',
    icons: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    id: 'medical-history',
    title: 'Medical History',
    description: 'Review your medical history and past consultations with Vaidya.',
    longDescription: 'Our history agent retrieves and summarises your previous health interactions, giving you a complete picture of your health journey.',
    accentClass: 'text-violet-500',
    bgClass: 'bg-violet-500/10',
    borderClass: 'border-violet-500/30 hover:border-violet-500',
    icons: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    id: 'mental-health',
    title: 'Mental Wellness',
    description: 'Talk to Vaidya about stress, anxiety, and mental well-being.',
    longDescription: 'A safe, confidential space to discuss mental health concerns. Vaidya provides evidence-based coping strategies and refers you to professionals when needed.',
    badge: 'Confidential',
    accentClass: 'text-rose-500',
    bgClass: 'bg-rose-500/10',
    borderClass: 'border-rose-500/30 hover:border-rose-500',
    icons: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

const WorkflowsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectWorkflow = (workflowId: string) => {
    navigate(`/ai-physician?workflow=${workflowId}`);
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      {/* Sidebar */}
      <VaidyaSidebar
        onNewChat={() => navigate('/ai-physician')}
        onLoadSession={(sessionId) => navigate('/ai-physician')}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0 bg-white dark:bg-background-dark overflow-y-auto">
        <div className="max-w-4xl mx-auto w-full px-6 py-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
              Workflows
            </h1>
            <p className="text-subtext-light dark:text-subtext-dark">
              Choose a focused health workflow to start a specialised conversation with Vaidya.
            </p>
          </div>

          {/* Workflow grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKFLOWS.map((wf) => (
              <button
                key={wf.id}
                onClick={() => handleSelectWorkflow(wf.id)}
                className={`
                  group relative text-left p-5 rounded-2xl border-2
                  bg-white dark:bg-gray-900
                  ${wf.borderClass}
                  transition-all duration-200 hover:shadow-lg
                `}
              >
                {/* Badge */}
                {wf.badge && (
                  <span className={`
                    absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full
                    ${wf.bgClass} ${wf.accentClass}
                  `}>
                    {wf.badge}
                  </span>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${wf.bgClass} flex items-center justify-center mb-4 transition-colors`}>
                  <svg className={`w-6 h-6 ${wf.accentClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {wf.icons}
                  </svg>
                </div>

                {/* Title & description */}
                <h3 className="font-semibold text-base text-text-light dark:text-text-dark mb-1">
                  {wf.title}
                </h3>
                <p className="text-sm text-subtext-light dark:text-subtext-dark leading-relaxed">
                  {wf.description}
                </p>

                {/* Hover detail */}
                <p className="text-xs text-subtext-light dark:text-subtext-dark mt-3 leading-relaxed
                              opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {wf.longDescription}
                </p>

                {/* Arrow */}
                <div className={`mt-4 flex items-center gap-1 text-xs font-medium ${wf.accentClass} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Start workflow
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          <p className="text-xs text-subtext-light dark:text-subtext-dark mt-8 text-center">
            ⚕️ Vaidya is an AI assistant and does not replace professional medical advice.
          </p>
        </div>
      </main>
    </div>
  );
};

export default WorkflowsPage;
