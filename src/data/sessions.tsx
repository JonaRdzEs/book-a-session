import { Session } from "../types";

export const sessions: Session[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    title: "Mastering Redux: Advanced State Management",
    summary: "Deep dive into Redux for managing complex state.",
    description:
      "Redux can revolutionize your approach to state management.\n\nIn this session, we'll explore the core concepts of Redux, including actions, reducers, and the store.\n\nWe'll examine best practices for structuring your Redux store and handling asynchronous operations with middleware like Redux Thunk and Redux Saga.\n\nThrough practical examples, you'll learn how to debug and optimize your Redux-powered applications.\n\nBy the end of our session, you'll be equipped with the knowledge to implement robust state management in your React projects.",
    duration: 2,
    date: "2023-11-02",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["redux", "react", "advanced", "state"]
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    title: "TypeScript Basics: Strong Typing in JavaScript",
    summary: "An introduction to TypeScript for safer and scalable code.",
    description:
      "TypeScript adds a powerful layer of type safety to JavaScript.\n\nIn this session, we'll start with the fundamentals of TypeScript, covering basic types, interfaces, and type aliases.\n\nWe'll explore how TypeScript improves code readability and reduces bugs.\n\nYou'll learn how to set up a TypeScript project, integrate it with existing JavaScript code, and leverage TypeScript's type-checking capabilities.\n\nBy the end, you'll have a solid foundation in TypeScript to build more reliable and maintainable applications.",
    duration: 1.5,
    date: "2023-11-03",
    image: "typescriptBasics",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    title: "React Hooks: Enhancing Functional Components",
    summary: "Unlock the power of hooks for cleaner React code.",
    description:
      "React hooks bring powerful features to functional components.\n\nWe'll cover useState, useEffect, useContext, and custom hooks in this session.\n\nYou'll learn how hooks simplify state management and side effects in functional components.\n\nThrough examples, we'll explore best practices for using hooks effectively and avoiding common pitfalls.\n\nBy the end, you'll be able to refactor class components to hooks and leverage their full potential in your React projects.",
    duration: 1,
    date: "2023-11-04",
    image: "reactHooks",
    tags: ["hooks", "react"]
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    title: "Building Responsive UIs with Tailwind CSS",
    summary: "Create beautiful and responsive designs using Tailwind CSS.",
    description:
      "Tailwind CSS offers a utility-first approach to styling.\n\nIn this session, we'll explore how to build responsive and visually appealing UIs with Tailwind CSS.\n\nWe'll cover the basics of utility classes, responsive design principles, and customizing the Tailwind configuration.\n\nYou'll learn how to create consistent and maintainable styles across your application.\n\nBy the end, you'll be able to rapidly design and develop responsive UIs with Tailwind CSS.",
    duration: 1.5,
    date: "2023-11-05",
    image: "tailwindCSS",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    title: "GraphQL with React: Simplifying Data Fetching",
    summary:
      "Leverage GraphQL for efficient and flexible data fetching in React.",
    description:
      "GraphQL can streamline your data-fetching strategy.\n\nIn this session, we'll introduce GraphQL and its core concepts, including queries, mutations, and resolvers.\n\nYou'll learn how to set up a GraphQL server and client with Apollo.\n\nWe'll explore how to write efficient queries and handle real-time updates with subscriptions.\n\nBy the end, you'll have the skills to integrate GraphQL into your React applications for more efficient data management.",
    duration: 2,
    date: "2023-11-06",
    image: "graphqlReact",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    title: "React Native: Building Mobile Apps with React",
    summary: "Create cross-platform mobile applications using React Native.",
    description:
      "React Native allows you to build mobile apps with React.\n\nIn this session, we'll cover the fundamentals of React Native, including the setup, components, and navigation.\n\nYou'll learn how to use native modules and access device features.\n\nWe'll explore best practices for performance optimization and debugging.\n\nBy the end, you'll be equipped to build and deploy mobile apps for both iOS and Android using React Native.",
    duration: 3,
    date: "2023-11-07",
    image: "reactNative",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    title: "Next.js: Server-Side Rendering for React",
    summary:
      "Enhance your React apps with server-side rendering using Next.js.",
    description:
      "Next.js provides powerful features for server-side rendering in React.\n\nIn this session, we'll explore the benefits of server-side rendering and how to set up a Next.js project.\n\nYou'll learn about static site generation, dynamic routing, and API routes.\n\nWe'll also cover how to optimize performance and manage data fetching on the server.\n\nBy the end, you'll have a solid understanding of how to use Next.js to build fast and SEO-friendly React applications.",
    duration: 2,
    date: "2023-11-08",
    image: "nextJS",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440008",
    title: "Unit Testing in React with Jest and Enzyme",
    summary: "Ensure your React components work as expected with testing.",
    description:
      "Testing is crucial for maintaining robust applications.\n\nIn this session, we'll cover the basics of unit testing in React using Jest and Enzyme.\n\nYou'll learn how to write and run tests for your components, mock dependencies, and handle asynchronous code.\n\nWe'll explore best practices for structuring tests and achieving high code coverage.\n\nBy the end, you'll be confident in writing tests that ensure the reliability of your React applications.",
    duration: 1.5,
    date: "2023-11-09",
    image: "unitTesting",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    title: "State Management in React with Context API",
    summary: "Simplify state management using React's Context API.",
    description:
      "React's Context API provides a way to manage state across your application.\n\nIn this session, we'll explore how to use the Context API to share state without prop drilling.\n\nYou'll learn how to create and use context, manage complex state, and optimize performance.\n\nThrough practical examples, we'll demonstrate best practices for using the Context API effectively.\n\nBy the end, you'll be able to manage state more efficiently in your React applications.",
    duration: 1,
    date: "2023-11-10",
    image: "contextAPI",
    tags: ["contextApi", "state", "global", "best practices", "optimize"]
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    title: "Building Accessible React Applications",
    summary: "Ensure your React applications are accessible to all users.",
    description:
      "Accessibility is essential for reaching a broader audience.\n\nIn this session, we'll cover the fundamentals of web accessibility and how to implement them in React.\n\nYou'll learn about ARIA roles, keyboard navigation, and semantic HTML.\n\nWe'll explore tools for testing accessibility and best practices for designing inclusive UIs.\n\nBy the end, you'll be equipped to create React applications that are accessible to everyone.",
    duration: 1.5,
    date: "2023-11-11",
    image: "accessibleReact",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440011",
    title: "Advanced TypeScript in React",
    summary:
      "Enhance your React applications with advanced TypeScript techniques.",
    description:
      "TypeScript can greatly improve the reliability of your React code.\n\nIn this session, we'll delve into advanced TypeScript features such as generics, type inference, and utility types.\n\nYou'll learn how to create complex types and leverage TypeScript's powerful type system to catch errors early.\n\nWe'll also explore how to integrate TypeScript with popular React libraries and tools.\n\nBy the end, you'll have a deeper understanding of how to use TypeScript to build robust and maintainable React applications.",
    duration: 2,
    date: "2023-11-12",
    image: "advancedTypeScript",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440012",
    title: "Building Real-Time Applications with WebSockets",
    summary:
      "Create interactive and real-time experiences using WebSockets in React.",
    description:
      "WebSockets enable real-time communication in web applications.\n\nIn this session, we'll explore how to use WebSockets to build real-time features in your React applications.\n\nYou'll learn about the WebSocket protocol, setting up a WebSocket server, and integrating it with your React frontend.\n\nWe'll cover practical examples such as real-time chat and notifications.\n\nBy the end, you'll be able to create interactive and real-time experiences using WebSockets in React.",
    duration: 2,
    date: "2023-11-13",
    image: "realTimeApps",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440013",
    title: "Deploying React Applications with Docker",
    summary: "Containerize and deploy your React applications using Docker.",
    description:
      "Docker simplifies the deployment of applications by containerizing them.\n\nIn this session, we'll cover the basics of Docker and how to containerize your React applications.\n\nYou'll learn how to create Dockerfiles, build Docker images, and run containers.\n\nWe'll also explore best practices for setting up development and production environments with Docker.\n\nBy the end, you'll be able to deploy your React applications using Docker for consistent and reproducible environments.",
    duration: 1.5,
    date: "2023-11-14",
    image: "dockerDeployment",
    tags: ["docker", "containers", "react", "basic"]
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440014",
    title: "Optimizing React Applications for Performance",
    summary:
      "Improve the performance of your React applications with optimization techniques.",
    description:
      "Performance is key to providing a good user experience.\n\nIn this session, we'll explore various techniques for optimizing the performance of React applications.\n\nYou'll learn about code splitting, lazy loading, and memoization.\n\nWe'll cover how to use tools like React Profiler and Lighthouse to identify and address performance bottlenecks.\n\nBy the end, you'll be able to apply best practices to ensure your React applications are fast and responsive.",
    duration: 2,
    date: "2023-11-15",
    image: "performanceOptimization",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440015",
    title: "GraphQL Subscriptions with Apollo and React",
    summary:
      "Implement real-time updates in your React applications with GraphQL subscriptions.",
    description:
      "GraphQL subscriptions enable real-time updates in your applications.\n\nIn this session, we'll explore how to set up and use GraphQL subscriptions with Apollo and React.\n\nYou'll learn about the Pub/Sub model, setting up a subscription server, and integrating it with your frontend.\n\nWe'll cover practical examples such as live data feeds and notifications.\n\nBy the end, you'll be able to implement real-time features using GraphQL subscriptions in your React applications.",
    duration: 2,
    date: "2023-11-16",
    image: "graphqlSubscriptions",
  },
];
