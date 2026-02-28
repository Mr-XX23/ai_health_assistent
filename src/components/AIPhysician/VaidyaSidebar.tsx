/**
 * VaidyaSidebar
 * Expanded-by-default sidebar for the Vaidya AI Physician chat interface.
 * Collapsed: 64px icon-only strip.  Expanded: 288px full panel.
 */

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  getUserSessions,
  deleteSession,
  type SessionSummary,
} from '../../services/aiPhysicianService';


const IconMenu = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const IconChevronsLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7M18 19l-7-7 7-7" />
  </svg>
);
const IconPencil = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);
const IconWorkflows = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);
const IconTrash = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);
const IconHistory = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / 86_400_000);
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

interface VaidyaSidebarProps {
  onNewChat: () => void;
  onLoadSession: (sessionId: string, preview: string) => void;
  currentSessionId?: string | null;
  /** Increment to force a history refresh after a new message. */
  refreshTrigger?: number;
}

const VaidyaSidebar: React.FC<VaidyaSidebarProps> = ({
  onNewChat,
  onLoadSession,
  currentSessionId,
  refreshTrigger = 0,
}) => {
  const [expanded, setExpanded] = useState(true); // expanded by default
  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const confirmTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const isOnWorkflows = location.pathname === '/ai-physician/workflows';
  const isOnChat = location.pathname === '/ai-physician';

// Fetch history 
  const fetchHistory = useCallback(async () => {
    setIsLoadingHistory(true);
    try {
      const data = await getUserSessions(50, 0);
      setSessions(data.sessions);
    } catch {
      // non-critical
    } finally {
      setIsLoadingHistory(false);
    }
  }, []);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory, refreshTrigger]);

  // Delete session
  const requestDelete = useCallback((e: React.MouseEvent, sessionId: string) => {
    e.stopPropagation();
    setConfirmDeleteId(sessionId);
    if (confirmTimeoutRef.current) clearTimeout(confirmTimeoutRef.current);
    confirmTimeoutRef.current = setTimeout(() => setConfirmDeleteId(null), 3000);
  }, []);

  const cancelDelete = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setConfirmDeleteId(null);
    if (confirmTimeoutRef.current) clearTimeout(confirmTimeoutRef.current);
  }, []);

  const confirmDelete = useCallback(
    async (e: React.MouseEvent, sessionId: string) => {
      e.stopPropagation();
      setConfirmDeleteId(null);
      setDeletingId(sessionId);
      try {
        await deleteSession(sessionId);
        setSessions((prev) => prev.filter((s) => s.session_id !== sessionId));
        if (currentSessionId === sessionId) onNewChat();
      } catch {
        // silently fail
      } finally {
        setDeletingId(null);
      }
    },
    [currentSessionId, onNewChat]
  );

    
  const handleNewChat = useCallback(() => {
    if (!isOnChat) navigate('/ai-physician');
    onNewChat();
  }, [isOnChat, navigate, onNewChat]);

  const handleLoadSession = useCallback(
    (session: SessionSummary) => {
      if (!isOnChat) navigate('/ai-physician');
      onLoadSession(session.session_id, session.preview ?? 'Session');
    },
    [isOnChat, navigate, onLoadSession]
  );

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <aside
      className={`relative flex flex-col h-screen shrink-0 bg-[#0f151d]
        border-r border-slate-700/30 shadow-xl
        transition-[width] duration-300 ease-in-out
        ${expanded ? 'w-80' : 'w-20'}
      `}
    >

      {/* Header */}
      <div className={`flex items-center ${expanded ? 'justify-start' : 'justify-center'} h-16 px-3 border-b border-slate-700/60 shrink-0 gap-2 bg-linear-to-r from-slate-800/40 to-transparent backdrop-blur-sm `}>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-slate-400 hover:text-white hover:bg-slate-700/40 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10"
          title={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {expanded ? <IconChevronsLeft /> : <IconMenu />}
        </button>

        <div
          className={`flex items-center gap-3 overflow-hidden transition-[opacity,max-width] duration-300 ${expanded ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0'}`}
        >
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-purple-500
                          flex items-center justify-center shrink-0
                          shadow-lg  relative
                          before:absolute before:inset-0 before:rounded-full before:bg-linear-to-br before:from-blue-400 before:to-transparent before:opacity-0 before:group-hover:opacity-50 before:transition-opacity">
            <svg className="w-5 h-5 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-white text-xl tracking-wide whitespace-nowrap select-none block">
              Vaidya AI
            </span>
            <span className="text-sm text-blue-400/70 whitespace-nowrap select-none block">
              Assistant
            </span>
          </div>
        </div>
      </div>

      {/* ── Nav buttons ─────────────────────────────────────────────── */}
      <div className="px-3 pt-4 space-y-2 shrink-0">
        {/* New Chat */}
        <button
          onClick={handleNewChat}
          className={`
            group flex items-center gap-0 rounded-lg w-full text-slate-100 hover:text-white transition-all duration-200 
            bg-linear-to-r from-transparent to-transparent hover:from-blue-500/10 hover:to-blue-500/5
            ${expanded ? 'px-4 py-4 gap-3 border border-slate-700/30 hover:border-blue-500/40' : 'h-11 justify-center'}
            hover:shadow-lg hover:shadow-blue-500/10
          `}
          title="New Chat"
        >
          <span className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500/30 to-blue-600/20 group-hover:from-blue-500/50 group-hover:to-blue-600/40 flex items-center justify-center shrink-0 text-blue-400 group-hover:text-blue-300 transition-all duration-200 group-hover:shadow-blue-500/40">
            <IconPencil />
          </span>
          <span className={`text-sm font-semibold whitespace-nowrap overflow-hidden transition-[opacity,max-width] duration-300 ${expanded ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0'}`}>
            New Chat
          </span>
        </button>

        {/* Workflows */}
        <button
          onClick={() => navigate('/ai-physician/workflows')}
          className={`
            group flex items-center gap-0 rounded-lg w-full
            transition-all duration-200
            ${isOnWorkflows
              ? 'bg-linear-to-r from-purple-500/20 to-pink-500/10 text-purple-200 border-l-2 border-purple-500'
              : 'text-slate-400 hover:text-white hover:bg-linear-to-r hover:from-purple-500/10 hover:to-purple-500/5 border hover:shadow-sm hover:shadow-purple-500/10'}
            ${expanded ? 'px-4 py-4 gap-3 border-slate-700/30 hover:border-purple-500/40' : 'h-11 justify-center'}
          `}
          title="Workflows"
        >
          <span className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 shadow-lg bg-linear-to-br from-purple-500/40 to-pink-500/30 text-purple-300
                            ${isOnWorkflows
                              ? 'bg-linear-to-br from-purple-500/40 to-pink-500/30 text-purple-300'
                              : 'bg-slate-700/40 group-hover:bg-linear-to-br group-hover:from-purple-500/30 group-hover:to-pink-500/20 text-slate-400 group-hover:text-purple-300 group-hover:shadow-purple-500/20'}`}>
            <IconWorkflows />
          </span>
          <span className={`text-sm font-semibold whitespace-nowrap overflow-hidden
                            transition-[opacity,max-width] duration-300
                            ${expanded ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0'}`}>
            Workflows
          </span>
        </button>
      </div>

      {/* ── History ─────────────────────────────────────────────────── */}
      {expanded ? (
        <div className="flex flex-col flex-1 min-h-0 mt-6">
          {/* Section label */}
          <div className="flex items-center justify-between px-5 mb-3 shrink-0">
            <div>
              <span className="text-sm font-bold uppercase text-slate-400 block">
                History
              </span>
              <span className="text-sm text-slate-600 mt-0.5 block">Recent conversations</span>
            </div>
            {!isLoadingHistory && sessions.length > 0 && (
              <span className="text-xs font-bold text-blue-400 bg-blue-500/20 px-2.5 py-1 rounded-full">
                {sessions.length}
              </span>
            )}
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto px-3 pb-6 space-y-1.5 vaidya-scrollbar">
            {isLoadingHistory ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="px-3 py-3 rounded-lg animate-pulse bg-slate-800/30 border border-slate-700/20">
                  <div className="h-3 bg-slate-700 rounded-full w-4/5 mb-3" />
                  <div className="h-2 bg-slate-700/60 rounded-full w-2/5" />
                </div>
              ))
            ) : sessions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <div className="w-16 h-16 rounded-full bg-slate-800/60 border border-slate-700/40 flex items-center justify-center text-slate-600">
                  <IconHistory />
                </div>
                <div className="text-center">
                  <p className="text-lg text-slate-500 font-medium">No chats yet</p>
                  <p className="text-sm text-slate-700 mt-1">Start a conversation to see it here</p>
                </div>
              </div>
            ) : (
              sessions.map((session, idx) => {
                const isActive = currentSessionId === session.session_id;
                const isDeleting = deletingId === session.session_id;
                const isConfirming = confirmDeleteId === session.session_id;

                return (
                  <div
                    key={session.session_id}
                    className="relative group session-item-enter"
                    style={{ animationDelay: `${Math.min(idx * 25, 180)}ms` }}
                  >
                    <button
                      onClick={() => handleLoadSession(session)}
                      disabled={isDeleting}
                      className={`
                        w-full text-left px-4 py-3 rounded-lg
                        transition-all duration-150
                        border border-slate-700/20 backdrop-blur-sm
                        ${isActive
                          ? 'bg-linear-to-r from-blue-500/20 to-blue-500/10 text-white border-blue-500/40 shadow-md shadow-blue-500/20 ring-1 ring-inset ring-blue-500/50'
                          : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:border-slate-600/40 hover:shadow-lg hover:shadow-slate-500/10'}
                        ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    >
                      {/* Active left-bar */}
                      {isActive && (
                        <span className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg bg-linear-to-b from-blue-400 to-blue-600" />
                      )}

                      <div className="flex items-start justify-between">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold truncate leading-tight pr-6">
                            {session.preview ?? 'Chat session'}
                          </p>
                          <div className="flex items-center gap-2 mt-2 text-[11px]">
                            <span className={`px-2 py-0.5 rounded-full ${isActive ? 'bg-blue-500/30 text-blue-300' : 'bg-slate-700/40 text-slate-500'}`}>
                              {formatDate(session.updated_at)}
                            </span>
                            <span className={`${isActive ? 'text-slate-400' : 'text-slate-600'}`}>•</span>
                            <span className={`${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                              {session.message_count} msg
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Delete controls */}
                    {!isDeleting && (
                      <div className={`
                        absolute right-2 top-1/2 -translate-y-1/2
                        transition-opacity duration-150
                        ${isConfirming ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                      `}>
                        {isConfirming ? (
                          <div className="flex items-center gap-1 bg-slate-900/95 rounded-lg p-1 ring-1 ring-slate-700/50">
                            <button
                              onClick={(e) => confirmDelete(e, session.session_id)}
                              className="text-[10px] px-2 py-1 rounded-md
                                         bg-linear-to-r from-red-500/30 to-red-600/20 text-red-300 hover:from-red-500/50 hover:to-red-600/40
                                         transition-all duration-150 font-medium leading-none hover:shadow-lg hover:shadow-red-500/20"
                            >
                              Delete
                            </button>
                            <button
                              onClick={cancelDelete}
                              className="text-[10px] px-2 py-1 rounded-md
                                         bg-slate-700/40 text-slate-300 hover:bg-slate-700/60
                                         transition-all duration-150 leading-none"
                            >
                              No
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={(e) => requestDelete(e, session.session_id)}
                            className="w-7 h-7 rounded-md flex items-center justify-center
                                       text-slate-500 hover:text-red-400 hover:bg-red-500/15
                                       transition-all duration-150 hover:shadow-lg hover:shadow-red-500/20"
                            title="Delete chat"
                          >
                            <IconTrash />
                          </button>
                        )}
                      </div>
                    )}

                    {/* Spinner while deleting */}
                    {isDeleting && (
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 border-2 border-slate-600 border-t-blue-500
                                        rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      ) : (
        /* Collapsed: icon to re-expand */
        <div className="px-2.5 pt-3 shrink-0">
          <button
            onClick={() => setExpanded(true)}
            className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto text-slate-500 hover:text-white bg-slate-700/40 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10"
            title="View history"
          >
            <IconHistory />
          </button>
        </div>
      )}
    </aside>
  );
};

export default VaidyaSidebar;
