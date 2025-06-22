export const concepts = [
  {
    title: "Client-Server Architecture",
    description: `Client-server architecture is a network structure where multiple clients request and receive services from a centralized server. It helps distribute resources and workloads effectively between providers and requesters.
Modern web apps heavily depend on this model where the frontend acts as a client and the backend as a server processing logic and database communication.`,
    icon: "/assets/server.png"
  },
  {
    title: "HTTP & Web Servers",
    description: `HTTP (HyperText Transfer Protocol) is the core of web communication. Web servers like Apache or Node.js respond to HTTP requests and return static or dynamic content.
Understanding status codes (e.g., 200, 404) and methods (GET, POST) is essential to building robust and responsive applications.`,
    icon: "/assets/http.png"
  },
  {
    title: "APIs & REST",
    description: `REST (Representational State Transfer) is an architecture for designing networked applications using HTTP methods. It’s stateless and relies on clear URL endpoints for operations.
REST APIs make it easy to connect frontend and backend systems, enabling scalable communication between services.`,
    icon: "/assets/api.png"
  },
  {
    title: "Authentication & Security",
    description: `Authentication verifies user identity, while authorization determines access rights. Common methods include sessions, OAuth, and JWTs.
Security concerns include protecting data with HTTPS, validating inputs, and preventing attacks like SQL Injection or Cross-Site Scripting (XSS).`,
    icon: "/assets/security.png"
  },
  {
    title: "Node.js & Express.js",
    description: `Node.js allows JavaScript to run on the backend, with non-blocking asynchronous execution for scalable apps. It's ideal for building APIs and real-time services.
Express.js is a lightweight web framework for Node that simplifies routing, middleware, and server creation.`,
    icon: "/assets/node.png"
  },
  {
    title: "Databases",
    description: `Databases store structured (SQL: MySQL, PostgreSQL) or unstructured (NoSQL: MongoDB) data. SQL databases enforce schema and relationships, ideal for transactional systems.
NoSQL databases offer flexibility and horizontal scaling, often used in big data and real-time apps.`,
    icon: "/assets/db.png"
  },
  {
    title: "Middleware",
    description: `Middleware in web frameworks intercepts and processes requests before they hit route handlers. This includes logging, authentication, parsing JSON, etc.
It helps modularize backend logic and maintain clean, reusable code in frameworks like Express.`,
    icon: "/assets/middleware.png"
  },
  {
    title: "Templating Engines",
    description: `Templating engines like EJS or Handlebars let you embed dynamic content into HTML on the server before sending it to the browser.
They allow conditional rendering, loops, and template reuse, making server-rendered HTML pages flexible and efficient.`,
    icon: "/assets/template.png"
  },
  {
    title: "Session Management",
    description: `Sessions allow servers to retain user-specific information across multiple requests. This is crucial for user logins, carts, and personal settings.
Express-session middleware or cookies can be used to implement sessions, often backed by Redis for scalability.`,
    icon: "/assets/session.png"
  },
  {
    title: "Git & GitHub",
    description: `Git is a version control system that tracks code changes, supports collaboration, and allows branching and merging workflows.
GitHub is a cloud platform to host Git repositories, review code, manage pull requests, and integrate CI/CD tools.`,
    icon: "/assets/git.png"
  },
  {
    title: "Linux Commands",
    description: `Linux commands like ls, cd, mkdir, rm, grep, and chmod are used for navigating and managing files and permissions in Unix-based systems.
Scripting with bash and using commands like curl, ssh, and top are essential for server-side engineering tasks.`,
    icon: "/assets/linux.png"
  },
  {
    title: "XSS, CSRF, SQL Injection",
    description: `These are common web security vulnerabilities. XSS injects scripts into web pages; CSRF tricks users into submitting unwanted actions; SQL Injection manipulates queries.
Mitigating them involves input validation, escaping, using prepared statements, and implementing security headers.`,
    icon: "/assets/vulnerabilities.png"
  },
  {
    title: "GraphQL & API Documentation",
    description: `GraphQL is a query language for APIs offering flexibility in fetching exactly what is needed. It solves over-fetching/under-fetching problems in REST.
Tools like Swagger and Postman help document, test, and explore REST and GraphQL APIs effectively.`,
    icon: "/assets/graphql.png"
  },
  {
    title: "Networking Basics",
    description: `Networking covers IP addressing, DNS, ports, firewalls, and protocols like TCP/UDP. It’s foundational to how servers communicate over the web.
Understanding networking ensures better deployment, scaling, and debugging of distributed backend systems.`,
    icon: "/assets/network.png"
  },
  {
    title: "DevOps",
    description: `DevOps integrates development and operations using automation, CI/CD pipelines, infrastructure as code, and containerization (Docker, Kubernetes).
It accelerates deployment, improves code reliability, and enables faster feedback cycles in modern software development.`,
    icon: "/assets/devops.png"
  },
  {
    title: "Server-Side Rendering (SSR)",
    description: `SSR renders HTML on the server instead of the client, improving initial page load speed and SEO. Frameworks like Next.js offer SSR support.
It’s especially useful for content-heavy or public-facing apps where performance and SEO are critical.`,
    icon: "/assets/ssr.png"
  },
  {
    title: "Microservices",
    description: `Microservices architecture breaks down a monolithic app into independent services that communicate over APIs. Each service handles a specific business function.
It enables better scalability, modularity, and team autonomy, but also requires careful coordination and monitoring.`,
    icon: "/assets/microservices.png"
  },
  {
    title: "WebSockets",
    description: `WebSockets enable two-way communication between client and server over a single persistent connection. Useful for real-time features like chat or notifications.
Unlike HTTP, which is request-response, WebSockets stay open, allowing the server to push updates instantly.`,
    icon: "/assets/websocket.png"
  },
  {
    title: "REST APIs",
    description: `REST APIs use HTTP methods like GET, POST, PUT, DELETE to access resources. They are stateless and follow resource-oriented URL structures.
They are widely used in modern backend development to power mobile and web applications.`,
    icon: "/assets/rest.png"
  },
  {
    title: "HTTP & Web Protocols",
    description: `HTTP/1.1, HTTP/2, and the upcoming HTTP/3 define how web content is transmitted. HTTPS adds security via SSL/TLS encryption.
These protocols govern latency, compression, multiplexing, and play a big role in performance optimization.`,
    icon: "/assets/protocol.png"
  }
];
