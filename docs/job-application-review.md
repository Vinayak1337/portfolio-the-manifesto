# Portfolio application review — 6 September 2026

## Implemented

- Rebuilt About as an open editorial spread using the existing sage, rust, serif, and rule treatment. Removed the oversized dark card and competing secondary headline.
- Added direct resume and GitHub actions, explicit expected graduation, company/date labels, and clearer professional-experience highlights.
- Increased experience body copy from 12px to 15px and left-aligned mobile experience entries.
- Replaced Nutrlife's missing public link with its verified public repository.

## Resume findings

Reviewed the single-page public/Vinayak_Kumar_Resume.pdf visually and through text extraction. No visible clipping or overlapping text. The page is dense, especially work experience, skills, and leadership.

1. The work and education dates are consistent. The education sentence can momentarily read as though full-time work continued through November 2024, while the RemoteHire entry clarifies the full-time-to-part-time transition. This is a wording nuance rather than a timeline error; keeping it is reasonable if it reflects the actual sequence.
2. Give BPIT more prominence. It is the most recent dated leadership work but sits at the bottom. Consider a combined “Engineering Experience” section including BPIT, clearly marked as a college tech-team role.
3. Reduce stack repetition between summary, skills, and project headings to create more breathing room. Preserve the concrete Lighthouse 35→90+ result.
4. Add verified outcomes to recent projects where available: usage, deployment scope, adoption, or measured performance. Do not invent metrics.
5. Text extraction joins some words around bold spans (“Builtguest”, “conversionwith”). It looks correct visually, but test the upload preview in the actual application system and fix spacing in the resume source if parsed text remains joined.

The PDF was reviewed, not modified.

## GitHub findings

Sources: https://github.com/Vinayak1337 and https://github.com/Vinayak1337/Nutrlife

The profile README already communicates the stack, 3+ years of professional experience, BPIT work, expected 2027 graduation, and contribution links consistently with the portfolio.

Nutrlife now has a root README with a product visual, architecture, setup instructions, environment-variable names without secrets, current limitations, and the verified APK link. The repository now also has a description, homepage, relevant topics, and no tracked `.DS_Store` file.

The repository slug, portfolio, profile, resume, and release links now use “Nutrlife”. This was a profile and selected-repository review, not a full audit of all repositories or verification of every project claim.

## Remaining editorial opportunities

- The homepage displays 17 projects before About. Consider reducing “More work” to a few strongest examples and using Archive for the remainder, so a recruiter reaches experience sooner.
- Keep personal prototypes clearly distinguished from production employment work.
- Tailor the resume to the target role and state availability/start date accurately; expected graduation alone does not explain availability.
