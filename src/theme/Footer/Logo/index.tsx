import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/Footer/Logo';
import ZinkErpLogo from '@site/src/components/ZinkErpLogo';
import styles from './styles.module.css';

function LogoImage({logo}: {logo: NonNullable<Props['logo']>}): React.ReactNode {
  const height =
    typeof logo.height === 'number'
      ? logo.height
      : typeof logo.height === 'string'
        ? Number.parseFloat(logo.height) || 36
        : 36;

  return (
    <ZinkErpLogo
      className={clsx('footer__logo', logo.className)}
      alt={logo.alt ?? 'ZinkERP'}
      height={height}
      mark="auto"
      variant="auto"
      style={logo.style}
    />
  );
}

export default function FooterLogo({logo}: Props): React.ReactNode {
  return logo.href ? (
    <Link
      href={logo.href}
      className={styles.footerLogoLink}
      target={logo.target}>
      <LogoImage logo={logo} />
    </Link>
  ) : (
    <LogoImage logo={logo} />
  );
}
