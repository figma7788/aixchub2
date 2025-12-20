import React, { memo, useEffect, useRef, CSSProperties } from 'react';

// 1. GLOBAL TYPE DECLARATION: Use 'any' to act as a catch-all for the Custom Element.
// This is the standard TypeScript fix for "Property 'x' does not exist on type 'JSX.IntrinsicElements'".
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

interface SplineWrapperProps {
  scene: string;
  className?: string;
  interactive?: boolean;
}

export const SplineWrapper = memo(({ scene, className, interactive = false }: SplineWrapperProps) => {
  const viewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const SCRIPT_URL = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
    
    // Script loading
    if (!document.querySelector(`script[src="${SCRIPT_URL}"]`)) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = SCRIPT_URL;
      script.onerror = (e) => console.error('Spline script failed to load:', e);
      document.head.appendChild(script);
    }

    // Capture the current ref value to ensure we clean up the correct element
    // even if the ref changes (best practice for effects with cleanup)
    const viewerElement = viewerRef.current;

    // Cleanup function
    return () => {
      if (viewerElement) {
        try {
          // Explicitly clear the URL to stop the engine and release WebGL context.
          // We remove the attribute instead of setting to empty string to avoid 404/fetch errors.
          viewerElement.removeAttribute('url');
        } catch (e) {
          // Ignore errors during teardown
        }
      }
    };
  }, []);

  const viewerStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'block',
    backgroundColor: 'transparent',
    pointerEvents: interactive ? 'auto' : 'none',
  };

  return (
    <div className={`relative w-full h-full ${className || ''}`}>
      <div className="w-full h-full">
        {/* 
          @ts-ignore 
          Suppress any remaining TS errors for the custom element tag locally 
        */}
        <spline-viewer 
          ref={viewerRef}
          url={scene}
          style={viewerStyle} 
        />
      </div>
    </div>
  );
});
