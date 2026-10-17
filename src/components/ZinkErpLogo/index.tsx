import type {CSSProperties} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

/** Ancho del lockup horizontal a altura 1 (viewBox 456×150). */
const LOCKUP_ASPECT = 456 / 150;
/** Debajo de ~100 px de ancho del lockup, usar solo el símbolo (kit LEEME / ZIT-2277). */
const LOCKUP_MIN_WIDTH_PX = 100;

export type ZinkErpLogoProps = {
  /** Altura en px del logo (lockup o símbolo). Default 36. */
  height?: number;
  /**
   * `auto`: light/dark según tema.
   * `light` / `dark`: fuerza la variante del lockup.
   */
  variant?: 'auto' | 'light' | 'dark';
  /**
   * `auto`: lockup si el ancho calculado ≥ 100 px; si no, símbolo.
   * `lockup` / `symbol`: fuerza.
   */
  mark?: 'auto' | 'lockup' | 'symbol';
  alt?: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * Logo ZinkERP del kit oficial (SVG a curvas). No usar tipografía Montserrat para el wordmark.
 */
export default function ZinkErpLogo({
  height = 36,
  variant = 'auto',
  mark = 'auto',
  alt = 'ZinkERP',
  className,
  style,
}: ZinkErpLogoProps) {
  const {colorMode} = useColorMode();
  const logoLight = useBaseUrl('/img/brand/zinkerp-horizontal_light.svg');
  const logoDark = useBaseUrl('/img/brand/zinkerp-horizontal_dark.svg');
  const logoSymbol = useBaseUrl('/img/brand/zinkerp-symbol.svg');

  const useDarkLockup =
    variant === 'dark' || (variant === 'auto' && colorMode === 'dark');

  const lockupWidth = height * LOCKUP_ASPECT;
  const useSymbol =
    mark === 'symbol' || (mark === 'auto' && lockupWidth < LOCKUP_MIN_WIDTH_PX);

  if (useSymbol) {
    const symbolWidth = height * (184 / 244);
    return (
      <img
        src={logoSymbol}
        alt={alt}
        className={className}
        width={symbolWidth}
        height={height}
        style={{display: 'block', objectFit: 'contain', ...style}}
      />
    );
  }

  return (
    <img
      src={useDarkLockup ? logoDark : logoLight}
      alt={alt}
      className={className}
      width={lockupWidth}
      height={height}
      style={{display: 'block', objectFit: 'contain', ...style}}
    />
  );
}
