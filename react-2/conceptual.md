### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
Let's us handle client and server side routing in React applications

- What is a single page application?
web application that dynamically rewerites a current web page with new data from the web server, instead of teh default method of a web browser loading entire new plages

- What are some differences between client side and server side routing?
Server Side - more secure because they occur on the wbe server before the application, allows client applications to find services through a load balancer or router, causes full page refresh
Client Side - Doesnt requre a server respone after the initial page is loaded, less optimized search engine, eliminates the "blinking" state when transisitioning between routes

- What are two ways of handling redirects with React Router? When would you use each?
You could make a seperate component strictly for this reason, so if no matching route is found, a 404 like component can be rendered. Similarly instead you could just redirect to a home page of sorts for an incorrect route, or maybe just link to the current route.


- How do you grab URL parameters from within a component using React Router?
In your app, a route needs to include a "/:" at the end. So for example for names in a Users component: "/Users/:name". Then in the component itself, the useParams hook needs to be included. So something like this: "const { name } = useParams();"

- What are two different ways to handle page-not-found user experiences using React Router?
You could make a seperate component strictly for this reason, so if no matching route is found, a 404 like component can be rendered. Similarly instead you could just redirect to a home page of sorts for an incorrect route, or maybe just link to the current route.

- What is context in React? When would you use it?
Context is the idea of allowing data and props to be shared across multiple components without having to manually pass them down from parent to child (to child, to child... etc). Great for avoiding uneccessary repetition and "prop drilling".


- Describe some differences between class-based components and function
  components in React.
Hooks and function components cut out a lot of the reliance on the original class-based syntax of things like state and lifecycle methods. With hooks the syntax and overall amount of code has been significanly reduced with the availabilty to access these old methods with things like useState or useEffect.

- What are some of the problems that hooks were designed to solve?
From what I can gather, the introduction of hooks has been used to greatly improve performance and overall accessibility/readability of code in React. Overall, especially for someone new to the tech like me, the new hook/function based way of doing things is much easier to digest!
