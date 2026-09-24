"""Build the one-page resume served by the portfolio.

Keep the content aligned with the portfolio experience data and career-ops/cv.md.
Run with the bundled Python runtime: python3 scripts/build_resume.py
"""

from pathlib import Path

from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Vinayak_Kumar_Resume.pdf"
FONT_DIR = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("TNR", str(FONT_DIR / "Times New Roman.ttf")))
pdfmetrics.registerFont(TTFont("TNR-Bold", str(FONT_DIR / "Times New Roman Bold.ttf")))
pdfmetrics.registerFont(TTFont("TNR-Italic", str(FONT_DIR / "Times New Roman Italic.ttf")))
pdfmetrics.registerFontFamily("TNR", normal="TNR", bold="TNR-Bold", italic="TNR-Italic")

W, H = letter
LEFT, RIGHT = 33, W - 33
WIDTH = RIGHT - LEFT
c = canvas.Canvas(str(OUTPUT), pagesize=letter, pageCompression=1)
c.setTitle("Vinayak Kumar - Full-Stack Engineer Resume")
c.setAuthor("Vinayak Kumar")

body = ParagraphStyle(
    "body", fontName="TNR", fontSize=9.2, leading=10.65,
    textColor="#111111", alignment=TA_LEFT, spaceAfter=0,
)
small = ParagraphStyle(
    "small", parent=body, fontSize=8.95, leading=10.3,
)
bullet_style = ParagraphStyle(
    "bullet", parent=small, leftIndent=10, firstLineIndent=-10,
)

y = H - 31


def line(text, x=LEFT, font="TNR", size=9.2, color="#111111"):
    global y
    c.setFillColor(color)
    c.setFont(font, size)
    c.drawString(x, y, text)


def paragraph(text, *, style=body, indent=0, gap=0):
    global y
    p = Paragraph(text, style)
    _, height = p.wrap(WIDTH - indent, 1000)
    p.drawOn(c, LEFT + indent, y - height + 2)
    y -= height + gap


def section(title):
    global y
    y -= 10
    if title in {"Work Experience", "Leadership"}:
        y -= 2
    line(title, font="TNR-Bold", size=13)
    c.setStrokeColor("#111111")
    c.setLineWidth(0.45)
    c.line(LEFT, y - 3, RIGHT, y - 3)
    y -= 17


def centered_links(parts, *, size=8.9):
    c.setFont("TNR", size)
    total = sum(pdfmetrics.stringWidth(label, "TNR", size) for label, _ in parts)
    x = (W - total) / 2
    for label, url in parts:
        c.drawString(x, y, label)
        width = pdfmetrics.stringWidth(label, "TNR", size)
        if url:
            c.linkURL(url, (x, y - 2, x + width, y + size), relative=0)
        x += width


def linked_label(label, url, *, x=LEFT, font="TNR-Italic", size=8.9):
    global y
    c.setFont(font, size)
    c.setFillColor("#111111")
    c.drawString(x, y, label)
    width = pdfmetrics.stringWidth(label, font, size)
    c.linkURL(url, (x, y - 2, x + width, y + size), relative=0)
    c.setLineWidth(0.35)
    c.line(x, y - 0.9, x + width, y - 0.9)
    return width


def job(title, dates, company, location, bullets, *, project=None, company_url=None):
    global y
    line(title, font="TNR-Bold", size=9.65)
    c.setFont("TNR-Bold", 9.4)
    c.drawRightString(RIGHT, y, dates)
    y -= 10.3
    if company_url:
        width = linked_label(company, company_url)
    else:
        line(company, font="TNR-Italic", size=8.9)
        width = pdfmetrics.stringWidth(company, "TNR-Italic", 8.9)
    if project:
        sep = "  |  "
        c.setFont("TNR-Italic", 8.9)
        c.drawString(LEFT + width, y, sep)
        linked_label(project[0], project[1], x=LEFT + width + pdfmetrics.stringWidth(sep, "TNR-Italic", 8.9))
    c.setFont("TNR-Italic", 8.9)
    c.drawRightString(RIGHT, y, location)
    y -= 11.2
    for bullet in bullets:
        paragraph("-  " + bullet, style=bullet_style, gap=0.8)
    y -= 7


