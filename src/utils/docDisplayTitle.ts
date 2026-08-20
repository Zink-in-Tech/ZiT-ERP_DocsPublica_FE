const SEO_BRAND_SUFFIX = /\s+\|\s+Zink ERP$/i;
const DATE_HEADING =
  /^\d{1,2}\s+(?:ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)(?:\s+\d{4})?\b/i;

export function stripSeoBrandSuffix(title: string): string {
  return title.replace(SEO_BRAND_SUFFIX, '').trim();
}

function looksLikeDateHeading(value: string): boolean {
  return DATE_HEADING.test(value.trim());
}

/** Título de entrega: la parte descriptiva, sin el prefijo de fecha. */
export function getNovedadHeroTitle(title: string): string {
  const stripped = stripSeoBrandSuffix(title);
  const match = stripped.match(/^(.+?):\s+(.+)$/);
  if (match && looksLikeDateHeading(match[1])) {
    return match[2].trim();
  }
  return stripped;
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
      !looksLikeDateHeading(label) &&
      strippedNorm.startsWith(labelNorm) &&
      stripped.length > label.length + 8
    ) {
      return label;
    }
  }

  const colonMatch = stripped.match(/^(.+?):\s+.+/);
  if (colonMatch) {
    const lead = colonMatch[1].trim();
    if (!looksLikeDateHeading(lead) && lead.length >= 12 && lead.length <= 48) {
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
