export default function About() {
  return (
    <div>
      <h2 className="text-green-500 text-lg mb-4">$ about-evaplan</h2>
      <div className="space-y-4 text-gray-300">
        <p>
          Evaplan is a simple event planner application built to demonstrate the power of modern web technologies.
        </p>
        <p>
          This application is built with the following stack:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>React for the frontend</li>
          <li>Vite as the build tool</li>
          <li>Tailwind CSS for styling</li>
          <li>Node.js and Express for the backend</li>
          <li>Supabase for the database</li>
          <li>React Router for navigation</li>
        </ul>
      </div>
    </div>
  )
}