def project(title, tech, url, bullets):
    global y
    title_width = linked_label(title, url, font="TNR-Bold", size=9.4)
    tech_width = pdfmetrics.stringWidth(tech, "TNR-Bold", 8.6)
    if title_width + tech_width + 10 > WIDTH:
        raise ValueError(f"Project heading overlap: {title}")
    c.setFont("TNR-Bold", 8.6)
    c.drawRightString(RIGHT, y, tech)
    y -= 10.9
    for bullet in bullets:
        paragraph("-  " + bullet, style=bullet_style, gap=0.8)
    y -= 9


c.setFillColor("#111111")
c.setFont("TNR", 24)
c.drawCentredString(W / 2, y, "VINAYAK KUMAR")
y -= 19
c.setFont("TNR-Bold", 10.5)
c.drawCentredString(W / 2, y, "Full-Stack Engineer - AI Agents & Workflows")
y -= 12
centered_links([
    ("New Delhi, India", None), ("  |  ", None),
    ("+91 70489 23081", "tel:+917048923081"), ("  |  ", None),
    ("vinayak111kumar@gmail.com", "mailto:vinayak111kumar@gmail.com"),
])
y -= 11
centered_links([
    ("vinayak1337.me", "https://vinayak1337.me"), ("  |  ", None),
    ("github.com/Vinayak1337", "https://github.com/Vinayak1337"), ("  |  ", None),
    ("linkedin.com/in/Vinayak1337", "https://linkedin.com/in/Vinayak1337"),
])
y -= 14

section("Summary")
paragraph(
    "Full-Stack Engineer with 3+ years of professional experience building web and mobile products with React, Next.js, TypeScript, React Native, and Node.js. Coding since 2019; work spans AI agents and workflows, APIs, authentication, persistence, and analytics.",
    gap=1,
)

section("Technical Skills")
paragraph("<b>Frontend:</b> React, Next.js App Router, TypeScript, React Native, Redux Toolkit/Saga, Tailwind CSS, shadcn/ui, Vite", style=small)
paragraph("<b>Backend / Data:</b> Node.js, Express.js, Prisma, PostgreSQL, MongoDB, REST, GraphQL, Shopify GraphQL, Socket.io, Clerk, Stripe", style=small)
paragraph("<b>AI / Product:</b> AI agents and workflows, Flowise, LLM integrations, PostHog, Mixpanel, Vercel, AWS S3, Firebase, Git/GitHub", style=small)

