export interface Feature {
  icon?: string;
  title: string;
  description: string;
}

export interface CodeExample {
  language: string;
  code: string;
}

export interface ApiParam {
  name: string;
  type: string;
  description: string;
  optional?: boolean;
}

export interface FunctionDoc {
  id: string;
  title: string;
  description: string;
  examples: CodeExample[];
  params?: ApiParam[];
  returns?: string;
  features?: string[];
}

export interface Section {
  id: string;
  title: string;
  level: 1 | 2 | 3 | 4;
  description?: string;
  content?: string;
  subsections?: Section[];
  examples?: CodeExample[];
  lists?: string[];
  items?: Array<{ type: 'text' | 'code'; content: string }>;
}

export interface PageConfig {
  title: string;
  description: string;
  features: Feature[];
  sections: Section[];
}

