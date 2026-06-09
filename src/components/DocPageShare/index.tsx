import React, {type ReactNode, useEffect, useMemo, useRef, useState} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

import styles from './styles.module.css';

type ShareAction =
  | 'copy-url'
  | 'copy-ai-prompt'
  | 'copy-markdown'
  | 'open-chatgpt'
  | 'open-claude'
  | 'share-whatsapp';

function IconCopy(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="9" width="10" height="10" rx="2" />
      <path d="M15 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

function IconMarkdown(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M7.5 15V9l2.5 3 2.5-3v6" />
      <path d="M15 9h2.5l-2.5 3h2.5" />
    </svg>
  );
}

function IconSpark(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5 13.9 8l4.6 1.9-4.6 1.9L12 16.5l-1.9-4.7L5.5 9.9 10.1 8 12 3.5Z" />
      <path d="m18.5 15 1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" />
    </svg>
  );
}

function IconChevron(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function IconWhatsApp(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 11.8a8 8 0 0 1-11.7 7.1L4 20l1.2-4.1A8 8 0 1 1 20 11.8Z" />
      <path d="M9.4 8.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.7 4.2 3.7 2 .8 2.4.6 2.8.6.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.4-.2-.8-.4s-1.4-.7-1.6-.8c-.2-.1-.4-.2-.6.2-.2.4-.7.8-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.2-1.5-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.2-.3.3-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.5-1.4-.7-1.8Z" />
    </svg>
  );
}

function textOf(node: ChildNode): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent ?? '';
  }

  if (!(node instanceof HTMLElement)) {
    return '';
  }

  const tag = node.tagName.toLowerCase();
  const children = Array.from(node.childNodes).map(textOf).join('');

  if (tag === 'code' && node.parentElement?.tagName.toLowerCase() !== 'pre') {
    return `\`${children.trim()}\``;
  }

  if (tag === 'a') {
    const href = node.getAttribute('href');
    const label = children.trim();
    return href ? `[${label}](${href})` : label;
  }

  if (tag === 'strong' || tag === 'b') {
    return `**${children.trim()}**`;
  }

  if (tag === 'em' || tag === 'i') {
    return `*${children.trim()}*`;
  }

  if (tag === 'br') {
    return '\n';
  }

  return children;
}

function blockToMarkdown(element: HTMLElement): string {
  const tag = element.tagName.toLowerCase();
  const text = Array.from(element.childNodes).map(textOf).join('').trim();

  if (!text && tag !== 'img') {
    return '';
  }

  if (/^h[1-6]$/.test(tag)) {
    const level = Number(tag.slice(1));
    return `${'#'.repeat(level)} ${text}`;
  }

  if (tag === 'p' || tag === 'blockquote') {
    return tag === 'blockquote'
      ? text
          .split('\n')
          .map((line) => `> ${line}`)
          .join('\n')
      : text;
  }

  if (tag === 'pre') {
    const code = element.textContent?.replace(/\n+$/, '') ?? '';
    return `\`\`\`\n${code}\n\`\`\``;
  }

  if (tag === 'ul' || tag === 'ol') {
    const items = Array.from(element.children)
      .filter((child): child is HTMLElement => child instanceof HTMLElement)
      .map((child, index) => {
        const prefix = tag === 'ol' ? `${index + 1}. ` : '- ';
        return `${prefix}${Array.from(child.childNodes).map(textOf).join('').trim()}`;
      });

    return items.join('\n');
  }

  if (tag === 'img') {
    const alt = element.getAttribute('alt') || 'Imagen';
    const src = element.getAttribute('src');
    return src ? `![${alt}](${src})` : alt;
  }

  if (tag === 'table') {
    const rows = Array.from(element.querySelectorAll('tr')).map((row) =>
      Array.from(row.querySelectorAll('th, td')).map((cell) => cell.textContent?.trim() ?? ''),
    );

    if (rows.length === 0) {
      return '';
    }

    const header = rows[0];
    const separator = header.map(() => '---');
    const body = rows.slice(1);

    return [
      `| ${header.join(' | ')} |`,
      `| ${separator.join(' | ')} |`,
      ...body.map((row) => `| ${row.join(' | ')} |`),
    ].join('\n');
  }

  return text;
}

function articleToMarkdown(article: HTMLElement, title: string, url: string): string {
  const blocks = Array.from(article.children)
    .filter((child): child is HTMLElement => child instanceof HTMLElement)
    .map(blockToMarkdown)
    .filter(Boolean);

  return [`# ${title}`, '', `Fuente: ${url}`, '', ...blocks].join('\n\n').trim();
}

function buildAiPrompt(url: string): string {
  return `Leé esta página: ${url}\n\nDespués respondé mis preguntas sobre su contenido en español.`;
}

function buildAiServiceUrl(service: 'chatgpt' | 'claude', prompt: string): string {
  const encoded = encodeURIComponent(prompt);

  if (service === 'chatgpt') {
    return `https://chatgpt.com/?q=${encoded}`;
  }

  return `https://claude.ai/new?q=${encoded}`;
}

