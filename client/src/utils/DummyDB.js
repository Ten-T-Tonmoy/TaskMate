export const chats = [
  {
    chatTitle: "Getting Started with React",
    date: "2025-05-28",
    messages: [
      {
        user: "How do I create a React component?",
        response:
          "To create a React component, you can use either a function or class. Here's a simple functional component:\n\n```jsx\nfunction MyComponent() {\n  return <div>Hello World!</div>;\n}\n```\n\nFunctional components are the modern preferred approach.",
      },
      {
        user: "What about useState hook?",
        response:
          "useState is a hook that lets you add state to functional components:\n\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}\n```",
      },
    ],
  },
  {
    chatTitle: "JavaScript Array Methods",
    date: "2025-05-27",
    messages: [
      {
        user: "What's the difference between map and forEach?",
        response:
          "Great question! The key differences are:\n\n- `map()` returns a new array with transformed elements\n- `forEach()` just iterates and returns undefined\n\n```js\nconst nums = [1, 2, 3];\nconst doubled = nums.map(x => x * 2); // [2, 4, 6]\nnums.forEach(x => console.log(x)); // just logs, returns undefined\n```",
      },
      {
        user: "When should I use filter?",
        response:
          "Use `filter()` when you want to create a new array with only elements that meet a condition:\n\n```js\nconst numbers = [1, 2, 3, 4, 5];\nconst evens = numbers.filter(n => n % 2 === 0); // [2, 4]\n```\n\nIt's perfect for removing unwanted items or finding specific matches.",
      },
    ],
  },
  {
    chatTitle: "CSS Flexbox Layout",
    date: "2025-05-26",
    messages: [
      {
        user: "How do I center a div with flexbox?",
        response:
          "To center a div with flexbox, use these properties on the parent container:\n\n```css\n.parent {\n  display: flex;\n  justify-content: center; /* horizontal centering */\n  align-items: center; /* vertical centering */\n  height: 100vh; /* full viewport height */\n}\n```\n\nThis centers the child element both horizontally and vertically.",
      },
      {
        user: "What about flex-direction?",
        response:
          "flex-direction controls the main axis direction:\n\n- `row` (default): items flow left to right\n- `column`: items stack top to bottom\n- `row-reverse`: right to left\n- `column-reverse`: bottom to top\n\n```css\n.container {\n  display: flex;\n  flex-direction: column; /* stacks items vertically */\n}\n```",
      },
    ],
  },
  {
    chatTitle: "Python Data Structures",
    date: "2025-05-25",
    messages: [
      {
        user: "What's the difference between lists and tuples?",
        response:
          "Lists and tuples are both sequences, but:\n\n**Lists** (mutable):\n```python\nmy_list = [1, 2, 3]\nmy_list.append(4)  # Can modify\n```\n\n**Tuples** (immutable):\n```python\nmy_tuple = (1, 2, 3)\n# my_tuple.append(4)  # Error! Can't modify\n```\n\nUse tuples for fixed data, lists for changing collections.",
      },
      {
        user: "How do dictionaries work?",
        response:
          "Dictionaries store key-value pairs and are super useful:\n\n```python\nperson = {\n    'name': 'Alice',\n    'age': 30,\n    'city': 'New York'\n}\n\nprint(person['name'])  # 'Alice'\nperson['age'] = 31    # Update value\nperson['job'] = 'Developer'  # Add new key\n```\n\nThey're perfect for structured data and fast lookups.",
      },
    ],
  },
  {
    chatTitle: "Node.js and Express",
    date: "2025-05-24",
    messages: [
      {
        user: "How do I create a simple Express server?",
        response:
          "Here's a basic Express server setup:\n\n```js\nconst express = require('express');\nconst app = express();\nconst PORT = 3000;\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});\n```\n\nDon't forget to run `npm install express` first!",
      },
      {
        user: "How do I handle POST requests?",
        response:
          "To handle POST requests, you need middleware to parse the body:\n\n```js\napp.use(express.json()); // Parse JSON bodies\n\napp.post('/users', (req, res) => {\n  const { name, email } = req.body;\n  // Process the data\n  res.json({ message: 'User created', name, email });\n});\n```\n\nThe express.json() middleware is essential for reading POST data.",
      },
    ],
  },
  {
    chatTitle: "Git Version Control",
    date: "2025-05-23",
    messages: [
      {
        user: "What's the difference between git add and git commit?",
        response:
          'Think of it as a two-step process:\n\n1. `git add` stages changes (prepares them)\n2. `git commit` saves the staged changes\n\n```bash\ngit add file.js        # Stage specific file\ngit add .             # Stage all changes\ngit commit -m "Fix bug" # Commit staged changes\n```\n\nStaging lets you choose exactly what to commit.',
      },
      {
        user: "How do I undo the last commit?",
        response:
          "There are a few ways depending on what you want:\n\n```bash\n# Keep changes, undo commit only\ngit reset --soft HEAD~1\n\n# Remove changes completely (be careful!)\ngit reset --hard HEAD~1\n\n# Create new commit that undoes the last one\ngit revert HEAD\n```\n\nFor safety, `git revert` is usually the best choice.",
      },
    ],
  },
];
