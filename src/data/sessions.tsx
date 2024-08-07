/* eslint-disable quotes */
import { Session } from "../types";

export const sessions: Session[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    title: "Mastering Redux: Advanced State Management",
    summary: "Deep dive into Redux for managing complex state.",
    description: `Redux can revolutionize your approach to state management, offering a predictable and maintainable way to handle your application's state. In this session, we'll delve deep into the core concepts of Redux, starting with the foundational principles of actions, reducers, and the store. 
    
      We'll discuss how Redux enforces a unidirectional data flow and how this architecture benefits large-scale applications. You'll gain a solid understanding of how to structure your Redux store for scalability and maintainability, ensuring your state management remains clear and organized as your application grows. We'll also cover advanced topics like handling asynchronous operations using middleware such as Redux Thunk and Redux Saga. 
      
      These tools will empower you to manage side effects and coordinate complex state changes seamlessly. Through hands-on examples, you'll see how to integrate Redux with React and use the React-Redux library to connect your components to the Redux store efficiently. Additionally, we'll explore debugging techniques with tools like Redux DevTools, helping you trace actions and monitor state changes in real-time. You'll learn strategies for optimizing performance and reducing unnecessary re-renders to ensure your Redux-powered applications run smoothly.
      
      By the end of our session, you'll be equipped not just with the knowledge to implement Redux, but also with the confidence to troubleshoot, optimize, and scale your state management solutions in your React projects.`,
    duration: 2,
    date: "2023-11-02",
    image: "https://img-b.udemycdn.com/course/750x422/4830120_302f_3.jpg",
    tags: ["Redux", "React", "advanced", "state"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    title: "TypeScript Basics: Strong Typing in JavaScript",
    summary: "An introduction to TypeScript for safer and scalable code.",
    description: `TypeScript adds a powerful layer of type safety to JavaScript, enhancing both the development experience and the reliability of your code. In this session, we'll begin by laying a solid foundation in TypeScript, starting with its fundamental concepts, including basic types, interfaces, and type aliases. 
    
    We'll discuss how TypeScript's strong typing system helps prevent common errors and improves code readability, making it easier to maintain large codebases. You'll see how TypeScript allows you to catch potential bugs at compile time, rather than during runtime, saving time and reducing the risk of costly errors. 
    
    We'll walk through the process of setting up a TypeScript project from scratch, and demonstrate how to seamlessly integrate TypeScript with existing JavaScript codebases. This includes configuring the TypeScript compiler, understanding key options in the tsconfig.json file, and using TypeScript's gradual adoption strategy to incrementally add type safety to your code. Throughout the session, we'll explore practical examples that highlight TypeScript's advanced features, such as generics, union and intersection types, and how to create robust type definitions that work harmoniously with third-party libraries. You'll also learn about TypeScript's powerful type inference and how it can simplify your code while maintaining type safety. 
    
    By the end of our session, you'll not only have a solid foundation in TypeScript, but also the skills to effectively utilize its type-checking capabilities to build more reliable and maintainable applications. Whether you're starting a new project or looking to enhance an existing one, TypeScript will become an invaluable tool in your development toolkit.`,
    duration: 1.5,
    date: "2023-11-03",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*5iPC_SdbAzD3j84j97RbBA.jpeg",
    tags: ["TypeScript", "basic", "introduction"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    title: "React Hooks: Enhancing Functional Components",
    summary: "Unlock the power of hooks for cleaner React code.",
    description: `React hooks introduce a powerful set of features that revolutionize how we write functional components, making them more versatile and easier to manage. In this session, we'll dive deep into the core hooks—useState, useEffect, useContext—as well as explore the creation and use of custom hooks. We'll start with useState, which allows you to add state to functional components, making them more dynamic and interactive. 
    
    You'll see how this hook simplifies state management compared to class components, and we'll discuss patterns for managing complex state logic effectively. Next, we'll tackle useEffect, a hook that lets you handle side effects in your components, such as fetching data, setting up subscriptions, or manually changing the DOM. We'll explore how useEffect can replace lifecycle methods in class components, and how to optimize your effects to prevent unnecessary re-renders and potential performance issues.  We'll also cover useContext, which enables you to easily share state across your component tree without the need for prop drilling. You'll learn how to leverage this hook to create more maintainable and scalable applications. 
    
    The session will also guide you through the creation of custom hooks—reusable functions that encapsulate logic and state management patterns. You'll discover how custom hooks can help you write cleaner, more modular code, and how to abstract complex logic into reusable components that can be shared across your application. Throughout the session, we'll work through practical examples and discuss best practices for using hooks effectively. You'll learn how to avoid common pitfalls, such as overuse of hooks, handling asynchronous logic, and ensuring that your components remain performant and easy to understand. 
    
    By the end of our session, you'll have the confidence and knowledge to refactor class components into functional ones using hooks, and to fully leverage the power of hooks in your React projects. Whether you're building new components or enhancing existing ones, hooks will become an essential part of your React development toolkit, enabling you to write more elegant and efficient code.`,
    duration: 1,
    date: "2023-11-04",
    image:
      "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["hooks", "React", "components", "useEffect", "useState"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    title: "Building Responsive UIs with Tailwind CSS",
    summary: "Create beautiful and responsive designs using Tailwind CSS.",
    description: `Tailwind CSS offers a utility-first approach to styling that revolutionizes the way you build user interfaces by providing low-level utility classes to construct complex designs without ever leaving your HTML. In this session, we'll dive deep into the capabilities of Tailwind CSS, helping you build responsive and visually appealing UIs efficiently and effectively. 
      
      We'll begin by exploring the fundamentals of Tailwind's utility classes. You'll learn how to apply these classes directly in your HTML to create intricate designs without writing a single line of custom CSS. This approach not only speeds up development but also ensures consistency and maintainability across your application. Next, we'll focus on responsive design principles. 
      
      Tailwind CSS makes it incredibly simple to create layouts that adapt seamlessly to different screen sizes. We'll cover how to use Tailwind's built-in responsive utilities, allowing you to design mobile-first and then scale up your designs for larger screens with ease. Customizing Tailwind's configuration will be another key topic of our session. Tailwind is highly configurable, allowing you to extend its default theme, add custom colors, spacing, typography, and even create your own utility classes. 
      
      We'll walk through the process of configuring Tailwind to match your project's unique design needs while maintaining the flexibility and power that Tailwind provides out of the box. Additionally, we'll discuss best practices for maintaining consistency across your application using Tailwind. You'll learn how to structure your HTML for maximum reusability, how to avoid common pitfalls like class name bloat, and how to take full advantage of Tailwind's design system to ensure a cohesive look and feel throughout your project. Throughout the session, we'll build practical examples that demonstrate how to rapidly design and develop user interfaces that are not only responsive but also aesthetically pleasing. You'll see how Tailwind's utility-first approach can transform the way you approach styling, allowing for faster iterations and more control over your designs. 
      
      By the end of our session, you'll be equipped with the knowledge and skills to rapidly create beautiful, responsive UIs using Tailwind CSS. You'll understand how to leverage its utility classes to build out entire layouts and components, and you'll have the confidence to customize Tailwind to suit your project's specific requirements, making it an indispensable tool in your frontend development workflow.`,
    duration: 1.5,
    date: "2023-11-05",
    image:
      "https://blog.webdrip.in/images/uploads/floating-on-tailwind-css.png",
    tags: ["responsive design", "Tailwind"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    title: "GraphQL with React: Simplifying Data Fetching",
    summary:
      "Leverage GraphQL for efficient and flexible data fetching in React.",
    description: `GraphQL can revolutionize the way you manage data in your applications by offering a more efficient and flexible approach to data fetching and manipulation. In this session, we’ll introduce you to the powerful capabilities of GraphQL and walk you through its core concepts, including queries, mutations, and resolvers. 
      
      We’ll begin by laying the foundation with a comprehensive overview of GraphQL. You’ll learn how it differs from traditional REST APIs by allowing clients to request exactly the data they need—no more, no less. This efficiency can lead to faster applications and a more streamlined development process. Next, we’ll dive into the practical aspects of setting up a GraphQL server. We’ll cover how to define a schema that describes the types of data your API will expose and how to implement resolvers that fetch and return this data from your data sources. 
      
      You’ll also learn how to set up a GraphQL client using Apollo, one of the most popular GraphQL clients in the React ecosystem, making it easy to integrate GraphQL into your existing or new React applications. Writing efficient queries is crucial for optimizing your application’s performance, and in this session, we’ll explore best practices for crafting queries that minimize over-fetching and under-fetching of data. You’ll see how to use variables, fragments, and directives to make your queries more dynamic and powerful. 
      
      We’ll also explore mutations, which allow you to modify data on the server, and subscriptions, which enable real-time updates in your application. Subscriptions are particularly useful for features like live chats, notifications, or any scenario where you want to keep your client in sync with server-side changes without constant polling. Throughout the session, we’ll build out practical examples that demonstrate how to implement GraphQL in a real-world context. You’ll gain hands-on experience in setting up both the server and client, writing and optimizing queries, and handling more advanced features like real-time updates. 
      
      By the end of this session, you’ll have a solid understanding of GraphQL and the skills to integrate it into your React applications. You’ll be able to design efficient data-fetching strategies that reduce the complexity of your codebase while improving the performance and flexibility of your application. Whether you’re working on a new project or looking to upgrade an existing one, GraphQL can help you achieve cleaner, more maintainable data management.`,
    duration: 2,
    date: "2023-11-06",
    image: "https://miro.medium.com/max/1400/0*GEt6E-XBrPM0gO3f",
    tags: ["React", "GraphQL", "data fetching", "efficient", "introduction"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    title: "React Native: Building Mobile Apps with React",
    summary: "Create cross-platform mobile applications using React Native.",
    description: `React Native empowers you to build cross-platform mobile applications using the familiar React framework, enabling you to create apps for both iOS and Android from a single codebase. In this session, we’ll dive into the fundamentals of React Native, providing you with the knowledge and skills to start building mobile apps with confidence. 
      
      We’ll start by guiding you through the initial setup of a React Native project, covering the tools and dependencies you’ll need to get started. You’ll learn how React Native leverages native components and how it differs from traditional web development with React. Next, we’ll explore the core components of React Native, such as Views, Text, and Image, which you’ll use to build your app’s user interface. 
      
      We’ll also cover how to manage navigation between screens using popular navigation libraries like React Navigation, ensuring your app delivers a seamless user experience. Accessing device features is a critical aspect of mobile app development, and we’ll demonstrate how to use native modules to interact with device hardware like the camera, GPS, and more. You’ll learn how React Native bridges the gap between JavaScript and native code, allowing you to extend the functionality of your app with custom native modules when needed. 
      
      Performance optimization is key to delivering a smooth and responsive mobile app. In this session, we’ll share best practices for optimizing your React Native app’s performance, including techniques for reducing load times, managing memory usage, and ensuring fluid animations. You’ll also learn debugging strategies to identify and fix common issues that may arise during development. We’ll build practical examples throughout the session, giving you hands-on experience with React Native’s API and tools. By following along, you’ll gain a deep understanding of how to structure and develop a mobile app from start to finish. 
      
      By the end of our session, you’ll be equipped with the knowledge to build and deploy mobile apps for both iOS and Android using React Native. You’ll have a solid grasp of how to create intuitive and responsive interfaces, integrate native features, and optimize your app for the best performance. Whether you’re new to mobile development or looking to expand your React skills, this session will give you the foundation you need to succeed in building cross-platform mobile apps.`,
    duration: 3,
    date: "2023-11-07",
    image:
      "https://flatirons.com/static/c8cb21eccc0362e40279fcefdbc7d9b6/d7e39/The-Unofficial-Guide-to-React-Native-1.webp",
    tags: ["mobile apps", "native"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    title: "Next.js: Server-Side Rendering for React",
    summary:
      "Enhance your React apps with server-side rendering using Next.js.",
    description: `Next.js is a powerful framework that extends React's capabilities with server-side rendering (SSR) and other advanced features. In this session, we'll dive deep into how Next.js enhances React applications by enabling faster load times, better SEO, and improved user experience through SSR.

      We’ll start with the basics of setting up a Next.js project, covering the project structure and how it differs from a standard React app. From there, we’ll explore static site generation (SSG), a feature that allows you to pre-render pages at build time, providing lightning-fast performance and seamless scalability.

      Dynamic routing is another key feature of Next.js, and we’ll discuss how to create dynamic routes and navigate between pages efficiently. We’ll also delve into API routes, which allow you to build and integrate server-side APIs directly within your Next.js application, making it a full-stack solution.

      Data fetching is crucial in any web application, and Next.js offers multiple strategies for fetching data on the server and client sides. We’ll cover these strategies in detail, showing you how to manage data efficiently and optimize performance.

      We’ll also discuss best practices for performance optimization, including lazy loading, code splitting, and caching. By the end of this session, you’ll be well-equipped to build fast, scalable, and SEO-friendly React applications using Next.js, and you'll have a comprehensive understanding of how to leverage its features for modern web development.`,
    duration: 2,
    date: "2023-11-08",
    image: "https://miro.medium.com/v2/resize:fit:700/0*_S488_YsHuhH0wtt.png",
    tags: ["framework", "React", "NextJS", "SSR"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440008",
    title: "Unit Testing in React with Jest and Enzyme",
    summary: "Ensure your React components work as expected with testing.",
    description: `Testing is crucial for maintaining robust applications. In this session, we'll start by diving into the fundamentals of unit testing in React, using popular tools like Jest and Enzyme. You'll learn how to set up a testing environment, write and run tests for your components, and understand the core concepts of test-driven development (TDD).

    We'll explore how to create effective test cases that cover various scenarios, ensuring your components work as expected under different conditions. You'll also learn how to mock dependencies, enabling you to isolate components and test them independently, which is key to maintaining reliable code.

    Handling asynchronous code in tests can be tricky, but we'll break down the process step-by-step, so you'll be able to test even the most complex interactions with confidence. Additionally, we'll discuss best practices for structuring your test suites, ensuring they're organized and easy to maintain.

    Achieving high code coverage is essential for minimizing bugs and improving code quality, so we'll delve into techniques for maximizing coverage without overcomplicating your tests. Throughout the session, we'll use real-world examples to demonstrate these concepts, giving you practical insights you can apply to your projects.

    By the end of our session, you'll have a comprehensive understanding of how to implement testing strategies in React, ensuring your applications are reliable, maintainable, and ready for production.`,
    duration: 1.5,
    date: "2023-11-09",
    image:
      "https://velog.velcdn.com/images/kozel/post/e3937819-59b7-4fb0-b2cb-09bc1191c7a7/image.png",
    tags: ["testing", "Jest", "components", "Enzyme", "basic"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    title: "State Management in React with Context API",
    summary: "Simplify state management using React's Context API.",
    description: `React's Context API is a powerful tool for managing state across your application, eliminating the need for cumbersome prop drilling. In this session, we’ll dive deep into the inner workings of the Context API, starting with the fundamentals of creating and providing context to various components. We’ll explore real-world scenarios where Context API shines, especially in managing global state, theme settings, and user authentication.

      You'll learn step-by-step how to define and use context, wrap your components with context providers, and consume context efficiently in deeply nested components. We’ll also cover advanced patterns, such as combining the Context API with useReducer for managing complex state logic.

      Additionally, we'll discuss performance considerations, including how to avoid unnecessary re-renders and how to optimize your application by memoizing context values.

      Through hands-on examples, we'll demonstrate best practices for structuring your context to maintain clean, scalable code. By the end of our session, you'll have the skills and confidence to implement the Context API in your React applications, making your state management more efficient and your codebase more maintainable.`,
    duration: 1,
    date: "2023-11-10",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*MkLBSIsUGuf-ZSqvyCeAHQ.png",
    tags: ["Context Api", "state", "global", "best practices", "optimize"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    title: "Building Accessible React Applications",
    summary: "Ensure your React applications are accessible to all users.",
    description: `Accessibility is not just a best practice—it's essential for ensuring that your applications are usable by everyone, regardless of their abilities. In this session, we'll delve into the core principles of web accessibility, emphasizing why it matters and how it can expand your audience and improve the overall user experience.

      We'll start by exploring the basics of accessibility, including the importance of using semantic HTML and how ARIA (Accessible Rich Internet Applications) roles can enhance the accessibility of your components. You’ll learn how to make your React applications navigable by keyboard, ensuring that users who cannot use a mouse can still interact with your UI effectively.

      We’ll also introduce tools and techniques for testing and evaluating the accessibility of your applications. You'll discover how to use tools like screen readers and automated testing suites to identify and fix accessibility issues.

      Furthermore, we'll discuss best practices for designing inclusive user interfaces, considering color contrast, text size, and ensuring that all interactive elements are clearly labeled and accessible.

      Through practical examples and hands-on exercises, you'll gain a solid understanding of how to implement and test accessibility in your React projects. By the end of our session, you'll be equipped with the knowledge and tools to create web applications that are not only functional but also accessible to a broader audience, ensuring inclusivity and compliance with accessibility standards.`,
    duration: 1.5,
    date: "2023-11-11",
    image:
      "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2024/04/accessible_apps_design.png",
    tags: ["accessibility", "a11", "React", "introduction", "basic"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440011",
    title: "Advanced TypeScript in React",
    summary:
      "Enhance your React applications with advanced TypeScript techniques.",
    description: `TypeScript can greatly enhance the reliability and maintainability of your React code, especially as your applications grow in complexity. In this session, we'll dive into advanced TypeScript features such as generics, type inference, and utility types. You'll learn how to create complex types, interfaces, and function signatures that make your code more predictable and easier to debug.

      We’ll explore how TypeScript's type system can catch potential issues at compile-time, reducing runtime errors and enhancing code quality. We'll also discuss integrating TypeScript with popular React libraries like Redux and React Router, ensuring that your state management and routing are both strongly typed.

      Through hands-on examples, we'll cover best practices for structuring TypeScript projects in a React environment, including how to set up and configure your development environment for optimal type-checking. You'll also learn how to leverage TypeScript's tooling and editor support to streamline your development workflow.

      By the end of this session, you'll have a deeper understanding of TypeScript's advanced capabilities and how to apply them effectively in your React projects, empowering you to build more robust and maintainable applications.`,
    duration: 2,
    date: "2023-11-12",
    image:
      "https://miro.medium.com/v2/resize:fit:1024/1*CHH1P0NwJfZzXXHo-VUzOA.png",
    tags: ["advanced", "TypeScript", "React"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440012",
    title: "Building Real-Time Applications with WebSockets",
    summary:
      "Create interactive and real-time experiences using WebSockets in React.",
    description: `WebSockets enable real-time communication in web applications, opening the door to dynamic and interactive user experiences. In this session, we'll delve into the WebSocket protocol and its advantages over traditional HTTP communication methods, providing you with a foundational understanding of how WebSockets work.

      We'll begin by setting up a WebSocket server, discussing the necessary configurations, and best practices for ensuring secure and efficient communication. Next, we'll explore how to integrate WebSockets into your React applications, allowing for seamless real-time data flow between the server and client.

      Through practical examples, we'll build real-time features like live chat applications, notifications, and other interactive components that respond instantly to user actions. You'll also learn how to handle common challenges such as connection management, message broadcasting, and error handling in a WebSocket environment.

      We'll discuss strategies for optimizing performance and ensuring that your real-time features scale effectively with user demand. By the end of this session, you'll have the skills to create engaging, real-time experiences in your React applications, leveraging the power of WebSockets to deliver instant feedback and interaction.`,
    duration: 2,
    date: "2023-11-13",
    image:
      "https://blog.openreplay.com/images/real-time-features-in-react-using-websockets/images/hero.png",
    tags: ["WebSockets", "React", "real-time"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440013",
    title: "Deploying React Applications with Docker",
    summary: "Containerize and deploy your React applications using Docker.",
    description: `Docker revolutionizes application deployment by encapsulating your applications within containers, ensuring consistent and reliable environments across different stages of development and production. In this session, we'll start with an introduction to Docker, covering its core concepts and benefits for modern application deployment.

      We'll dive into the process of containerizing your React applications, beginning with creating Dockerfiles that define the environment and dependencies needed for your app. You'll learn how to build Docker images, which serve as the blueprint for your containers, and how to run and manage these containers effectively.

      We'll also explore best practices for setting up both development and production environments using Docker. This includes configuring multi-stage builds for optimized production images, managing environment variables, and orchestrating multiple containers with Docker Compose.

      Through hands-on examples, you'll gain practical experience in deploying and scaling React applications with Docker, ensuring that your deployments are consistent, reproducible, and free from environment-related issues.

      By the end of the session, you'll be equipped to leverage Docker for deploying your React applications, streamlining your development workflow, and achieving reliable, scalable deployment solutions.`,
    duration: 1.5,
    date: "2023-11-14",
    image:
      "https://picperf.io/https://laravelnews.s3.amazonaws.com/images/docker.png",
    tags: ["Docker", "containers", "React", "basic"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440014",
    title: "Optimizing React Applications for Performance",
    summary:
      "Improve the performance of your React applications with optimization techniques.",
    description: `Performance is crucial for delivering an exceptional user experience and maintaining user engagement. In this session, we will delve into a range of techniques designed to optimize the performance of React applications, ensuring they run smoothly and efficiently.

      We'll begin by examining key performance optimization strategies, including code splitting, which helps to load only the necessary code for each view, and lazy loading, which defers the loading of components until they are needed. We'll also explore memoization techniques to avoid unnecessary re-renders and improve component efficiency.

      To provide a hands-on approach, we'll use tools like React Profiler to analyze component performance and identify areas for improvement. Additionally, we'll leverage Lighthouse, an open-source tool, to assess various performance metrics and discover potential bottlenecks in your application.

      Throughout the session, we'll cover best practices for optimizing React applications, such as minimizing bundle sizes, optimizing rendering performance, and improving overall responsiveness.

      By the end of the session, you'll have a comprehensive understanding of how to apply these performance optimization techniques to your React applications, ensuring they provide a fast, smooth, and engaging experience for users.`,
    duration: 2,
    date: "2023-11-15",
    image:
      "https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code_335657-2370.jpg",
    tags: ["optimization", "performance"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440015",
    title: "GraphQL Subscriptions with Apollo and React",
    summary:
      "Implement real-time updates in your React applications with GraphQL subscriptions.",
    description: `GraphQL subscriptions offer a powerful way to integrate real-time updates into your applications, providing a dynamic and engaging user experience. In this session, we'll dive deep into how to leverage GraphQL subscriptions to keep your data and interfaces in sync with live changes.

      We'll start by understanding the fundamentals of the Pub/Sub (Publish/Subscribe) model, which is the backbone of real-time data communication. You'll learn how to set up a GraphQL subscription server to handle real-time data streams and push updates to your clients efficiently.

      Next, we'll explore how to integrate these subscriptions with your React frontend using Apollo Client. You'll discover how to use Apollo's subscription API to manage and display real-time data seamlessly within your application.

      We'll work through practical examples to illustrate the implementation of live data feeds and real-time notifications. These examples will demonstrate how GraphQL subscriptions can be used to create interactive and responsive features in your applications.

      By the end of the session, you'll have the skills to implement GraphQL subscriptions effectively, enabling real-time capabilities in your React applications and enhancing the overall user experience with up-to-date information and notifications.`,
    duration: 2,
    date: "2023-11-16",
    image:
      "https://www.freecodecamp.org/news/content/images/2020/04/cover-3.png",
    tags: ["GraphQL", "Apollo", "ReactJS"],
  },
];
