export function ArchiveMarquee({ items }: Readonly<{ items: readonly string[] }>) {
  return (
    <div className="marquee-band" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <span className="marquee-item" key={dup}>
            {items.map((item, index) => (
              <span key={`${dup}-${item}`}>
                § {item}
                {index < items.length - 1 && <span className="sep"> ◇ </span>}
              </span>
            ))}
            <span className="sep"> ◇ </span>
          </span>
        ))}
      </div>
    </div>
  );
}
