export interface CVPerson {
    name: string;
    title: string;
    subtitle?: string;
}

export interface CVHyperlinkEntry {
    text: string;
    url: string;
}

export interface CVContact {
    email: string;
    phone?: string;
    location: string;
    website?: CVHyperlinkEntry;
    github?: CVHyperlinkEntry;
}

export interface CVExperienceEntry {
    date: string;
    description: string;
}

export interface CVCompetencyEntry {
    competency: string;
}

export interface CVSoftSkillsEntry {
    skill: string;
}

export interface CVTechnologyEntry {
    category: string;
    entries: string[];
}

export interface CVInterestEntry {
    interest: string;
}

export interface CVWebPresenceEntry {
    title: string;
    value: CVHyperlinkEntry;
}

export interface CVEducationEntry {
    date: string;
    description: string;
}

export interface CVProjectEntry {
    name: string;
    link: CVHyperlinkEntry;
    description: string;
}

export enum CVLanguageProficiency {
    grundkenntnisse = "Grundkenntnisse",
    guteKenntnisse = "Gute Kenntnisse",
    fliessend = "Fließend",
    verhandlungssicher = "Verhandlungssicher",
    muttersprache = "Muttersprache",
}

export interface CVLanguageEntry {
    language: string;
    proficiency: CVLanguageProficiency;
}

export interface CVData {
    person: CVPerson;
    contact: CVContact;
    experience: CVExperienceEntry[];
    education: CVEducationEntry[];
    projects: CVProjectEntry[];
    competencies: CVCompetencyEntry[];
    softSkills: CVSoftSkillsEntry[];
    languages: CVLanguageEntry[];
    technologies: CVTechnologyEntry[];
    interests: CVInterestEntry[];
    webPresence: CVWebPresenceEntry[];
}
