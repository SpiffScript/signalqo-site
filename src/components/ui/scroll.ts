type ScrollOptions = {
  offset?: number;
  behavior?: ScrollBehavior;
};

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function getScrollParent(el: HTMLElement): HTMLElement | Window {
  let parent: HTMLElement | null = el.parentElement;

  while (parent) {
    const style = window.getComputedStyle(parent);
    const overflowY = style.overflowY;

    const canScroll =
      (overflowY === "auto" || overflowY === "scroll") &&
      parent.scrollHeight > parent.clientHeight;

    if (canScroll) return parent;
    parent = parent.parentElement;
  }

  return window;
}

export function scrollToId(id: string, options: ScrollOptions = {}) {
  const el = document.getElementById(id);
  if (!el) return;

  const behavior: ScrollBehavior =
    options.behavior ?? (prefersReducedMotion() ? "auto" : "smooth");
  const offset = options.offset ?? 0;

  el.scrollIntoView({ behavior, block: "start" });

  if (offset !== 0) {
    const parent = getScrollParent(el);

    requestAnimationFrame(() => {
      if (parent === window) {
        window.scrollBy({ top: offset, behavior });
      } else {
        (parent as HTMLElement).scrollBy({ top: offset, behavior });
      }
    });
  }
}

export function scrollToTop(options: ScrollOptions = {}) {
  const behavior: ScrollBehavior =
    options.behavior ?? (prefersReducedMotion() ? "auto" : "smooth");

  window.scrollTo({ top: 0, behavior });
}
