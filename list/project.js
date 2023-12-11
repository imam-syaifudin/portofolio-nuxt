// Lmao Pisan Kang

const icon = {
    html: "vscode-icons:file-type-html",
    css: "vscode-icons:file-type-css",
    bustrep: "devicon:bootstrap",
    js: "skill-icons:javascript",
    react: "skill-icons:react-dark",
    laravel: "devicon:laravel",
    php: "devicon:php",
    nuxt: "skill-icons:nuxtjs-dark",
    vue: "logos:vue",
    vuetify: "devicon:vuetify",
    element: "logos:element",
}

const { html, css, bustrep, react, laravel, php, js, nuxt, vue, vuetify, element } = icon;

const projects = [
    {
        title: "Laundry Management",
        imageSrc: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Create a laundry management application using laravel as the backend and react js as the frontend",
        tech: [html, css, bustrep, react, laravel, php],
        linkProject: "https://github.com/imam-syaifudin/laundry",
    },
    {
        title: "Roosen",
        imageSrc: "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Create an e-commerce application using laravel (monolith) and midtrans payment gateway",
        tech: [html, css, bustrep, laravel, php],
        linkProject: "https://webroosen.com/",
    },
    {
        title: "Real Time Chat",
        imageSrc: "https://plus.unsplash.com/premium_photo-1681487683141-e72c5ccd94e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNoYXR8ZW58MHx8MHx8fDA%3D",
        description: "Create a web-based real time chat application using HTML, CSS, JS as view and styles and realtime using socket.io",
        tech: [html, css, js],
        linkProject: "https://github.com/imam-syaifudin/real-time-chat",
    },
    {
        title: "Vaccination",
        imageSrc: "https://images.unsplash.com/photo-1615631648086-325025c9e51e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmFjY2luYXRpb24lMjBwcm9qZWN0fGVufDB8fDB8fHww",
        description: "This is a project I made when participating in the LKS event at the Malang city level, i got 5th place :)",
        tech: [html, css, php, bustrep, react, laravel],
        linkProject: "https://github.com/imam-syaifudin/vaksin",
    },
    {
        title: "Web Scraping",
        imageSrc: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhwfGVufDB8fDB8fHww",
        description: "Create a real time application scraping data from other websites using the PHP Library and html for view",
        tech: [html, php],
        linkProject: "https://github.com/imam-syaifudin/laundry",
        isPrivat: true,
    },
    {
        title: "Contract Management",
        imageSrc: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udHJhY3R8ZW58MHx8MHx8fDA%3D",
        description: "Create a contract management system application using nuxt js, vue js and laravel as backend",
        tech: [html, css, nuxt, vue, vuetify, laravel],
        linkProject: "https://github.com/imam-syaifudin/laundry",
        isPrivat: true,
    },
    {
        title: "Course Management",
        imageSrc: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Create a course management system application using nuxt js, vue js and laravel as backend",
        tech: [html, css, nuxt, vue, element, laravel],
        linkProject: "https://github.com/imam-syaifudin/laundry",
        isPrivat: true,
    },
    {
        title: "Absensi Application",
        imageSrc: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhwfGVufDB8fDB8fHww",
        description: "Create a multi-user attendance application using Laravel monolith and Bootstrap as a CSS framework",
        tech: [html, css, bustrep, laravel],
        linkProject: "https://github.com/imam-syaifudin/absensi",
    },
];

export default projects;