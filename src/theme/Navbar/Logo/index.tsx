import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig} from '@docusaurus/theme-common';
import ZinkErpLogo from '@site/src/components/ZinkErpLogo';

/**
 * Navbar brand: lockup del kit A1; símbolo si el ancho calculado del lockup < ~100 px.
 */
export default function NavbarLogo(): React.ReactNode {
  const {
    navbar: {logo},
  } = useThemeConfig();
  const logoLink = useBaseUrl(logo?.href || '/');
  const alt = logo?.alt ?? 'ZinkERP';
  const height =
    typeof logo?.height === 'number'
      ? logo.height
      : typeof logo?.height === 'string'
        ? Number.parseFloat(logo.height) || 36
        : 36;

  return (
    <Link
      to={logoLink}
      className="navbar__brand"
      {...(logo?.target && {target: logo.target})}>
      <div className="navbar__logo">
        <ZinkErpLogo alt={alt} height={height} mark="auto" variant="auto" />
      </div>
    </Link>
  );
}
