export function externalLinkProps(href: string | null) {
  if (!href) {
    return {
      href: "#contact",
      target: undefined,
      rel: undefined,
    };
  }

  const isInternal = href.startsWith("/");

  return {
    href,
    target: isInternal ? undefined : "_blank",
    rel: isInternal ? undefined : "noopener noreferrer",
  };
}
