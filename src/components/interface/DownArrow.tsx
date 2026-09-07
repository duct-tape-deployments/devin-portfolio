import { useState } from 'react';

type ArrowState = 'default' | 'hover' | 'pressed' | 'focused' | 'disabled';

const arrowImages = {
  default: '/down-arrow-default.svg',
  hover: '/down-arrow-hover.svg',
  pressed: '/down-arrow-pressed.svg',
  focused: '/down-arrow-focused.svg',
  disabled: '/down-arrow-disabled.svg',
} as const;

export function DownArrow({ disabled = false }: { disabled?: boolean }) {
  const [state, setState] = useState<ArrowState>(disabled ? 'disabled' : 'default');

  return (
    <img
      src={arrowImages[state]}
      alt=""
      className=""
      onMouseEnter={() => !disabled && setState('hover')}
      onMouseLeave={() => !disabled && setState('default')}
      onMouseDown={() => !disabled && setState('pressed')}
      onMouseUp={() => !disabled && setState('hover')}
      onFocus={() => !disabled && setState('focused')}
      onBlur={() => !disabled && setState('default')}
    />
  );
}
