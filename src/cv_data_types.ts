export interface CVPerson {
    name: string;
    title: string;
    subtitle?: string;
}

export interface CVContact {
    email: string;
    phone?: string;
    location: string;
    website?: string;
    github?: string;
}

export interface CVDatedEntry {
    date: string;
    description: string;
}

export interface CVProjectEntry {
    name: string;
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
    experience: CVDatedEntry[];
    education: CVDatedEntry[];
    projects: CVProjectEntry[];
    competencies: string[];
    softSkills: string[];
    languages: CVLanguageEntry[];
    technologies: string[];
    interests: string[];
    webPresence: string[];
}
