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

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'AI Model Catalogue Platform',
    slug: 'ai-model-catalogue',
    banner: '/static/projects/ai-model-catalogue/banner.png',
    website: 'https://www.behance.net/gallery/247170707/AI-Model-Catalogue',
    description:
      'Conducted end-to-end user research for an AI model catalogue platform by analyzing competitor products such as Vercel, LiteLLM, Portkey, and OpenRouter, along with developer pain points surfaced through 7 GitHub issues. Defined 2 challenge statements, user needs, and 5 new product opportunities. Used Claude to accelerate research synthesis and feature ideation. Designed in-platform model management workflows allowing users to add/update models directly through the UI. Enhanced model discovery with better filtering, comparison tools, lifecycle indicators, pricing transparency, and clearer model information.',
    shortDescription:
      'AI model catalogue - user research, competitive analysis, model management workflows.',
    repository: null,
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
    deployment: {
      web: 'https://www.behance.net/gallery/247170707/AI-Model-Catalogue',
    },
    subProjects: [],
  },
];
