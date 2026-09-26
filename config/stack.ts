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
  wireframing,
  userflows,
  responsive,
  designsystems,
  typography,
  colorTheory,
  layout,
  iconography,

  // Research
  userInterviews,
  surveys,
  personaDevelopment,
  abTesting,
  accessibility,
  inclusiveDesign,
  journeyMapping,
  wcag,
  informationArchitecture,
  competitorAnalysis,
  empathyMapping,

  // Technical
  html,
  css,

  // Certifications
  googleUX,
}

export const WorkStack = [
  Stack.figma,
  Stack.canva,
  Stack.adobe,
  Stack.framer,
  Stack.sketch,
  Stack.prototyping,
  Stack.wireframing,
  Stack.userflows,
  Stack.responsive,
  Stack.designsystems,
  Stack.typography,
  Stack.colorTheory,
  Stack.layout,
  Stack.iconography,
  Stack.userInterviews,
  Stack.surveys,
  Stack.personaDevelopment,
  Stack.abTesting,
  Stack.accessibility,
  Stack.inclusiveDesign,
  Stack.journeyMapping,
  Stack.wcag,
  Stack.informationArchitecture,
  Stack.competitorAnalysis,
  Stack.empathyMapping,
  Stack.html,
  Stack.css,
  Stack.googleUX,
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
  [Stack.wireframing]: {
    value: 'Wireframing',
    color: Colors.wireframing,
  },
  [Stack.userflows]: {
    value: 'User Flows',
    color: Colors.userflows,
  },
  [Stack.responsive]: {
    value: 'Responsive Design',
    color: Colors.responsive,
  },
  [Stack.designsystems]: {
    value: 'Design Systems',
    color: Colors.designsystems,
  },
  [Stack.typography]: {
    value: 'Typography',
    color: Colors.typography,
  },
  [Stack.colorTheory]: {
    value: 'Color Theory',
    color: Colors.colorTheory,
  },
  [Stack.layout]: {
    value: 'Layout Design',
    color: Colors.layout,
  },
  [Stack.iconography]: {
    value: 'Iconography',
    color: Colors.iconography,
  },
  [Stack.userInterviews]: {
    value: 'User Interviews',
    color: Colors.userInterviews,
  },
  [Stack.surveys]: {
    value: 'Surveys',
    color: Colors.surveys,
  },
  [Stack.personaDevelopment]: {
    value: 'Persona Development',
    color: Colors.personaDevelopment,
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
  [Stack.journeyMapping]: {
    value: 'Journey Mapping',
    color: Colors.journeyMapping,
  },
  [Stack.wcag]: {
    value: 'WCAG Guidelines',
    color: Colors.wcag,
  },
  [Stack.informationArchitecture]: {
    value: 'Information Architecture',
    color: Colors.informationArchitecture,
  },
  [Stack.competitorAnalysis]: {
    value: 'Competitor Analysis',
    color: Colors.competitorAnalysis,
  },
  [Stack.empathyMapping]: {
    value: 'Empathy Mapping',
    color: Colors.empathyMapping,
  },
  [Stack.html]: {
    value: 'HTML',
    color: Colors.html,
  },
  [Stack.css]: {
    value: 'CSS',
    color: Colors.css,
  },
  [Stack.googleUX]: {
    value: 'Google UX Certification',
    color: Colors.googleUX,
  },
};
