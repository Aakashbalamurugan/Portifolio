import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    document.title = 'Aakash Portfolio';
  }, []);

  return (
    <>
      <section className="mt-8 sm:mt-12 text-center animate-fadeIn px-0">
        <img
          src={`${process.env.PUBLIC_URL}/img/aakash.png`}
          alt="Aakash"
          className="mx-auto w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mb-4 sm:mb-6 border-4 border-blue-500 dark:border-blue-400 shadow-xl max-w-[min(100%,10rem)]"
        />
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-balance px-1">
          Hey, I am Aakash Balamurugan
        </h2>
        <p className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 mb-4 text-balance">
          Graduate Engineer at Freshworks
        </p>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed [text-wrap:pretty]">
          A results-driven engineer specializing in developing and managing{' '}
          <strong>robust web applications</strong>. Proud native of Puducherry. I am deeply interested
          in{' '}
          <strong>Cloud Computing, Artificial Intelligence, and Machine Learning</strong>, and
          continuously expand my knowledge to build scalable and innovative software solutions.
        </p>
      </section>

      <section className="mt-12 sm:mt-16 animate-fadeIn">
        <h2 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-center border-b pb-2 border-gray-200 dark:border-gray-700">
          Technical Expertise
        </h2>
        <div className="space-y-5 sm:space-y-6">
          <div className="p-4 sm:p-5 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">
              Programming & Backend
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              <span className="tag">Java (Spring Boot)</span>
              <span className="tag">Python</span>
              <span className="tag">JavaScript(React, Node.js)</span>
              <span className="tag">Ruby</span>
              <span className="tag">Kotlin</span>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">
              Testing & Tools
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              <span className="tag">Selenium</span>
              <span className="tag">Playwright</span>
              <span className="tag">Cursor (IDE)</span>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">
              Cloud, DevOps & Database
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              <span className="tag">AWS(EC2, RDS)</span>
              <span className="tag">Docker</span>
              <span className="tag">Git</span>
              <span className="tag">MySQL</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 sm:mt-12 animate-fadeIn">
        <h2 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-center border-b pb-2 border-gray-200 dark:border-gray-700">
          Languages
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow text-center">
              <p className="font-medium text-sm sm:text-base text-blue-600 dark:text-blue-400">
                Tamil (Native)
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow text-center">
              <p className="font-medium text-sm sm:text-base text-blue-600 dark:text-blue-400">
                English (Professional)
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow text-center">
              <p className="font-medium text-sm sm:text-base text-blue-600 dark:text-blue-400">
                French (Conversational)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-16 animate-fadeIn">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center border-b pb-3 border-gray-200 dark:border-gray-700 text-balance">
          Career at Freshworks
        </h2>
        <div className="space-y-8 sm:space-y-10 text-sm sm:text-base max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-blue-600 dark:border-blue-400">
            <h3 className="text-lg sm:text-xl font-bold mb-1 text-blue-600 dark:text-blue-400 [text-wrap:balance]">
              Graduate Engineer / Back-end Developer (Full-time)
            </h3>
            <p className="font-semibold text-base sm:text-lg">
              <span className="block sm:inline">Freshworks | </span>
              <span className="text-xs sm:text-sm font-normal">Feb 2025 – Present</span>
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300 [text-wrap:pretty]">
              <li>
                Responsible for maintaining and optimizing the{' '}
                <strong>continuous integration and continuous deployment (CI/CD) pipelines</strong>,
                ensuring rapid and reliable software releases.
              </li>
              <li>
                Focused on stabilizing the existing <strong>regression test cases</strong> to enhance
                product quality and significantly reduce post-deployment issues.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-blue-600 dark:border-blue-400">
            <h3 className="text-lg sm:text-xl font-bold mb-1 text-blue-600 dark:text-blue-400 [text-wrap:balance]">
              Software Engineer (Internship)
            </h3>
            <p className="font-semibold text-base sm:text-lg">
              <span className="block sm:inline">Freshworks | </span>
              <span className="text-xs sm:text-sm font-normal">
                Dec 2023 – Jan 2025 · 1 yr 2 mos
              </span>
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300 [text-wrap:pretty]">
              <li>
                Developed and contributed to <strong>Spring-based microservices</strong> and{' '}
                <strong>Python FastAPI microservices</strong>, directly impacting production
                environments.
              </li>
              <li>
                <strong>Optimized complex API response times</strong> in production by analyzing
                bottlenecks and refactoring code, leading to improved customer experience.
              </li>
              <li>
                Resolved critical <strong>customer issues</strong> across microservices by diagnosing
                and fixing bugs under tight deadlines.
              </li>
              <li>
                Gained practical knowledge in <strong>AWS</strong> and used <strong>k9s</strong> for
                monitoring and managing product deployments in Kubernetes environments.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-blue-600 dark:border-blue-400">
            <h3 className="text-lg sm:text-xl font-bold mb-1 text-blue-600 dark:text-blue-400 [text-wrap:balance]">
              Student Trainee – STS Software Academy
            </h3>
            <p className="font-semibold text-base sm:text-lg">
              <span className="block sm:inline">Freshworks | </span>
              <span className="text-xs sm:text-sm font-normal">
                Sep 2022 – Nov 2023 · 1 yr 3 mos
              </span>
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300 [text-wrap:pretty]">
              <li>
                Successfully completed intensive training in foundational technologies including{' '}
                <strong>HTML, JavaScript, Java, and MySQL</strong>.
              </li>
              <li>
                Built a strong theoretical and practical base in{' '}
                <strong>Data Structures and Algorithms (DSA)</strong>, preparing for complex
                engineering tasks.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <p className="text-center mt-8 sm:mt-10 text-base sm:text-lg animate-fadeIn px-1">
        <Link
          to="/about"
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors inline-block py-2 min-h-11 leading-snug max-w-prose mx-auto [text-wrap:balance]"
        >
          Know more about my journey and philosophy &rarr;
        </Link>
      </p>

      <hr className="my-10 border-gray-300 dark:border-gray-700" />
    </>
  );
}
