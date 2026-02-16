// Unified type for all portfolio items across the site
export type PortfolioItem = {
    slug: string;
    title: string;
    tagline?: string;
    company?: string;
    category: 'enterprise' | 'solutions' | 'proposal';
    year?: string;
    tags?: string[];
    problem?: string;
    impact?: string[];
    description?: string[];
    liveUrl?: string;
    repoUrl?: string;
    caseStudyUrl?: string;
    status?: 'live' | 'in-progress' | 'concept';
    // Additional fields for detailed views
    role?: string;
    proof?: string;
};

// Legacy type alias for backwards compatibility with GitHub fetcher
export type ProductLabProject = PortfolioItem;
