export const projects = [
  {
    name: "VuelaData",
    description: "Plataforma académica para procesamiento y seguimiento de información operacional de vuelos.",
    problem: "Procesar y dar seguimiento a eventos operacionales de vuelos de forma estructurada.",
    solution: "Arquitectura basada en servicios con procesamiento de eventos OOOI y generación de vuelos.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
  },
  {
    name: "DataMart S.A.S.",
    description: "Ingeniería de datos para procesar información comercial con modelo dimensional Snowflake.",
    problem: "Extraer, transformar y cargar datos comerciales desde archivos CSV con auditoría de rechazados.",
    solution: "Pipeline ETL con Airflow 3.1.5, PostgreSQL y dashboard en Power BI.",
    technologies: ["Python", "Pandas", "Apache Airflow", "PostgreSQL", "Docker", "Power BI"],
  },
  {
    name: "SOLPED - Ecopetrol",
    description: "Solución para gestión y seguimiento de solicitudes SOLPED con integración a SAP.",
    problem: "Gestionar solicitudes SOLPED y automatizar seguimientos periódicos.",
    solution: "App en Power Apps con flujos Power Automate, SharePoint y Excel.",
    technologies: ["Power Apps", "Power Automate", "SharePoint", "Excel"],
  },
  {
    name: "Barranquilla Explora",
    description: "Aplicación web desarrollada para ofrecer una experiencia digital relacionada con la exploración de Barranquilla.",
    problem: "La información sobre lugares y atractivos de Barranquilla puede encontrarse dispersa en diferentes fuentes, dificultando su consulta.",
    solution: "Una plataforma web que centraliza y presenta información de interés sobre Barranquilla, facilitando su consulta y exploración.",
    technologies: ["Vite", "JavaScript", "Tailwind CSS", "Express.js"],
    repository: null,
  },
];
