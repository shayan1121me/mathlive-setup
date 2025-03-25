import React, { useEffect, useRef } from 'react';
import 'mathlive';
import 'mathlive/static.css';

function App() {
  const mathFieldRef = useRef(null);

  useEffect(() => {
    const mathField = mathFieldRef.current;
    if (mathField) {
      mathField.setOptions({
        virtualKeyboardMode: 'onfocus',
        virtualKeyboardTheme: 'material',
        smartFence: true,
        keypressSound: 'none',
        smartMode: true, // Allows switching between math and text automatically
      });
    }
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🧮 MathLive Keyboard Example</h1>

      <math-field
        ref={mathFieldRef}
        style={{
          width: '100%',
          fontSize: '1.5rem',
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
      />

      {/* ✅ Helpful tip below the field */}
      <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.5rem' }}>
        💡 <strong>Tip:</strong> If typing doesn't work right away, press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to re-activate the input.
      </p>
    </div>
  );
}

export default App;
