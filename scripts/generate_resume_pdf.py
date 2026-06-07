from pathlib import Path
import textwrap

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "resume" / "M_Sharjeel_Saleem_Resume.md"
OUTPUTS = [
    ROOT / "public" / "M.Sharjeel_Saleem.pdf",
    ROOT / "dist" / "M.Sharjeel_Saleem.pdf",
    ROOT / "netlify-deploy" / "M.Sharjeel_Saleem.pdf",
]


def parse_resume(text: str):
    lines = [line.rstrip() for line in text.splitlines()]
    name = lines[0].strip()
    title = lines[1].strip()
    contact = lines[3].strip()

    sections = {}
    current = None
    buffer = []

    for line in lines[4:]:
      if not line.strip():
        continue
      if line.isupper():
        if current:
          sections[current] = buffer[:]
          buffer = []
        current = line.strip()
      else:
        buffer.append(line)

    if current:
      sections[current] = buffer[:]

    return name, title, contact, sections


def paragraph(text, style):
    return Paragraph(text.replace("&", "&amp;"), style)


def build_story():
    name, title, contact, sections = parse_resume(SOURCE.read_text())
    styles = getSampleStyleSheet()

    heading = ParagraphStyle(
        "Heading",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=11,
        textColor=colors.HexColor("#0f172a"),
        spaceAfter=4,
        spaceBefore=6,
    )
    body = ParagraphStyle(
        "Body",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.4,
        leading=10.2,
        textColor=colors.HexColor("#1f2937"),
        spaceAfter=2,
    )
    bullet = ParagraphStyle(
        "Bullet",
        parent=body,
        leftIndent=12,
        firstLineIndent=-8,
        bulletIndent=0,
        spaceAfter=3,
    )
    header_name = ParagraphStyle(
        "HeaderName",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=16,
        leading=18,
        textColor=colors.HexColor("#020617"),
        alignment=1,
        spaceAfter=3,
    )
    header_title = ParagraphStyle(
        "HeaderTitle",
        parent=styles["BodyText"],
        fontName="Helvetica-Bold",
        fontSize=9.6,
        leading=10.5,
        textColor=colors.HexColor("#2563eb"),
        alignment=1,
        spaceAfter=2,
    )
    header_contact = ParagraphStyle(
        "HeaderContact",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.1,
        leading=9.6,
        alignment=1,
        textColor=colors.HexColor("#334155"),
        spaceAfter=6,
    )

    story = [
        paragraph(name, header_name),
        paragraph(title, header_title),
        paragraph(contact, header_contact),
    ]

    for section_name in [
        "PROFESSIONAL SUMMARY",
        "CORE SKILLS",
        "PROFESSIONAL EXPERIENCE",
        "SELECTED PROJECTS",
        "EDUCATION",
    ]:
        story.append(paragraph(section_name, heading))
        for line in sections.get(section_name, []):
            if line.startswith("- "):
                story.append(Paragraph(line[2:], bullet, bulletText="•"))
            elif " | " in line and not line.startswith("Applied AI & LLMs:") and not line.startswith("AI Platforms & APIs:"):
                story.append(paragraph(f"<b>{line}</b>", body))
            else:
                wrapped = "<br/>".join(textwrap.wrap(line, width=110)) if len(line) > 140 else line
                story.append(paragraph(wrapped, body))
        story.append(Spacer(1, 0.03 * inch))

    return story


def main():
    story = build_story()
    for output in OUTPUTS:
        output.parent.mkdir(parents=True, exist_ok=True)
        doc = SimpleDocTemplate(
            str(output),
            pagesize=A4,
            rightMargin=0.42 * inch,
            leftMargin=0.42 * inch,
            topMargin=0.38 * inch,
            bottomMargin=0.38 * inch,
        )
        doc.build(story)
        print(f"Generated {output}")


if __name__ == "__main__":
    main()
