import { Colors } from './colors';

export enum Stack {
  // Design Tools
  figma,
  canva,
  adobe,
  framer,
  sketch,

  // Design Skills
  prototyping,
  responsive,
  designsystems,
  interactionDesign,
  uiDesign,

  // Research
  abTesting,
  accessibility,
  inclusiveDesign,
  wcag,
  usabilityTesting,
  competitiveAnalysis,

  // Technical
  html,
  css,
  javascript,
  typescript,
  react,
  nextjs,
}

// list of skills on about
export const WorkStack = [
  Stack.figma,
  Stack.adobe,
  Stack.framer,
  Stack.sketch,
  Stack.prototyping,
  Stack.responsive,
  Stack.designsystems,
  Stack.interactionDesign,
  Stack.uiDesign,
  Stack.abTesting,
  Stack.accessibility,
  Stack.inclusiveDesign,
  Stack.wcag,
  Stack.usabilityTesting,
  Stack.html,
  Stack.css,
  Stack.javascript,
  Stack.typescript,
  Stack.react,
  Stack.nextjs,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.figma]: {
    value: 'Figma',
    color: Colors.figma,
  },
  [Stack.canva]: {
    value: 'Canva',
    color: Colors.canva,
  },
  [Stack.adobe]: {
    value: 'Adobe Creative Suite',
    color: Colors.adobe,
  },
  [Stack.framer]: {
    value: 'Framer',
    color: Colors.framer,
  },
  [Stack.sketch]: {
    value: 'Sketch',
    color: Colors.sketch,
  },
  [Stack.prototyping]: {
    value: 'Prototyping',
    color: Colors.prototyping,
  },
  [Stack.responsive]: {
    value: 'Responsive Design',
    color: Colors.responsive,
  },
  [Stack.designsystems]: {
    value: 'Design Systems',
    color: Colors.designsystems,
  },
  [Stack.abTesting]: {
    value: 'A/B Testing',
    color: Colors.abTesting,
  },
  [Stack.accessibility]: {
    value: 'Accessibility',
    color: Colors.accessibility,
  },
  [Stack.inclusiveDesign]: {
    value: 'Inclusive Design',
    color: Colors.inclusiveDesign,
  },
  [Stack.wcag]: {
    value: 'WCAG Guidelines',
    color: Colors.wcag,
  },
  [Stack.usabilityTesting]: {
    value: 'Usability Testing',
    color: Colors.usabilityTesting,
  },
  [Stack.html]: {
    value: 'HTML',
    color: Colors.html,
  },
  [Stack.css]: {
    value: 'CSS',
    color: Colors.css,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.nextjs]: {
    value: 'Next.js',
    color: Colors.nextjs,
  },
  [Stack.interactionDesign]: {
    value: 'Interaction Design',
    color: Colors.interactionDesign,
  },
  [Stack.uiDesign]: {
    value: 'UI Design',
    color: Colors.uiDesign,
  },
  [Stack.competitiveAnalysis]: {
    value: 'Competitive Analysis',
    color: Colors.competitiveAnalysis,
  },
};
