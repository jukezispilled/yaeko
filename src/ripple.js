import React from 'react';

const MAIN_CIRCLE_SIZE = 200;
const MAIN_CIRCLE_OPACITY = 0.44;
const NUM_CIRCLES = 34;

const Ripple = React.memo(() => {
  return (
    <div className="absolute left-1/2 top-1/2 h-full w-full overflow-visible">
      {Array.from({ length: NUM_CIRCLES }, (_, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-blue-500"
          style={{
            width: MAIN_CIRCLE_SIZE + i * 80,
            height: MAIN_CIRCLE_SIZE + i * 80,
            opacity: MAIN_CIRCLE_OPACITY - i * 0.03,
            animationDelay: `${i * 0.06}s`
          }}
        ></div>
      ))}
    </div>
  );
});

Ripple.displayName = 'Ripple';

export default Ripple;