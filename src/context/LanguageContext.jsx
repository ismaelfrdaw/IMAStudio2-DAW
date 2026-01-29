import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            news: 'News',
            contact: 'Contact',
            search: 'Search...',
        },
        hero: {
            titleStart: 'Elevate Your',
            titleEnd: 'Digital Presence',
            subtitle: 'Creative-led strategies designed to scale your business through bold design and precision marketing.',
            ctaPrimary: 'Get Started',
            ctaSecondary: 'View Work',
            ceos: 'CEOs: Ismael and Mario from 2º DAW',
        },
        services: {
            title: 'Our Expertise',
            subtitle: 'Comprehensive digital solutions tailored to grow your business.',
            items: [
                { title: "Branding & Corporative Identity", desc: "Designing strong, coherent, and memorable brands that stand out in the market." },
                { title: "Web Design & UX/UI", desc: "Modern, device-optimized websites focused on user experience and conversion." },
                { title: "Social Media Management", desc: "Content creation, scheduling, advertising, and organic growth strategies." },
                { title: "Multimedia Production", desc: "Professional photography, video editing, animation, and premium digital content." },
                { title: "Digital Marketing Strategies", desc: "Result-oriented campaigns: SEO, SEM, conversion funnels, and automation." },
                { title: "SEO & Content Strategy", desc: "Data-driven optimization to improve visibility and organic reach through high-quality content." }
            ]
        },
        packs: {
            title: "Choose Your Growth Pack",
            subtitle: "Transparent pricing designed for every stage of your business journey.",
            quizBtn: "Find My Recommended Pack",
            btnPrefix: "Choose",
            popular: "Popular",
            priceSuffix: "/project",
            items: [
                {
                    id: 'starter',
                    name: "Starter Pack",
                    price: "499",
                    desc: "Perfect for new brands looking to establish a professional digital footprint.",
                    features: ["Corporate Identity (Logo + Brand)", "Premium Landing Page", "Basic SEO Setup", "Social Media Launch Kit"]
                },
                {
                    id: 'growth',
                    name: "Growth Pack",
                    price: "999",
                    desc: "The sweet spot for growing businesses ready to dominate their niche.",
                    features: ["Complete Brand Manual", "Advanced UX/UI Web Design", "Monthly Social Media Management", "Content Strategy & Copywriting", "Advanced SEO Optimization"]
                },
                {
                    id: 'elite',
                    name: "Elite Pack",
                    price: "1999",
                    desc: "Full-scale agency partnership for maximum market impact.",
                    features: ["Premium Multimedia Production", "High-Performance E-commerce", "Paid Ads Management (SEM)", "Influencer Marketing Strategy", "Priority 24/7 Support"]
                }
            ]
        },
        quiz: {
            title: "Deep Analysis Recommender",
            subtitle: "Answer 10 short questions for a precise business recommendation.",
            qPrefix: "Question",
            qOf: "of",
            questions: [
                { q: "What is your current business stage?", options: ["Just an idea", "Growing business", "Consolidated enterprise"] },
                { q: "What is your main priority?", options: ["Being discovered", "Generating sales", "Building brand authority"] },
                { q: "Do you have an existing brand identity?", options: ["None at all", "Needs an update", "Fully satisfied"] },
                { q: "Which market do you target?", options: ["Local/Specific", "National", "Global/Multilingual"] },
                { q: "How urgent is your project?", options: ["ASAP (Under 1 month)", "Standard (2-3 months)", "No rush"] },
                { q: "Do you need e-commerce functionality?", options: ["No, just information", "Standard online shop", "Complex marketplace"] },
                { q: "How is your current social media presence?", options: ["Non-existent", "Active but needs help", "Highly professional"] },
                { q: "What is your content creation need?", options: ["Just text/graphics", "Professional photography", "Cinema-grade video"] },
                { q: "How many page views do you aim for?", options: ["0 - 5k monthly", "5k - 50k monthly", "Over 50k monthly"] },
                { q: "What is your ideal monthly budget range?", options: ["Under 800€", "800€ - 1500€", "Over 1500€"] }
            ],
            resultHeading: "Your Strategic Match:",
            reset: "Restart Analysis",
            cta: "Secure My Pack"
        },
        cta: {
            title: "Ready to Transform Your Brand?",
            desc: "Let's collaborate to build a digital presence that drives real growth through cutting-edge strategy and creative excellence.",
            btn: "START A PROJECT"
        },
        values: {
            title: 'Why Choose',
            subtitle: 'IMA Studio?',
            items: [
                { title: "Strategic Creativity", desc: "We don't just design; every color, shape, and element serves a communication goal." },
                { title: "Digital Efficiency", desc: "Optimizing every resource for maximum visibility, engagement, and ROI." },
                { title: "Valuable Experiences", desc: "Creating brands that aren't just seen, but felt. Converting viewers into customers." }
            ],
            overlay: [
                "Fresh & Creative Approach",
                "Visible Results",
                "Direct Communication",
                "Professional Delivery"
            ]
        },
        methodology: {
            title: 'Our Methodology',
            subtitle: 'At IMA Studio, we work with a clear process that builds trust and delivers excellence.',
            steps: [
                { title: "Briefing & Analysis", desc: "Meeting to identify needs and analyze the brand." },
                { title: "Conceptual Design", desc: "Initial proposals, moodboards, and creative structure." },
                { title: "Visual Development", desc: "Building identity, mockups, and content creation." },
                { title: "Review & Optimize", desc: "Feedback-based adjustments and final refinement." },
                { title: "Delivery", desc: "Project handover and post-delivery support." }
            ]
        },
        footer: {
            desc: "Leading digital boutique agency focused on high-growth startups and established global enterprises.",
            rights: "© 2026 IMA STUDIO. All rights reserved.",
            terms: "Privacy Policy",
            cookies: "Cookies",
            ceos: 'CEOs: Ismael and Mario - 2º DAW',
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Have a project in mind? Let's build something amazing together.",
            visit: { title: "Visit Us", text: "123 Innovation Drive, Tech City" },
            email: { title: "Email Us" },
            call: { title: "Call Us" },
            tags: { contact: "Get in touch" },
            form: { name: "Name", email: "Email", message: "Message", btn: "Send Message", placeholder: "Tell us about your project...", success: "Message Sent!", successDesc: "Thank you for reaching out. We'll get back to you within 24 hours.", redo: "Send Another", sending: "Sending..." }
        },
        news: {
            title: "Latest News",
            subtitle: "Stay updated with the latest trends and updates from IMA Studio.",
            tags: { insight: "Insight & Updates" },
            items: [
                { category: "Marketing", title: "The Future of Digital Branding in 2026", desc: "Discover how AI and sensory branding are redefining customer connections.", image: "/media/imagenes/reunion.png" },
                { category: "Design", title: "Minimalism vs Maximalism", desc: "Which approach wins in the era of short attention spans? Analysis of top trends.", image: "/media/imagenes/oficina.png" },
                { category: "Tech", title: "AI in Creative Workflows", desc: "Our team shares how we integrate GenAI while maintaining human creativity.", image: "/media/imagenes/equipo.png" }
            ]
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            about: 'Nosotros',
            services: 'Servicios',
            news: 'Noticias',
            contact: 'Contacto',
            search: 'Buscar...',
        },
        hero: {
            titleStart: 'Eleva tu',
            titleEnd: 'Presencia Digital',
            subtitle: 'Estrategias creativas diseñadas para escalar tu negocio mediante diseño audaz y marketing de precisión.',
            ctaPrimary: 'Comenzar',
            ctaSecondary: 'Ver Trabajos',
            ceos: 'CEOs: Ismael y Mario de 2º DAW',
        },
        services: {
            title: 'Nuestra Experiencia',
            subtitle: 'Soluciones digitales integrales diseñadas para hacer crecer tu negocio.',
            items: [
                { title: "Branding e Identidad Corporativa", desc: "Diseño de marcas fuertes, coherentes y memorables que destacan en el mercado." },
                { title: "Diseño Web y UX/UI", desc: "Sitios web modernos, optimizados para dispositivos y enfocados en la experiencia de usuario y la conversión." },
                { title: "Gestión de Redes Sociales", desc: "Creación de contenido, planificación, publicidad y estrategias de crecimiento orgánico." },
                { title: "Producción Multimedia", desc: "Fotografía profesional, edición de video, animación y contenido digital premium." },
                { title: "Estrategias de Marketing Digital", desc: "Campañas orientadas a resultados: SEO, SEM, embudos de conversión y automatización." },
                { title: "SEO y Estrategia de Contenidos", desc: "Optimización basada en datos para mejorar la visibilidad y el alcance orgánico mediante contenido de alta calidad." }
            ]
        },
        packs: {
            title: "Elige tu Pack de Crecimiento",
            subtitle: "Precios transparentes diseñados para cada etapa de tu negocio.",
            quizBtn: "Encuentra mi Pack Recomendado",
            btnPrefix: "Elegir",
            popular: "Popular",
            priceSuffix: "/proyecto",
            items: [
                {
                    id: 'starter',
                    name: "Pack Starter",
                    price: "499",
                    desc: "Ideal para nuevas marcas que buscan establecer una presencia digital profesional.",
                    features: ["Identidad Corporativa (Logo + Marca)", "Landing Page Premium", "Configuración SEO Básica", "Kit de Redes Sociales"]
                },
                {
                    id: 'growth',
                    name: "Pack Growth",
                    price: "999",
                    desc: "La opción preferida para negocios en crecimiento que quieren dominar su nicho.",
                    features: ["Manual de Marca Completo", "Diseño Web UX/UI Avanzado", "Gestión Mensual de Redes Sociales", "Estrategia de Contenidos", "Optimización SEO Avanzada"]
                },
                {
                    id: 'elite',
                    name: "Pack Elite",
                    price: "1999",
                    desc: "Alianza completa con nuestra agencia para un impacto máximo en el mercado.",
                    features: ["Producción Multimedia Premium", "E-commerce de Alto Rendimiento", "Gestión de Ads (SEM)", "Estrategia con Influencers", "Soporte Prioritario 24/7"]
                }
            ]
        },
        quiz: {
            title: "Recomendador Estratégico",
            subtitle: "Responde 10 preguntas breves para obtener una recomendación de negocio precisa.",
            qPrefix: "Pregunta",
            qOf: "de",
            questions: [
                { q: "¿En qué etapa está tu negocio actualmente?", options: ["Solo una idea", "Negocio en crecimiento", "Empresa consolidada"] },
                { q: "¿Cuál es tu prioridad principal?", options: ["Ser descubierto", "Generar ventas", "Construir autoridad de marca"] },
                { q: "¿Tienes una identidad de marca existente?", options: ["Nada en absoluto", "Necesita una actualización", "Totalmente satisfecho"] },
                { q: "¿A qué mercado te diriges?", options: ["Local/Específico", "Nacional", "Global/Multilingüe"] },
                { q: "¿Cuánta urgencia tiene tu proyecto?", options: ["ASAP (Menos de 1 mes)", "Estándar (2-3 meses)", "Sin prisa"] },
                { q: "¿Necesitas funciones de venta online?", options: ["No, solo información", "Tienda online estándar", "Marketplace complejo"] },
                { q: "¿Cómo es tu presencia actual en redes sociales?", options: ["Inexistente", "Activa pero necesita ayuda", "Altamente profesional"] },
                { q: "¿Qué necesidad de creación de contenido tienes?", options: ["Solo texto/gráficos", "Fotografía profesional", "Video de nivel cinematográfico"] },
                { q: "¿Cuántas visitas quieres alcanzar?", options: ["0 - 5k mensuales", "5k - 50k mensuales", "Más de 50k mensuales"] },
                { q: "¿Cuál es tu rango de inversión mensual ideal?", options: ["Menos de 800€", "800€ - 1500€", "Más de 1500€"] }
            ],
            resultHeading: "Tu Match Estratégico:",
            reset: "Reiniciar Análisis",
            cta: "Asegurar Mi Pack"
        },
        cta: {
            title: "¿Listo para transformar tu marca?",
            desc: "Colaboremos para construir una presencia digital que impulse un crecimiento real mediante estrategia de vanguardia y excelencia creativa.",
            btn: "EMPEZAR PROYECTO"
        },
        values: {
            title: '¿Por qué elegir',
            subtitle: 'IMA Studio?',
            items: [
                { title: "Creatividad Estratégica", desc: "No solo diseñamos; cada color, forma y elemento tiene un objetivo de comunicación." },
                { title: "Eficiencia Digital", desc: "Optimizamos cada recurso para obtener la máxima visibilidad, compromiso y retorno de inversión." },
                { title: "Experiencias Valiosas", desc: "Creando marcas que no solo se ven, sino que se sienten. Convirtiendo espectadores en clientes." }
            ],
            overlay: [
                "Enfoque Fresco y Creativo",
                "Resultados Visibles",
                "Comunicación Directa",
                "Entrega Profesional"
            ]
        },
        methodology: {
            title: 'Nuestra Metodología',
            subtitle: 'En IMA Studio, trabajamos con un proceso claro que genera confianza y entrega excelencia.',
            steps: [
                { title: "Briefing y Análisis", desc: "Reunión para identificar necesidades y analizar la marca." },
                { title: "Diseño Conceptual", desc: "Propuestas iniciales, moodboards y estructura creativa." },
                { title: "Desarrollo Visual", desc: "Construcción de identidad, mockups y creación de contenido." },
                { title: "Revisión y Optimización", desc: "Ajustes basados en feedback y refinamiento final." },
                { title: "Entrega", desc: "Entrega del proyecto y soporte posterior." }
            ]
        },
        footer: {
            desc: "Agencia boutique digital líder enfocada en startups de alto crecimiento y empresas globales establecidas.",
            rights: "© 2026 IMA STUDIO. Todos los derechos reservados.",
            terms: "Política de Privacidad",
            cookies: "Cookies",
            ceos: 'CEOs: Ismael y Mario de 2º DAW',
        },
        contact: {
            title: "Contáctanos",
            subtitle: "¿Tienes un proyecto en mente? Construyamos algo increíble juntos.",
            visit: { title: "Visítanos", text: "calle de la piruleta 123" },
            email: { title: "Envíanos un Email" },
            call: { title: "Llámanos" },
            tags: { contact: "Contacto" },
            form: { name: "Nombre", email: "Email", message: "Mensaje", btn: "Enviar Mensaje", placeholder: "Cuéntanos sobre tu proyecto...", success: "¡Mensaje Enviado!", successDesc: "Gracias por contactar. Te responderemos en menos de 24 horas.", redo: "Enviar Otro", sending: "Enviando..." }
        },
        news: {
            title: "Últimas Noticias",
            subtitle: "Mantente actualizado con las últimas tendencias y actualizaciones de IMA Studio.",
            tags: { insight: "Novedades y Actualizaciones" },
            items: [
                { category: "Marketing", title: "El futuro del Branding Digital en 2026", desc: "Descubre cómo la IA y el branding sensorial están redefiniendo la conexión con el cliente.", image: "/media/imagenes/reunion.png" },
                { category: "Diseño", title: "Minimalism vs Maximalism", desc: "Análisis de tendencias: ¿Qué enfoque gana en la era de la atención fragmentada?", image: "/media/imagenes/oficina.png" },
                { category: "Tecnología", title: "IA en Flujos de Trabajo Creativos", desc: "Nuestro equipo comparte cómo integramos GenAI manteniendo la esencia de la creatividad humana.", image: "/media/imagenes/equipo.png" }
            ]
        }
    },
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
