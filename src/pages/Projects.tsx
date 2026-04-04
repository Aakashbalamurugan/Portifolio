import { useEffect } from 'react';

const base = process.env.PUBLIC_URL || '';

export default function Projects() {
  useEffect(() => {
    document.title = 'Aakash - Projects';
  }, []);

  return (
    <main className="mt-8 sm:mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-balance px-1">
        My Projects
      </h2>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow mb-6 sm:mb-8 animate-fadeIn">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2 [text-wrap:balance]">
          BetterMe - Self Development Platform
        </h3>
        <p className="mb-2 text-sm sm:text-base">
          <strong>Technologies:</strong> Java, MySQL, HTML, Servlet
        </p>
        <p className="mb-4 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
          BetterMe is a self-development platform designed to help users grow through structured tasks,
          journaling, and progress tracking. Built as a full-stack web application combining frontend
          and backend functionality using Java and Servlets.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <img
            src={`${base}/img/screenshots/betterme1.png`}
            alt="BetterMe Screenshot 1"
            className="rounded-lg w-full h-auto object-contain max-h-64 sm:max-h-none border border-gray-200/50 dark:border-gray-600/50"
          />
          <img
            src={`${base}/img/screenshots/betterme2.png`}
            alt="BetterMe Screenshot 2"
            className="rounded-lg w-full h-auto object-contain max-h-64 sm:max-h-none border border-gray-200/50 dark:border-gray-600/50"
          />
        </div>
        <a
          href="https://github.com/Akashbalamurugan/BetterMe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-blue-600 dark:text-blue-400 underline py-1"
        >
          🔗 View Project on GitHub
        </a>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow mb-6 sm:mb-8 animate-fadeIn">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2 [text-wrap:balance]">
          Bus Attendance System with Face Recognition
        </h3>
        <p className="mb-2 text-sm sm:text-base">
          <strong>Technologies:</strong> Python (Keras-Facenet, OpenCV), MySQL, Kotlin (Android)
        </p>
        <p className="mb-4 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
          This smart attendance system uses facial recognition to mark student attendance on
          school/college buses. It leverages the <strong>keras-facenet</strong> deep learning model
          to extract facial embeddings, providing accurate identification of students even under
          varying lighting and angles. The backend handles face encoding and comparison using Python
          and OpenCV, while the Android app built with Kotlin communicates with the backend to
          automate attendance in real-time.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <img
            src={`${base}/img/screenshots/busapp1.png`}
            alt="Bus Attendance App Screenshot 1"
            className="rounded-lg w-full h-auto object-contain max-h-64 sm:max-h-none border border-gray-200/50 dark:border-gray-600/50"
          />
          <img
            src={`${base}/img/screenshots/busapp2.png`}
            alt="Bus Attendance App Screenshot 2"
            className="rounded-lg w-full h-auto object-contain max-h-64 sm:max-h-none border border-gray-200/50 dark:border-gray-600/50"
          />
        </div>
        <a
          href="https://github.com/Aakashbalamurugan/bus-attendence"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-blue-600 dark:text-blue-400 underline py-1"
        >
          🔗 View Project on GitHub
        </a>
      </div>
    </main>
  );
}
