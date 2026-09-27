import Conditional from '@/components/Conditional';
import {
  CaseStudyGallery,
  CaseStudySections,
  ProjectContents,
} from '@/components/CaseStudyContent';
import { H1, H2, H3 } from '@/components/Form';
import DeploymentList from '@/components/list/DeploymentList';
import StackList from '@/components/list/StackList';
import { PageSEO } from '@/components/SEO';
import config from 'config';
import type { CaseStudySection, Project, SubProject } from 'config/projects';
import { defaultDimensions } from 'config/projects';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import React, { useCallback } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Toc } from 'types/Toc';

const { projects } = config;

function getSectionToc(sections: CaseStudySection[], depth = 3): Toc {
  return sections.flatMap(section => [
    ...(section.title
      ? [{ value: section.title, depth, url: `#${section.id}` }]
      : []),
    ...getSectionToc(
      section.subsections ?? [],
      depth + (section.title ? 1 : 0),
    ),
  ]);
}

function getProjectToc(project: Project): Toc {
  const toc: Toc = [{ value: 'Overview', depth: 2, url: '#overview' }];

  if (project.challengeStatement) {
    toc.push({
      value: 'Challenge',
      depth: 2,
      url: '#challenge-statement',
    });
  }

  if (project.userResearch?.length) {
    toc.push(
      { value: 'User Research', depth: 2, url: '#user-research' },
      ...getSectionToc(project.userResearch),
    );
  }

  if (project.improvedDesign?.length) {
    toc.push(
      { value: 'Improved Design', depth: 2, url: '#improved-design' },
      ...getSectionToc(project.improvedDesign),
    );
  }

  if (project.finalDesigns?.length) {
    toc.push({ value: 'Final Designs', depth: 2, url: '#final-designs' });
  }

  if (project.stack.length) {
    toc.push({ value: 'Stack', depth: 2, url: '#stack' });
  }

  if (project.deployment && Object.keys(project.deployment).length) {
    toc.push({ value: 'Deployments', depth: 2, url: '#deployments' });
  }

  if (project.screenshots.length) {
    toc.push({ value: 'Screenshots', depth: 2, url: '#screenshots' });
  }

  if (project.website || project.figmaRepository) {
    toc.push({ value: 'Project Links', depth: 2, url: '#project-links' });
  }

  if (project.subProjects.length) {
    toc.push({ value: 'More Products', depth: 2, url: '#more-products' });
  }

  return toc;
}

export async function getStaticPaths() {
  return {
    paths: projects.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  project: Project;
}> = async ({ params }) => {
  const project = projects.find(project => project.slug === params.slug);

  return {
    props: {
      project,
    },
  };
};

export default function Project({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    title,
    overview,
    shortDescription,
    banner,
    dimensions,
    stack,
    deployment,
    screenshots,
    subProjects,
    challengeStatement,
    userResearch = [],
    improvedDesign = [],
    finalDesigns = [],
    website,
    figmaRepository,
  } = project;

  const [height, width] = dimensions ?? defaultDimensions;
  const toc = getProjectToc(project);

  const renderScreenShotList = useCallback(
    (screenshot: string) => {
      const style: React.CSSProperties = {
        height,
        width,
      };

      return (
        <div
          className='mr-2 flex-shrink-0 overflow-hidden rounded bg-placeholder-light dark:bg-placeholder-dark'
          style={style}
        >
          <Image
            loading='eager'
            src={screenshot}
            height={height}
            width={width}
            objectFit='cover'
            alt=''
          />
        </div>
      );
    },
    [height, width],
  );

  const renderSubProjectList = useCallback(
    ({ title, deployment, description }: SubProject) => (
      <>
        <H3>{title}</H3>
        <Conditional condition={!!deployment}>
          <DeploymentList deployment={deployment} />
        </Conditional>
        <p className='mt-2 mb-4 font-light'>{description}</p>
      </>
    ),
    [],
  );

  const hasDeployments = !!deployment;
  const hasScreenshots = !!screenshots.length;
  const hasSubProjects = !!subProjects.length;

  return (
    <>
      <PageSEO
        title={title}
        description={shortDescription || overview}
        imageUrl={banner}
      />
      <article className='fade-in'>
        <div className='grid gap-8 xl:grid-cols-[14rem_minmax(0,1fr)]'>
          <ProjectContents toc={toc} />
          <div className='min-w-0'>
            <header>
              <H1 className='mb-5 text-3xl font-bold dark:text-white lg:text-5xl'>
                {title}
              </H1>
              <section id='overview' className='mt-8 scroll-mt-8'>
                <H2>Overview</H2>
                <p className='leading-7'>{overview}</p>
              </section>
            </header>

            {challengeStatement && (
              <section id='challenge-statement' className='mt-12 scroll-mt-8'>
                <H2>Challenge Statement</H2>
                <p className='leading-7'>{challengeStatement}</p>
              </section>
            )}

            {userResearch.length > 0 && (
              <section id='user-research' className='mt-12 scroll-mt-8'>
                <H2>User Research</H2>
                <CaseStudySections sections={userResearch} />
              </section>
            )}

            {improvedDesign.length > 0 && (
              <section id='improved-design' className='mt-12 scroll-mt-8'>
                <H2>Improved Design</H2>
                <CaseStudySections sections={improvedDesign} />
              </section>
            )}

            {finalDesigns.length > 0 && (
              <section id='final-designs' className='mt-12 scroll-mt-8'>
                <H2>Final Designs</H2>
                <CaseStudyGallery images={finalDesigns} />
              </section>
            )}

            {stack.length > 0 && (
              <section id='stack' className='mt-12 scroll-mt-8'>
                <H2>Stack</H2>
                <StackList stack={stack} />
              </section>
            )}

            {hasDeployments && Object.keys(deployment).length > 0 && (
              <section id='deployments' className='mt-12 scroll-mt-8'>
                <H2>Deployments</H2>
                <DeploymentList deployment={deployment} />
              </section>
            )}

            {hasScreenshots && (
              <section id='screenshots' className='mt-12 scroll-mt-8'>
                <H2>Screenshots</H2>
                <ScrollContainer
                  className='list mt-4 mb-1 flex overflow-auto'
                  hideScrollbars={false}
                >
                  {React.Children.toArray(
                    screenshots.map(renderScreenShotList),
                  )}
                </ScrollContainer>
              </section>
            )}

            {(website || figmaRepository) && (
              <section id='project-links' className='mt-12 scroll-mt-8'>
                <H2>Project Links</H2>
                <div className='flex flex-wrap gap-3'>
                  {website && (
                    <a
                      className='rounded border border-gray-300 px-3 py-2 text-sm font-medium hover:border-primary-500 dark:border-gray-700'
                      href={website}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Website
                    </a>
                  )}
                  {figmaRepository && (
                    <a
                      className='rounded border border-gray-300 px-3 py-2 text-sm font-medium hover:border-primary-500 dark:border-gray-700'
                      href={figmaRepository}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Figma file
                    </a>
                  )}
                </div>
              </section>
            )}

            {hasSubProjects && (
              <section id='more-products' className='mt-12 scroll-mt-8'>
                <H2>More Products</H2>
                <div className='mt-4'>
                  {React.Children.toArray(
                    subProjects.map(renderSubProjectList),
                  )}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
