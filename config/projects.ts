import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface Opportunity {
  opportunity: string;
  gap: string;
  feature: string;
}

export type CaseStudyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | {
      type: 'table';
      columns: string[];
      rows: (string | string[])[][];
      caption?: string;
    }
  | { type: 'opportunities'; items: Opportunity[] }
  | { type: 'image'; image: ProjectImage }
  | { type: 'before-after'; before: ProjectImage; after: ProjectImage };

export interface CaseStudySection {
  id: string;
  title?: string;
  blocks: CaseStudyBlock[];
  subsections?: CaseStudySection[];
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website?: string;
  banner: string;
  overview: string;
  shortDescription?: string;
  figmaRepository?: string;
  challengeStatement?: string;
  userResearch?: CaseStudySection[];
  improvedDesign?: CaseStudySection[];
  finalDesigns?: ProjectImage[];
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment?: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'AI Model Catalogue',
    slug: 'ai-model-catalogue',
    banner: '/static/projects/ai-model-catalogue/banner.png',
    // website: 'https://www.behance.net/gallery/247170707/AI-Model-Catalogue',
    overview:
      'Conducted end-to-end user research for an AI model catalogue platform by analyzing competitor products such as Vercel, LiteLLM, Portkey, and OpenRouter, along with developer pain points surfaced through 7 GitHub issues. Defined 2 challenge statements, user needs, and 5 new product opportunities. Used Claude to accelerate research synthesis and feature ideation. Designed in-platform model management workflows allowing users to add/update models directly through the UI. Enhanced model discovery with better filtering, comparison tools, lifecycle indicators, pricing transparency, and clearer model information.',
    shortDescription:
      'AI model catalogue - user research, competitive analysis, model management workflows.',
    figmaRepository:
      'https://www.figma.com/design/q87i6cntDVbBZJ4VvJXQQa/AI-Model-Registry?node-id=424-962&p=f&t=xxo3yVMEtbYhqXpN-0',
    challengeStatement:
      'How might we improve the discoverability and management of AI models for developers, while ensuring transparency and ease of use?',
    userResearch: [
      {
        id: 'research-approach',
        blocks: [
          {
            type: 'paragraph',
            text: 'I compared Vercel, LiteLLM, Portkey, and OpenRouter, and reviewed seven GitHub issues to understand developer pain points. I synthesized the recurring gaps into user needs and used those needs to identify design opportunities. The table below links each issue to its problem, the user need it creates, and a potential opportunity.',
          },
          {
            type: 'table',
            columns: ['Information', 'Problem', 'User Need', 'Opportunities'],
            rows: [
              [
                'Model addition or updation currently require manual interaction with GitHub (raising issues outside the platform)',
                'Breaks workflow continuity users must leave the platform, causing friction and drop-offs',
                'Developers need an in platform way to add or update models without switching contexts',
                ['Introduce a low-friction entry point within the UI'],
              ],
              [
                'Deprecated models stay visible indefinitely',
                'Developers continue using models that have been deprecated or retired, due to lack of visibility. This leads to sudden production failures',
                'Users need real-time visibility into a model’s lifecycle status (especially deprecation and end-of-life timelines',
                [
                  'Surface high-visibility lifecycle signals across the product',
                  'Alerts/ warnings',
                ],
              ],
              [
                'Stale and incorrect pricing data',
                'Developers build cost-estimation logic on wrong numbers',
                'Users need to know how recently each pricing value was verified and where it came from',
                ['Show when was it last verified on every model'],
              ],
              [
                'Comparison mechanism for decision-making',
                'Developers have to compare similar models across multiple tabs and tools due to the absence side-by-side comparison system.',
                'They need to evaluate multiple models in one place across cost, performance and features to make fast decisions.',
                [
                  'Introduce a unified comparison system that consolidates key model metrics.',
                ],
              ],
              [
                'Region-specific model variants and their identifiers are not visible in the UI',
                'leads to deployment errors and reliance on external documentation.',
                'They need clear visibility of all regional model variants and identifiers to ensure correct and reliable deployment.',
                [
                  'Surface comprehensive region-level model information directly within the core discovery and selection flow.',
                ],
              ],
            ],
          },
        ],
      },
    ],
    improvedDesign: [],
    finalDesigns: [],
    stack: [
      Stack.figma,
      Stack.userInterviews,
      Stack.surveys,
      Stack.competitorAnalysis,
      Stack.empathyMapping,
      Stack.informationArchitecture,
      Stack.wireframing,
      Stack.prototyping,
      Stack.userflows,
      Stack.responsive,
    ],
    screenshots: [],
    subProjects: [],
  },
];
