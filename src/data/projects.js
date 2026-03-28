export const projects = [
    {
        id: 1,
        title: "Trip-GUY",
        featured: true,
        problem: "Planning travel itineraries is complex and time-consuming without AI assistance.",
        solution: "Developed an AI-augmented mobile application with a serverless backend for generating dynamic travel itineraries.",
        highlights: [
            "Architected a scalable, serverless backend using Firebase, separating high-frequency transient data from persistent structured data.",
            "Developed a premium, offline-first mobile frontend utilizing Flutter and BLoC for state management.",
            "Integrated Google Gemini API via Firebase Cloud Functions for dynamic AI itineraries."
        ],
        techStack: ["Flutter", "Dart", "Firebase", "Google Gemini API", "BLoC", "Clean Architecture"],
        githubUrl: "https://github.com/Gnanasekaran2004/TG"
    },
    {
        id: 2,
        title: "Spark-CRM",
        featured: true,
        problem: "Need for an efficient customer relationship management system with modern UI and secure authentication.",
        solution: "Developed a full-stack CRM application with Spring Boot backend and React frontend, handling 10,000+ records.",
        highlights: [
            "Architected a full-stack monolithic CRM system with robust RESTful APIs providing sub-100ms response times.",
            "Enforced stateless HTTP Basic Authentication using Spring Security and BCrypt.",
            "Optimized backend database performance by integrating Spring Data JPA within a dual-database environment."
        ],
        techStack: ["Java 21", "Spring Boot", "React 18", "MySQL", "Spring Security"],
        githubUrl: "https://github.com/Gnanasekaran2004/CRM_Gflix"
    },
    {
        id: 3,
        title: "Urban Voice",
        featured: true,
        problem: "Citizens lack accessible platforms to report civic issues and track their resolution status.",
        solution: "Engineered a high-concurrency complaint management system featuring dynamic administrative dashboards.",
        highlights: [
            "Engineered a high-concurrency complaint management system featuring dynamic administrative dashboards mapping 50+ data points.",
            "Integrated complex MongoDB aggregation pipelines to process unstructured data, reducing query execution time.",
            "JWT and BCrypt authentication with robust media handling."
        ],
        techStack: ["Node.js", "Express.js", "MongoDB", "JWT"],
        githubUrl: "https://github.com/Gnanasekaran2004/Urbanvoice"
    }
];
