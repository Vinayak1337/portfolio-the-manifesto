export function externalLinkProps(href: string | null) {
  if (!href) {
    return {
      href: "#contact",
      target: undefined,
      rel: undefined,
    };
  }

  return {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

