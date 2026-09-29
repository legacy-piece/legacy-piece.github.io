import type { DataTable, PageSection, Subsection } from "@/config/types";
import { esc } from "@/lib/fixed-template/render";
import { routePath } from "@/lib/urls";

function renderTable(table: DataTable | undefined): string {
  if (!table?.columns.length || !table.rows.length) return "";
  const head = table.columns.map((column) => `<th scope="col">${esc(column)}</th>`).join("");
  const rows = table.rows.map((row) => {
    const cells = table.columns.map((_, index) => `<td>${esc(row[index] ?? "")}</td>`).join("");
    return `<tr>${cells}</tr>`;
  }).join("");
  return `<div class="guide-table-scroll" role="region" aria-label="${esc(table.caption || "Guide table")}" tabindex="0"><table><caption>${esc(table.caption)}</caption><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

function renderSubsection(subsection: Subsection): string {
  const paragraphs = subsection.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("");
  const bullets = subsection.bullets?.length
    ? `<ul class="guide-bullets">${subsection.bullets.map((bullet) => `<li>${esc(bullet)}</li>`).join("")}</ul>`
    : "";
  return `<div class="guide-subsection"><h3>${esc(subsection.heading)}</h3>${paragraphs}${bullets}${renderTable(subsection.table)}</div>`;
}

export function renderPageSection(section: PageSection): string {
  const eyebrow = section.eyebrow ? `<p class="guide-eyebrow">${esc(section.eyebrow)}</p>` : "";
  const intro = section.intro ? `<p class="guide-intro">${esc(section.intro)}</p>` : "";
  const paragraphs = section.paragraphs?.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("") ?? "";
  const subsections = section.subsections?.map(renderSubsection).join("") ?? "";
  const steps = section.steps?.length
    ? `<ol class="guide-steps">${section.steps.map((step) => `<li><h3>${esc(step.heading)}</h3><p>${esc(step.description)}</p></li>`).join("")}</ol>`
    : "";
  const links = section.links?.length
    ? `<ul class="guide-links">${section.links.map((link) => {
      const external = /^https:\/\//i.test(link.slug);
      const href = external ? link.slug : routePath(link.slug);
      return `<li><a href="${esc(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}><strong>${esc(link.label)}</strong>${link.description ? `<span>${esc(link.description)}</span>` : ""}</a></li>`;
    }).join("")}</ul>`
    : "";
  return `<section class="guide-section" id="${esc(section.id)}">${eyebrow}<h2>${esc(section.heading)}</h2>${intro}${renderTable(section.table)}${paragraphs}${subsections}${steps}${links}</section>`;
}
