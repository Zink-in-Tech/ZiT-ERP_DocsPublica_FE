import React, {type ReactNode, useMemo} from 'react';
import Link from '@docusaurus/Link';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import {
  findFirstSidebarItemLink,
  useSidebarBreadcrumbs,
} from '@docusaurus/plugin-content-docs/client';
import type {PropSidebarItemCategory} from '@docusaurus/plugin-content-docs';

import DocPageShare from '../DocPageShare';
import styles from './styles.module.css';

type SectionChip = {
  label: string;
  href: string;
};

function useSectionChip(): SectionChip | null {
  const breadcrumbs = useSidebarBreadcrumbs();

  return useMemo(() => {
    if (!breadcrumbs?.length) {
      return null;
    }

    const categories = breadcrumbs.filter(
      (item): item is PropSidebarItemCategory => item.type === 'category',
    );

    const category = categories.at(-1);
    if (!category) {
      return null;
    }

    const href =
      category.href ?? findFirstSidebarItemLink(category) ?? undefined;

    if (!href) {
      return null;
    }

    return {label: category.label, href};
  }, [breadcrumbs]);
}

export default function DocArticleMeta(): ReactNode {
  const section = useSectionChip();

  return (
    <header className={styles.articleMeta}>
      <div className={styles.metaRow}>
        <div className={styles.metaPrimary}>
          <DocBreadcrumbs />
          {section && (
            <Link to={section.href} className={styles.sectionChip}>
              {section.label}
            </Link>
          )}
        </div>
        <DocPageShare />
      </div>
      <div className={styles.metaDivider} aria-hidden="true" />
    </header>
  );
}