section("Work Experience")
job(
    "Product Engineer Intern", "Jun 2026 - Jul 2026", "Philblocks Private Limited", "Internship",
    [
        "Migrated Ideapost authentication to Clerk with webhook-based user sync and role-protected dashboard and admin routes; added Mixpanel product events.",
        "Built stackable credits and Razorpay billing with a transaction ledger, payment webhooks, refunds, and admin controls.",
        "Developed the initial AI post-generation workflow with profile context, memory recall, drafting, moderation, and run tracking.",
    ],
    project=("Ideapost", "https://ideapost.top"),
)
job(
    "Full-Stack Engineer", "Feb 2024 - Nov 2024", "RemoteHire", "Remote - New Delhi, India (full-time, then part-time)",
    [
        "Owned most of Immibot's full-stack delivery: AI chat, auth, persistence, admin, analytics, and deployment.",
        "Built guest sessions, quotas, and guest-to-Clerk conversion with conversation transfer and cleanup.",
        "Shipped Flowise-based Advisor/Search, follow-up, progress-tracking, orientation, and FSW eligibility workflows.",
        "Built streamed Perplexity Sonar search over official CA/US/AU sources, with persisted citations/messages and retries.",
    ],
    company_url="https://immibot.vercel.app/",
)
job(
    "Software Developer I (Former Intern)", "Nov 2021 - Feb 2024", "Wonderhood", "Remote - New Delhi, India",
    [
        "Migrated the platform to Next.js with ISR/SSG/CSR and raised Lighthouse performance from 35 to 90+.",
        "Built e-commerce/content flows using Shopify GraphQL and SDK for toys, blogs, articles, courses, cart, and dynamic content.",
        "Led an Ionic-to-React Native migration and redesigned child-centric mobile UI for better performance and product ergonomics.",
        "Converted MyLearning into a teacher dashboard for courses, assessments, reporting, and Mixpanel event instrumentation.",
    ],
    company_url="https://vinayak1337.me/#experience",
)
job(
    "MERN Stack Intern", "Sep 2021 - Nov 2021", "Possibillion Technologies", "Remote - New Delhi, India",
    [
        "Led 4 interns and shipped 3 MVPs across tourism, slideshow generation, and social workflows using React, Express, MongoDB, Socket.io, FFmpeg, and AWS S3.",
    ],
    company_url="https://vinayak1337.me/#experience",
)

section("Personal Projects")
project(
    "Nutrlife (2026) - Health & Nutrition Mobile App", "React Native, Expo, TypeScript, Clerk, Redux Saga",
    "https://github.com/Vinayak1337/Nutrlife",
    ["Built an Expo nutrition app with Clerk auth, AI food photo analysis, meal and water logs, and calendar insights."],
)
project(
    "StoreFront (2024) - Billing, Inventory, Orders, Analytics", "Next.js, TypeScript, Prisma, PostgreSQL",
    "https://github.com/Vinayak1337/StoreFrontNextjs",
    ["Built a POS/inventory dashboard with orders, analytics, secure cookie sessions, CSRF/rate-limit middleware, and Bluetooth thermal printing."],
)
project(
    "AI Chat (2024) - VS Code Extension", "React Webview, TypeScript, OpenAI, Gemini",
    "https://github.com/Vinayak1337/AI-chat-vsc-extension",
    ["Built editor-native AI chat with file context, attachments, provider switching, planning, review, debugging, and editor write-back actions."],
)

section("Education")
line("B.Tech in Computer Science and Engineering", font="TNR-Bold", size=9.6)
c.setFont("TNR-Bold", 9.2)
c.drawRightString(RIGHT, y, "2024 - Present (Expected 2027)")
y -= 10.5
line("Guru Gobind Singh Indraprastha University (GGSIPU)", font="TNR-Italic", size=8.9)
y -= 12
line("Diploma in Computer Engineering", font="TNR-Bold", size=9.6)
c.setFont("TNR-Bold", 9.2)
c.drawRightString(RIGHT, y, "2018 - 2021")
y -= 10.5
line("Ambedkar Institute of Technology", font="TNR-Italic", size=8.9)
y -= 8

section("Open Source")
paragraph(
    "<b>Checkstyle, Express, Jenkins (2026):</b> Fixed lint defaults/Javadoc, Express v5 codemod metadata, and Azure AD sign-in without Referer.",
    style=small,
)

section("Leadership")
line("BPIT Tech Team - Full-Stack Developer (Team Lead)", font="TNR-Bold", size=9.6)
c.setFont("TNR-Bold", 9.2)
c.drawRightString(RIGHT, y, "Jun 2025 - Dec 2025")
y -= 10.9
paragraph("-  Led a team of 3 building the new BPIT website with Next.js, TypeScript, an inline MongoDB-backed CMS, PostHog analytics, and Vercel previews.", style=bullet_style)

if y < 25:
    raise RuntimeError(f"Resume overflows the page; final baseline y={y:.1f}")
c.showPage()
c.save()
print(f"Wrote {OUTPUT}; bottom baseline {y:.1f} pt")
