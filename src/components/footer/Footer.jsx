import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4 w-full h-full " id='footer'>
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href='https://www.linkedin.com/in/jean-yves-olivier-manga-117a58226/'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current">
            <path
              d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.15 20.45H3.56v-9.84h3.59v9.84zm-1.8-11.31c-1.15 0-1.87-.77-1.87-1.74 0-.99.72-1.74 1.87-1.74 1.15 0 1.87.75 1.87 1.74 0 .97-.72 1.74-1.87 1.74zm14.06 11.31h-3.58v-5.46c0-1.3-.47-2.2-1.64-2.2-1.29 0-2.06.91-2.06 2.17v5.49h-3.58v-9.84h3.58v1.37h.05c.47-.73 1.3-1.37 2.47-1.37 1.88 0 3.29 1.26 3.29 3.93v6.87z"
            ></path>
          </svg>
        </a>

        <a href="https://github.com/YVESMANGA">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current">
            <path
              d="M12 .5C5.37.5.25 5.62.25 12c0 5.03 3.29 9.29 7.88 10.82.58.11.79-.25.79-.55v-2.04c-3.22.7-3.9-1.55-3.9-1.55-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.14.08 1.73 1.17 1.73 1.17 1.02 1.75 2.67 1.24 3.32.94.1-.73.4-1.24.72-1.52-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.23 0 0 1.01-.32 3.3 1.23.96-.27 2.01-.4 3.04-.4s2.08.13 3.04.4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.67.24 2.92.12 3.23.77.84 1.24 1.91 1.24 3.22 0 4.59-2.81 5.62-5.47 5.92.4.35.75.98.75 1.86v2.76c0 .31.21.66.79.55C20.71 21.29 24 17.03 24 12c0-6.38-5.12-11.5-12-11.5z"
            ></path>
          </svg>
        </a>

      </nav>
    </footer>
  )
}

export default Footer;
