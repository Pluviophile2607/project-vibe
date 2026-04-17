import React from "react";

export function InteractiveHoverButton({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`group relative w-auto cursor-pointer overflow-hidden rounded-full border border-primary-container/30 bg-surface-container-low p-3 px-8 text-center font-headline font-bold text-lg text-on-surface ${className}`}
      {...props}
    >
      <div className="flex items-center justify-center gap-3">
        <div className="h-2.5 w-2.5 rounded-full bg-primary-container transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-100 text-on-primary-container">
        <span>{children}</span>
        <span className="material-symbols-outlined text-xl">arrow_forward</span>
      </div>
    </button>
  );
}
