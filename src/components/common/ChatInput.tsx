
import React, { useState, useRef, type KeyboardEvent } from 'react';
import {
  Plus, SlidersHorizontal, Sparkles, Mic, ArrowRight, Loader2,
} from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
  variant?: 'bottom' | 'hero';
}

// const HERO_TOOLS = [
//   { name: 'GitHub', label: 'GH', bg: 'rgba(255,255,255,0.07)',  color: 'rgba(255,255,255,0.78)' },
//   { name: 'Gmail',  label: 'GM', bg: 'rgba(234,67,53,0.2)',     color: '#ea4335' },
//   { name: 'Drive',  label: 'GD', bg: 'rgba(66,133,244,0.2)',    color: '#4285f4' },
//   { name: 'Notion', label: 'No', bg: 'rgba(255,255,255,0.07)',  color: 'rgba(255,255,255,0.78)' },
// ];

const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  disabled = false,
  placeholder = 'Type your message...',
  variant = 'bottom',
}) => {
  const [message, setMessage] = useState('');
  // const [showTools, setShowTools] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  /* ── Hero variant — Manus/Vaidya unified card ──────────────── */
  if (variant === 'hero') {
    const iconBtn =
      'w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150 ' +
      'text-[rgba(255,255,255,0.35)] hover:text-[rgba(255,255,255,0.75)] hover:bg-[rgba(255,255,255,0.07)]';

    const sendActive = message.trim() && !disabled;

    return (
      <div className="vaidya-input-hero w-full overflow-hidden">

        {/* ── Textarea area ────────────────────────────────────── */}
        <div className="px-5 pt-4 pb-3">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={placeholder}
            rows={2}
            className="w-full bg-transparent resize-none outline-none leading-relaxed
                       text-white text-lg
                       placeholder-[rgba(255,255,255,0.3)]
                       disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ maxHeight: '200px' }}
          />
        </div>

        {/* ── Icon toolbar ─────────────────────────────────────── */}
        <div className="flex items-center justify-between px-3 pb-2.5">
          {/* Left: + · sliders · sparkle */}
          <div className="flex items-center gap-0.5">
            <button type="button" className={iconBtn} title="Add">
              <Plus size={19} />
            </button>
            <button type="button" className={iconBtn} title="Tools">
              <SlidersHorizontal size={18} />
            </button>
            <button type="button" className={iconBtn} title="AI Agent">
              <Sparkles size={18} />
            </button>
          </div>

          {/* Right: emoji · mic · send */}
          <div className="flex items-center gap-1.5">
            {/* <button type="button" className={iconBtn} title="Emoji">
              <Smile size={18} />
            </button> */}
            <button type="button" className={iconBtn} title="Voice">
              <Mic size={18} />
            </button>
            {/* Send — filled circle */}
            <button
              type="button"
              onClick={handleSend}
              disabled={!sendActive}
              title="Send"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: sendActive ? 'linear-gradient(135deg,#005a9c,#0077cc)' : 'rgba(255,255,255,0.09)',
                boxShadow: sendActive ? '0 0 16px rgba(0,90,156,0.5)' : 'none',
                opacity: !sendActive && !disabled ? 0.55 : 1,
              }}
            >
              {disabled
                ? <Loader2 size={18} className="text-white animate-spin" />
                : <ArrowRight size={18} className="text-white" strokeWidth={2.5} />
              }
            </button>
          </div>
        </div>

        {/* ── Separator ────────────────────────────────────────── */}
      { /*   {showTools && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center justify-between px-4 py-2.5">
              <div className="flex items-center gap-2">
                <Wrench size={12} style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
                <span className="text-[11.5px] select-none" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Connect your tools to Vaidya
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {HERO_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    title={tool.name}
                    className="vaidya-tool-badge"
                    style={{ background: tool.bg, color: tool.color }}
                  >
                    {tool.label}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setShowTools(false)}
                  className={iconBtn + ' !w-6 !h-6'}
                  title="Dismiss"
                >
                  <X size={13} />
                </button>
              </div>
            </div>
          </div>
        )} 
        */ }
      </div>
    );
  }

  /* ── Bottom variant (default) ────────────────────────────────── */
  const iconBtn =
    'w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150 ' +
    'text-[rgba(255,255,255,0.35)] hover:text-[rgba(255,255,255,0.75)] hover:bg-[rgba(255,255,255,0.07)]';

  const sendActive = message.trim() && !disabled;

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark px-6 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="vaidya-input-hero w-full overflow-hidden">

          {/* ── Textarea area ───────────────────────────────────── */}
          <div className="px-5 pt-4 pb-3">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              placeholder={placeholder}
              rows={2}
              className="w-full bg-transparent resize-none outline-none leading-relaxed
                         text-white text-lg
                         placeholder-[rgba(255,255,255,0.3)]
                         disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ maxHeight: '200px' }}
            />
          </div>

          {/* ── Icon toolbar ─────────────────────────────────────── */}
          <div className="flex items-center justify-between px-3 pb-2.5">
            {/* Left: + · sliders · sparkle */}
            <div className="flex items-center gap-0.5">
              <button type="button" className={iconBtn} title="Add">
                <Plus size={19} />
              </button>
              <button type="button" className={iconBtn} title="Tools">
                <SlidersHorizontal size={18} />
              </button>
              <button type="button" className={iconBtn} title="AI Agent">
                <Sparkles size={18} />
              </button>
            </div>

            {/* Right: mic · send */}
            <div className="flex items-center gap-1.5">
              <button type="button" className={iconBtn} title="Voice">
                <Mic size={18} />
              </button>
              {/* Send — filled circle */}
              <button
                type="button"
                onClick={handleSend}
                disabled={!sendActive}
                title="Send"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: sendActive ? 'linear-gradient(135deg,#005a9c,#0077cc)' : 'rgba(255,255,255,0.09)',
                  boxShadow: sendActive ? '0 0 16px rgba(0,90,156,0.5)' : 'none',
                  opacity: !sendActive && !disabled ? 0.55 : 1,
                }}
              >
                {disabled
                  ? <Loader2 size={18} className="text-white animate-spin" />
                  : <ArrowRight size={18} className="text-white" strokeWidth={2.5} />
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
