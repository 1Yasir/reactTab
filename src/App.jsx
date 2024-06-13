import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabComponent from './assets/components/TabComponent';
import Header from './assets/components/Header';
import "./App.css"


function App() {


  return (
    <div>
      <Header />
      <TabComponent tabs = {tabs}/>
    </div>
  )
}

export default App


const tabs = [
  {
      title: "HTML",
      content: `
          <h2 class='mb-5'>HTML (HyperText Markup Language)</h2>
          <p>HTML is the standard markup language for creating web pages and web applications. It forms the backbone of any web page and provides the structure for web content. HTML uses a series of elements to enclose different parts of the content to make it appear or act in a certain way.</p>
          <p>HTML was created by Tim Berners-Lee in late 1991. "HTML 2.0" was the first standard HTML specification published in 1995. HTML5, the latest version, introduced many new elements and attributes that reflect typical usage on modern websites.</p>
          <ul>
              <li><strong>Elements:</strong> HTML elements are the building blocks of HTML pages. Examples include &lt;div&gt;, &lt;a&gt;, &lt;p&gt;, &lt;img&gt;, &lt;form&gt;, and many more. Elements can be nested within each other to create complex structures.</li>
              <li><strong>Attributes:</strong> HTML attributes provide additional information about elements. For instance, the href attribute in the &lt;a&gt; tag specifies the URL of the page the link goes to. Other attributes include class, id, style, and data-*.</li>
              <li><strong>Forms:</strong> HTML forms are used to collect user input. They include elements like &lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;, and &lt;button&gt;, and attributes like action, method, and enctype to specify how form data should be handled.</li>
          </ul>
          <h3>Key Features</h3>
          <ul>
              <li><strong>Semantic Elements:</strong> HTML5 introduced semantic elements like &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, and &lt;section&gt; that help define the structure of web pages more clearly.</li>
              <li><strong>Multimedia Support:</strong> HTML5 provides native support for audio and video embedding using &lt;audio&gt; and &lt;video&gt; elements, making it easier to include multimedia content without plugins.</li>
              <li><strong>Graphics and Effects:</strong> HTML5 includes support for 2D drawing via the &lt;canvas&gt; element and scalable vector graphics (SVG) via the &lt;svg&gt; element.</li>
          </ul>
          <h3>Usage</h3>
          <p>HTML is used to structure content on the web. It defines the meaning and structure of web content and allows for the creation of structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items. Web developers use HTML to build websites and web applications.</p>
          <h3>Benefits</h3>
          <ul>
              <li><strong>Ease of Learning:</strong> HTML is relatively easy to learn and use, even for beginners.</li>
              <li><strong>Compatibility:</strong> HTML is supported by all modern browsers and devices, ensuring wide accessibility.</li>
              <li><strong>SEO Friendly:</strong> Proper use of HTML elements can improve the SEO of a website, making it easier for search engines to index and rank the content.</li>
          </ul>
      `
  },
  {
      title: "CSS",
      content: `
          <h2 class='mb-5'>CSS (Cascading Style Sheets)</h2>
          <p>CSS is a stylesheet language used for describing the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p>
          <p>CSS was introduced in December 1996 by the W3C to improve web accessibility and to provide greater flexibility and control in the specification of presentation characteristics.</p>
          <ul>
              <li><strong>Selectors:</strong> Patterns used to select the elements you want to style. Examples include class selectors (.class), ID selectors (#idname), and element selectors (elementname).</li>
              <li><strong>Properties:</strong> CSS properties are used to apply styles to elements. Examples include color, font-size, margin, padding, border, and display.</li>
              <li><strong>Responsive Design:</strong> CSS allows for responsive web design, ensuring web applications render well on a variety of devices and window or screen sizes.</li>
          </ul>
          <h3>Key Features</h3>
          <ul>
              <li><strong>Flexbox:</strong> A layout model that allows you to design complex layouts with ease.</li>
              <li><strong>Grid Layout:</strong> A powerful layout system for creating grid-based designs.</li>
              <li><strong>Media Queries:</strong> Allow for the application of styles based on the characteristics of the device rendering the content, such as screen size, resolution, and orientation.</li>
          </ul>
          <h3>Usage</h3>
          <p>CSS is used to control the style and layout of web pages. It enables the separation of content from presentation, improving content accessibility and providing more flexibility in terms of presentation characteristics. Web developers use CSS to create visually appealing web pages, handle layout, and ensure responsiveness across different devices.</p>
          <h3>Benefits</h3>
          <ul>
              <li><strong>Separation of Concerns:</strong> CSS allows developers to separate content (HTML) from presentation (CSS), making it easier to maintain and update websites.</li>
              <li><strong>Consistency:</strong> CSS enables consistent styling across multiple pages of a website.</li>
              <li><strong>Performance:</strong> CSS can improve the performance of web pages by reducing the amount of code needed for styling and by enabling faster rendering by browsers.</li>
          </ul>
      `
  },
  {
      title: "JavaScript",
      content: `
          <h2 class='mb-5'>JavaScript</h2>
          <p>JavaScript is a high-level, often just-in-time compiled, and multi-paradigm programming language. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
          <p>JavaScript engines were originally used only in web browsers, but they are now core components of other software systems, particularly servers and a variety of applications.</p>
          <ul>
              <li><strong>Variables:</strong> Containers for storing data values. Declared using var, let, or const.</li>
              <li><strong>Functions:</strong> Blocks of code designed to perform a particular task. Functions are executed when "something" invokes them (calls them).</li>
              <li><strong>Events:</strong> Things that happen to HTML elements, which can be triggered by user actions or by the browser. Examples include clicking a button, submitting a form, etc.</li>
              <li><strong>Asynchronous Programming:</strong> JavaScript uses asynchronous programming techniques, such as callbacks, promises, and async/await, to handle operations that take time to complete.</li>
          </ul>
          <h3>Key Features</h3>
          <ul>
              <li><strong>Dynamic Typing:</strong> JavaScript is a dynamically typed language, meaning variable types are determined at runtime.</li>
              <li><strong>First-Class Functions:</strong> Functions in JavaScript are first-class citizens, meaning they can be stored in variables, passed as arguments to other functions, and returned from functions.</li>
              <li><strong>Prototypal Inheritance:</strong> JavaScript uses prototypal inheritance, allowing objects to inherit properties and methods from other objects.</li>
          </ul>
          <h3>Usage</h3>
          <p>JavaScript is used to create interactive and dynamic web pages. It is an essential part of web applications, allowing for real-time updates, form validation, animations, and more. JavaScript can also be used for server-side development with environments like Node.js.</p>
          <h3>Benefits</h3>
          <ul>
              <li><strong>Interactivity:</strong> JavaScript enables the creation of interactive web pages, enhancing user experience.</li>
              <li><strong>Versatility:</strong> JavaScript can be used for both client-side and server-side development.</li>
              <li><strong>Rich Ecosystem:</strong> JavaScript has a vast ecosystem of libraries and frameworks, such as React, Angular, and Vue.js, that simplify and enhance development.</li>
          </ul>
      `
  },
  {
      title: "Node.js",
      content: `
          <h2 class='mb-5'>Node.js</h2>
          <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.</p>
          <p>Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.</p>
          <ul>
              <li><strong>Non-blocking I/O:</strong> Node.js uses non-blocking, event-driven architecture, making it lightweight and efficient for I/O-heavy operations.</li>
              <li><strong>npm:</strong> Node.js comes with npm, the largest ecosystem of open source libraries in the world.</li>
              <li><strong>Server-Side Development:</strong> Enables building scalable network applications. Node.js is particularly well-suited for building applications that require real-time interaction or streaming data.</li>
              <li><strong>Modules:</strong> Node.js applications can be modularized into smaller, reusable pieces using modules. This helps in organizing the codebase efficiently.</li>
          </ul>
          <h3>Key Features</h3>
          <ul>
              <li><strong>Event-Driven Architecture:</strong> Node.js uses an event-driven, non-blocking I/O model that makes it efficient and scalable.</li>
              <li><strong>Asynchronous Programming:</strong> Node.js allows for asynchronous programming, which can handle multiple operations concurrently.</li>
              <li><strong>Single Programming Language:</strong> Developers can use JavaScript for both client-side and server-side code, reducing the learning curve and simplifying development.</li>
          </ul>
          <h3>Usage</h3>
          <p>Node.js is used to build server-side applications. It is ideal for developing data-intensive, real-time applications such as chat applications, online gaming, collaborative tools, and APIs. Node.js is also used in microservices architecture due to its lightweight and efficient nature.</p>
          <h3>Benefits</h3>
          <ul>
              <li><strong>High Performance:</strong> Node.js is known for its high performance due to its non-blocking I/O and event-driven architecture.</li>
              <li><strong>Large Ecosystem:</strong> The npm repository provides a vast number of libraries and tools that speed up development.</li>
              <li><strong>Scalability:</strong> Node.js is designed to build scalable network applications, making it suitable for applications that need to handle a large number of simultaneous connections.</li>
          </ul>
      `
  }
];
