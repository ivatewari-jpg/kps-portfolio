import { Collapse } from '@geist-ui/core';
import type {
  CaseStudyBlock,
  CaseStudySection,
  ProjectImage,
} from 'config/projects';
import Image from 'next/image';
import { Toc } from 'types/Toc';

interface CaseStudySectionsProps {
  sections: CaseStudySection[];
  depth?: number;
}

interface ProjectContentsProps {
  toc: Toc;
}

export function ProjectContents({ toc }: ProjectContentsProps) {
  const links = (
    <ol className='space-y-1'>
      {toc.map(({ value, depth, url }) => (
        <li key={url} className={depth > 2 ? 'pl-3' : undefined}>
          <a
            className='block py-1 text-sm text-gray-600 no-underline hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400'
            href={url}
          >
            {value}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <nav aria-label='On this page' className='hidden xl:block'>
        <div className='sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto border-l border-gray-200 pl-4 dark:border-gray-700'>
          <h2 className='mb-3 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400'>
            On this page
          </h2>
          {links}
        </div>
      </nav>
      <div className='mb-8 xl:hidden'>
        <Collapse className='!border-0 !pt-0' title='On this page'>
          <nav aria-label='On this page' className='ml-4'>
            {links}
          </nav>
        </Collapse>
      </div>
    </>
  );
}

function ProjectFigure({ image }: { image: ProjectImage }) {
  return (
    <figure className='my-5 min-w-0'>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width ?? 1600}
        height={image.height ?? 900}
        layout='responsive'
        objectFit='contain'
        className='rounded border border-gray-200 dark:border-gray-700'
      />
      {image.caption && (
        <figcaption className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function CaseStudyBlocks({ blocks }: { blocks: CaseStudyBlock[] }) {
  return (
    <div className='space-y-5'>
      {blocks.map((block, blockIndex) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={`paragraph-${blockIndex}`} className='leading-7'>
                {block.text}
              </p>
            );
          case 'list':
            return (
              <ul
                key={`list-${blockIndex}`}
                className='list-disc space-y-2 pl-6 leading-7'
              >
                {block.items.map((item, itemIndex) => (
                  <li key={`${blockIndex}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            );
          case 'table':
            return (
              <div
                key={`table-${blockIndex}`}
                className='my-6 overflow-x-auto rounded border border-gray-200 dark:border-gray-700'
              >
                <table className='min-w-full divide-y divide-gray-200 text-left text-sm dark:divide-gray-700'>
                  {block.caption && (
                    <caption className='px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-200'>
                      {block.caption}
                    </caption>
                  )}
                  <thead className='bg-gray-50 dark:bg-gray-800'>
                    <tr>
                      {block.columns.map((column, columnIndex) => (
                        <th
                          key={`${column}-${columnIndex}`}
                          scope='col'
                          className='px-4 py-3 font-semibold'
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={`row-${rowIndex}`}>
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th
                              key={`cell-${cellIndex}`}
                              scope='row'
                              className='px-4 py-3 font-medium'
                            >
                              {cell}
                            </th>
                          ) : (
                            <td
                              key={`cell-${cellIndex}`}
                              className='px-4 py-3 align-top'
                            >
                              {Array.isArray(cell) ? (
                                <ul className='list-disc space-y-1 pl-4'>
                                  {cell.map((item, itemIndex) => (
                                    <li
                                      key={`${rowIndex}-${cellIndex}-${itemIndex}`}
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                cell
                              )}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'opportunities':
            return (
              <div key={`opportunities-${blockIndex}`} className='space-y-6'>
                {block.items.map(item => (
                  <article
                    key={item.opportunity}
                    className='border-l-2 border-primary-500 pl-4'
                  >
                    <h4 className='text-lg font-semibold'>
                      {item.opportunity}
                    </h4>
                    <dl className='mt-3 grid gap-4 sm:grid-cols-3'>
                      <div>
                        <dt className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400'>
                          Gap
                        </dt>
                        <dd className='mt-1 leading-6'>{item.gap}</dd>
                      </div>
                      <div>
                        <dt className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400'>
                          Opportunity
                        </dt>
                        <dd className='mt-1 leading-6'>{item.opportunity}</dd>
                      </div>
                      <div>
                        <dt className='text-xs font-semibold uppercase text-gray-500 dark:text-gray-400'>
                          Feature
                        </dt>
                        <dd className='mt-1 leading-6'>{item.feature}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            );
          case 'image':
            return (
              <ProjectFigure key={`image-${blockIndex}`} image={block.image} />
            );
          case 'before-after':
            return (
              <div
                key={`before-after-${blockIndex}`}
                className='grid gap-5 md:grid-cols-2'
              >
                <div>
                  <h4 className='text-sm font-semibold uppercase text-gray-500 dark:text-gray-400'>
                    Before
                  </h4>
                  <ProjectFigure image={block.before} />
                </div>
                <div>
                  <h4 className='text-sm font-semibold uppercase text-gray-500 dark:text-gray-400'>
                    After
                  </h4>
                  <ProjectFigure image={block.after} />
                </div>
              </div>
            );
        }
      })}
    </div>
  );
}

export function CaseStudySections({
  sections,
  depth = 3,
}: CaseStudySectionsProps) {
  const Heading = depth === 3 ? 'h3' : 'h4';
  const headingClass =
    depth === 3
      ? 'mt-8 mb-3 scroll-mt-8 text-xl font-semibold'
      : 'mt-6 mb-3 scroll-mt-8 text-lg font-semibold';

  return (
    <>
      {sections.map(section => {
        const content = (
          <>
            {section.title && (
              <Heading id={section.id} tabIndex={-1} className={headingClass}>
                {section.title}
              </Heading>
            )}
            <CaseStudyBlocks blocks={section.blocks} />
            {section.subsections && section.subsections.length > 0 && (
              <CaseStudySections
                sections={section.subsections}
                depth={depth + (section.title ? 1 : 0)}
              />
            )}
          </>
        );

        return section.title ? (
          <section key={section.id} aria-labelledby={section.id}>
            {content}
          </section>
        ) : (
          <div key={section.id}>{content}</div>
        );
      })}
    </>
  );
}

export function CaseStudyGallery({ images }: { images: ProjectImage[] }) {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      {images.map(image => (
        <ProjectFigure key={image.src} image={image} />
      ))}
    </div>
  );
}