async function copyToClipboard(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}

export default function DocPageShare(): ReactNode {
  const {metadata, frontMatter} = useDoc();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const pageUrl = useMemo(() => {
    if (typeof window === 'undefined') {
      return metadata.permalink;
    }

    return window.location.href;
  }, [metadata.permalink]);

  const title = frontMatter.title ?? metadata.title;

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function handleClick(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [open]);

  useEffect(() => {
    if (!status) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setStatus(null), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [status]);

  function getArticleElement(): HTMLElement | null {
    return document.querySelector('article');
  }

  async function handleAction(action: ShareAction) {
    try {
      if (action === 'copy-url') {
        await copyToClipboard(pageUrl);
        setStatus('Enlace copiado');
      }

      if (action === 'copy-ai-prompt') {
        await copyToClipboard(buildAiPrompt(pageUrl));
        setStatus('Prompt para IA copiado');
      }

      if (action === 'copy-markdown') {
        const article = getArticleElement();
        if (!article) {
          throw new Error('No se encontro el contenido del articulo.');
        }

        const markdown = articleToMarkdown(article, title, pageUrl);
        const aiPrompt = `${buildAiPrompt(pageUrl)}\n\nSi no podés acceder al enlace, usá este contenido:\n\n${markdown}`;
        await copyToClipboard(aiPrompt);
        setStatus('Contenido copiado en Markdown');
      }

      if (action === 'open-chatgpt' || action === 'open-claude') {
        const article = getArticleElement();
        if (!article) {
          throw new Error('No se encontro el contenido del articulo.');
        }

        const service = action === 'open-chatgpt' ? 'chatgpt' : 'claude';
        const shortPrompt = buildAiPrompt(pageUrl);
        const markdown = articleToMarkdown(article, title, pageUrl);
        const backupPrompt = `${shortPrompt}\n\nSi no podés acceder al enlace, usá este contenido:\n\n${markdown}`;

        await copyToClipboard(backupPrompt);
        window.open(buildAiServiceUrl(service, shortPrompt), '_blank', 'noopener,noreferrer');
        setStatus(service === 'chatgpt' ? 'Abriendo ChatGPT' : 'Abriendo Claude');
      }

      if (action === 'share-whatsapp') {
        const text = `${title}\n${pageUrl}`;
        const encoded = encodeURIComponent(text);
        const whatsappUrl =
          typeof window !== 'undefined' && /Mobi|Android|iPhone|iPad/i.test(window.navigator.userAgent)
            ? `https://api.whatsapp.com/send?text=${encoded}`
            : `https://web.whatsapp.com/send?text=${encoded}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        setStatus('Abriendo WhatsApp');
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      setStatus('No se pudo completar la accion');
    }
  }

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}>
        <span className={styles.triggerMain}>
          <span className={styles.triggerIcon} aria-hidden="true">
            <IconSpark />
          </span>
          Compartir
          <span className={styles.triggerChevron}>
          <IconChevron />
          </span>
        </span>
      </button>

      {open && (
        <div className={styles.menu} role="menu" aria-label="Compartir pagina con asistentes">
          <button
            type="button"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => handleAction('share-whatsapp')}>
            <span className={`${styles.iconBox} ${styles.iconBoxWhatsapp}`}>
              <IconWhatsApp />
            </span>
            <span>
              <strong>WhatsApp</strong>
              <small>Comparte el enlace actual</small>
            </span>
          </button>

          <button
            type="button"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => handleAction('copy-url')}>
            <span className={styles.iconBox}>
              <IconCopy />
            </span>
            <span>
              <strong>Copiar enlace</strong>
              <small>Copia la URL de esta página</small>
            </span>
          </button>

          <div className={styles.menuDivider} />

          <button
            type="button"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => handleAction('copy-ai-prompt')}>
            <span className={styles.iconBox}>
              <IconSpark />
            </span>
            <span>
              <strong>Prompt para IA</strong>
              <small>Texto breve en español con el enlace</small>
            </span>
          </button>

          <button
            type="button"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => handleAction('copy-markdown')}>
            <span className={styles.iconBox}>
              <IconMarkdown />
            </span>
            <span>
              <strong>Markdown para IA</strong>
              <small>Enlace más contenido de respaldo</small>
            </span>
          </button>

          <button
            type="button"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => handleAction('open-chatgpt')}>
            <span className={styles.iconBox}>
              <IconSpark />
            </span>
            <span>
              <strong>Abrir en ChatGPT</strong>
              <small>Prompt en español y respaldo en el portapapeles</small>
            </span>
          </button>

          <button
            type="button"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => handleAction('open-claude')}>
            <span className={styles.iconBox}>
              <IconSpark />
            </span>
            <span>
              <strong>Abrir en Claude</strong>
              <small>Prompt en español y respaldo en el portapapeles</small>
            </span>
          </button>
        </div>
      )}

      {status && <div className={styles.toast}>{status}</div>}
    </div>
  );
}
