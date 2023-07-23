# Todo

This is a simple todo application built with Next.js, React, Tailwind CSS, and Prisma. The application allows users to manage their todo list.

## Features

- Users can add new tasks.
- Users can mark existing tasks as completed or uncompleted.

## Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/kadirmetin/todo.git
cd todo
```

2. Install the dependencies:
```
npm install
```

3. Create and migrate the database:
```
npx prisma migrate dev
```

4. Start the application:
```
npm run dev
```

5. The application should now be running at http://localhost:3000. You can open this address in your browser to access the application.

## Usage
When the application starts, all tasks will be listed on the main page. You can use the "Create new Task" button to add new tasks. Existing tasks have a checkbox that you can use to mark them as completed.

## License
This project is licensed under the MIT License. For more information, see the LICENSE file.
