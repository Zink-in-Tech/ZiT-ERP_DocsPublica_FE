const TOC_LINK_SELECTOR = 'a.table-of-contents__link[href*="#"]';
const TOC_CONTAINER_SELECTOR =
  '.theme-doc-toc-desktop, .theme-doc-toc-mobile, .tableOfContents';

const HIGHLIGHT_CLASS = 'zink-scroll-target';
const HIGHLIGHT_REDUCED_CLASS = 'zink-scroll-target--reduced';

let activeHighlightTimer: number | undefined;

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isTocLink(link: HTMLAnchorElement): boolean {
  return !!link.closest(TOC_CONTAINER_SELECTOR);
}

function resolveHeading(element: HTMLElement): HTMLElement {
  if (/^H[1-6]$/.test(element.tagName)) {
    return element;
  }

  return (element.closest('h1,h2,h3,h4,h5,h6') as HTMLElement | null) ?? element;
}

export function flashScrollTarget(element: HTMLElement): void {
  const heading = resolveHeading(element);

  if (activeHighlightTimer) {
    window.clearTimeout(activeHighlightTimer);
    activeHighlightTimer = undefined;
  }

  document
    .querySelectorAll(`.${HIGHLIGHT_CLASS}, .${HIGHLIGHT_REDUCED_CLASS}`)
    .forEach((node) => {
      node.classList.remove(HIGHLIGHT_CLASS, HIGHLIGHT_REDUCED_CLASS);
    });

  heading.classList.remove(HIGHLIGHT_CLASS, HIGHLIGHT_REDUCED_CLASS);
  void heading.offsetWidth;

  if (prefersReducedMotion()) {
    heading.classList.add(HIGHLIGHT_REDUCED_CLASS);
    activeHighlightTimer = window.setTimeout(() => {
      heading.classList.remove(HIGHLIGHT_REDUCED_CLASS);
      activeHighlightTimer = undefined;
    }, 700);
    return;
  }

  heading.classList.add(HIGHLIGHT_CLASS);

  const removeHighlight = () => {
    heading.classList.remove(HIGHLIGHT_CLASS);
    heading.removeEventListener('animationend', removeHighlight);
  };

  heading.addEventListener('animationend', removeHighlight, {once: true});
}

function waitForScrollEnd(callback: () => void): void {
  if (prefersReducedMotion()) {
    callback();
    return;
  }

  let settled = false;
  let debounceTimer: number | undefined;

  const finish = () => {
    if (settled) {
      return;
    }
    settled = true;
    document.removeEventListener('scroll', onScroll);
    document.removeEventListener('scrollend', finish);
    if (debounceTimer) {
      window.clearTimeout(debounceTimer);
    }
    callback();
  };

  const onScroll = () => {
    if (debounceTimer) {
      window.clearTimeout(debounceTimer);
    }
    debounceTimer = window.setTimeout(finish, 100);
  };

  document.addEventListener('scroll', onScroll, {passive: true});
  document.addEventListener('scrollend', finish, {once: true});
  window.setTimeout(finish, 1200);
}

function navigateToSection(target: HTMLElement, hash: string): void {
  target.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });

  if (window.location.hash !== hash) {
    history.pushState(null, '', hash);
  }

  if (prefersReducedMotion()) {
    requestAnimationFrame(() => flashScrollTarget(target));
    return;
  }

  waitForScrollEnd(() => flashScrollTarget(target));
}

function getTargetFromHash(hash: string): HTMLElement | null {
  if (!hash || hash === '#') {
    return null;
  }

  const id = decodeURIComponent(hash.slice(1));
  return document.getElementById(id);
}

function handleTocLinkClick(event: MouseEvent): void {
  if (event.defaultPrevented || event.button !== 0) {
    return;
  }

  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
    TOC_LINK_SELECTOR,
  );

  if (!link || !isTocLink(link)) {
    return;
  }

  const hash = new URL(link.href, window.location.href).hash;
  const target = getTargetFromHash(hash);

  if (!target) {
    return;
  }

  event.preventDefault();
  navigateToSection(target, hash);
}

function handleHashChange(): void {
  const target = getTargetFromHash(window.location.hash);
  if (!target) {
    return;
  }

  requestAnimationFrame(() => flashScrollTarget(target));
}

function flashOnInitialHash(): void {
  const target = getTargetFromHash(window.location.hash);
  if (!target) {
    return;
  }

  requestAnimationFrame(() => flashScrollTarget(target));
}

export function initTocScrollEnhancements(): void {
  document.addEventListener('click', handleTocLinkClick, {capture: true});
  window.addEventListener('hashchange', handleHashChange);

  if (window.location.hash) {
    if (document.readyState === 'complete') {
      flashOnInitialHash();
    } else {
      window.addEventListener('load', flashOnInitialHash, {once: true});
    }
  }
}
