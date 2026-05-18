export function CompanyGlyph({ company }: Readonly<{ company: string }>) {
  const glyph = (() => {
    if (company.includes("BPIT")) {
      return (
        <svg viewBox="0 0 40 40">
          <rect x="6" y="14" width="28" height="20" />
          <path d="M6 14 L20 4 L34 14" />
          <line x1="14" y1="22" x2="14" y2="34" />
          <line x1="20" y1="22" x2="20" y2="34" />
          <line x1="26" y1="22" x2="26" y2="34" />
        </svg>
      );
    }

    if (company.includes("RemoteHire")) {
      return (
        <svg viewBox="0 0 40 40">
          <rect x="8" y="6" width="24" height="30" rx="2" />
          <circle cx="20" cy="16" r="4" />
          <line x1="14" y1="26" x2="26" y2="26" />
          <line x1="14" y1="30" x2="22" y2="30" />
        </svg>
      );
    }

    if (company.includes("wonderHood")) {
      return (
        <svg viewBox="0 0 40 40">
          <rect x="8" y="20" width="10" height="14" />
          <rect x="20" y="14" width="10" height="20" />
          <rect x="14" y="8" width="6" height="6" />
        </svg>
      );
    }

    if (company.includes("Possibillion")) {
      return (
        <svg viewBox="0 0 40 40">
          <path d="M16 6 L16 18 L8 32 L32 32 L24 18 L24 6 Z" />
          <line x1="14" y1="6" x2="26" y2="6" />
          <circle cx="20" cy="26" r="2" fill="currentColor" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="12" />
      </svg>
    );
  })();

  return (
    <span className="a-exp-glyph" aria-hidden="true">
      {glyph}
    </span>
  );
}
