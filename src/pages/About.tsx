import { useEffect } from 'react';

const base = process.env.PUBLIC_URL || '';

export default function About() {
  useEffect(() => {
    document.title = 'About — Aakash Portfolio';
  }, []);

  return (
    <div className="mt-8 sm:mt-12 max-w-2xl mx-auto animate-fadeIn w-full min-w-0 px-0">
      <h1 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-balance">Hi there!</h1>
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 sm:mb-10 [text-wrap:pretty]">
        I am Aakash Balamurugan, a graduate engineer at Freshworks with a focus on backend systems,
        quality, and shipping reliable software. I enjoy learning across cloud, AI/ML, and full-stack
        development.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        What I Do Well
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 [text-wrap:pretty]">
        <li>Building and maintaining web applications and microservices</li>
        <li>CI/CD pipelines, testing with Selenium and Playwright, and stabilizing regression suites</li>
        <li>Cloud and DevOps tooling (AWS, Docker, Kubernetes workflows)</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Get in Touch</h2>
      <p className="mb-6 text-sm sm:text-base break-words">
        Feel free to mail me at:{' '}
        <a
          href="mailto:aakashbala205@gmail.com"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-block py-1"
        >
          aakashbala205@gmail.com
        </a>
      </p>

      <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap py-6">
        <a
          href="https://github.com/Aakashbalamurugan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <img src={`${base}/img/logo/github.png`} alt="GitHub" className="w-11 h-11 sm:w-12 sm:h-12 object-contain" />
        </a>
        <a
          href="https://www.linkedin.com/in/aakash-balamurugan/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <img
            src={`${base}/img/logo/linkedin.png`}
            alt="LinkedIn"
            className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
          />
        </a>
        <a
          href="mailto:aakashbala205@gmail.com"
          className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <img src={`${base}/img/logo/gmail.png`} alt="Email" className="w-11 h-11 sm:w-12 sm:h-12 object-contain" />
        </a>
      </div>
    </div>
  );
}
