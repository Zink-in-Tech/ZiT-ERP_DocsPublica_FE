const SEO_BRAND_SUFFIX = /\s+\|\s+Zink ERP$/i;

export function stripSeoBrandSuffix(title: string): string {
  return title.replace(SEO_BRAND_SUFFIX, '').trim();
}

type DocTitleContext = {
  title: string;
  sidebarLabel?: string;
  displayTitle?: string;
};

export function getDocDisplayTitle({
  title,
  sidebarLabel,
  displayTitle,
}: DocTitleContext): string {
  if (displayTitle?.trim()) {
    return displayTitle.trim();
  }

  const stripped = stripSeoBrandSuffix(title);
  const label = sidebarLabel?.trim();

  if (label) {
    const labelNorm = label.toLowerCase();
    const strippedNorm = stripped.toLowerCase();

    if (
      strippedNorm.startsWith(labelNorm) &&
      stripped.length > label.length + 8
    ) {
      return label;
    }
  }

  const colonMatch = stripped.match(/^(.+?):\s+.+/);
  if (colonMatch) {
    const lead = colonMatch[1].trim();
    if (lead.length >= 12 && lead.length <= 48) {
      return lead;
    }
  }

  return stripped;
}

export function getDocTitleClass(title: string): string | undefined {
  if (title.length <= 36) {
    return 'doc-title--short';
  }
  if (title.length >= 52) {
    return 'doc-title--long';
  }
  return undefined;
}
