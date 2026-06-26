// src/app/models/navigation.model.ts
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

export interface Stat {
  value: number;
  label: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
  level?: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
  link?: string;
}

export interface Formation {
  title: string;
  school: string;
  year: string;
  description?: string;
}

export interface Language {
  name: string;
  level: string;
  flag: string;
}
