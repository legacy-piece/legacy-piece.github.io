import Link from "next/link";
import { Fragment } from "react";
import type { PageSection } from "@/config/types";
import { routePath } from "@/lib/urls";
import { DataTable } from "./data-table";
import { NativeAdSlot } from "@/components/integrations/native-ad-slot";

export function WikiPageSections({ sections, nativeAfterFirstContent = false }: { sections: PageSection[]; nativeAfterFirstContent?: boolean }) {
  return (
    <div className="wiki-page-sections">
      {sections.map((section, sectionIndex) => (
        <section id={section.id} key={section.id} className="scroll-mt-24">
          {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
          <h2>{section.heading}</h2>
          {section.intro ? <p className="section-lead">{section.intro}</p> : null}
          {nativeAfterFirstContent && sectionIndex === 0 && section.intro ? <NativeAdSlot /> : null}
          {section.paragraphs?.map((paragraph, paragraphIndex) => (
            <Fragment key={paragraph}>
              <p>{paragraph}</p>
              {nativeAfterFirstContent && sectionIndex === 0 && !section.intro && paragraphIndex === 0 ? <NativeAdSlot /> : null}
            </Fragment>
          ))}
          {nativeAfterFirstContent && sectionIndex === 0 && !section.intro && !section.paragraphs?.length ? <NativeAdSlot /> : null}

          {section.subsections?.length ? (
            <div className="wiki-subsections">
              {section.subsections.map((subsection) => (
                <article key={subsection.heading} className="wiki-block">
                  <h3>{subsection.heading}</h3>
                  {subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {subsection.bullets?.length ? (
                    <ul className="wiki-bullets">
                      {subsection.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : null}
                  {subsection.table ? <DataTable table={subsection.table} /> : null}
                </article>
              ))}
            </div>
          ) : null}

          {section.steps?.length ? (
            <ol className="wiki-steps">
              {section.steps.map((step, index) => (
                <li key={step.heading} className="wiki-step">
                  <span className="wiki-step-index">{index + 1}</span>
                  <div>
                    <h3>{step.heading}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          ) : null}

          {section.table ? <DataTable table={section.table} /> : null}

          {section.links?.length ? (
            <ul className="wiki-link-list">
              {section.links.map((link) => (
                <li key={`${link.slug}-${link.label}`}>
                  <Link href={routePath(link.slug)}>
                    <strong>{link.label}</strong>
                    {link.description ? <span>{link.description}</span> : null}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
