```vue
<template>
  <div class="projects-page">
    <!-- =========================
         HERO / PAGE HEADER
    ========================== -->
    <section class="projects-hero">
      <div class="hero-content">
        <p class="small-heading">MY WORK</p>

        <h1>My Projects</h1>

        <p class="hero-description">
          Explore some of the projects I have worked on throughout my
          development journey. Each project represents an opportunity to learn,
          create, and improve my skills.
        </p>
      </div>
    </section>

    <!-- =========================
         PROJECTS SECTION
    ========================== -->
    <section class="projects-section">
      <div class="section-title">
        <p class="small-heading">PORTFOLIO</p>

        <h2>Things I've Built</h2>
      </div>

      <!-- PROJECT GRID -->
      <div class="projects-grid">
        <!-- =====================
             PROJECT 1
        ====================== -->
        <article class="project-card">
          <div class="project-image">
            <!-- Replace this with your project image -->
            <img src="" alt="Project 1" />

            <div class="image-placeholder">Project Image</div>
          </div>

          <div class="project-content">
            <span class="project-number"> 01 </span>

            <h3>Project Name</h3>

            <p>
              Add a short description of your project here. Explain what the
              project is, what problem it solves, and what you learned while
              creating it.
            </p>

            <!-- TECHNOLOGIES -->
            <div class="technologies">
              <span> HTML </span>

              <span> CSS </span>

              <span> JavaScript </span>
            </div>

            <!-- BUTTONS -->
            <div class="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Project
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="github-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>

        <!-- =====================
             PROJECT 2
        ====================== -->
        <article class="project-card">
          <div class="project-image">
            <img src="" alt="Project 2" />

            <div class="image-placeholder">Project Image</div>
          </div>

          <div class="project-content">
            <span class="project-number"> 02 </span>

            <h3>Project Name</h3>

            <p>
              Add a short description of your project here. Explain what the
              project is, what problem it solves, and what you learned while
              creating it.
            </p>

            <div class="technologies">
              <span> Vue.js </span>

              <span> Node.js </span>

              <span> MySQL </span>
            </div>

            <div class="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Project
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="github-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>

        <!-- =====================
             PROJECT 3
        ====================== -->
        <article class="project-card">
          <div class="project-image">
            <img src="" alt="Project 3" />

            <div class="image-placeholder">Project Image</div>
          </div>

          <div class="project-content">
            <span class="project-number"> 03 </span>

            <h3>Project Name</h3>

            <p>Add a short description of your project here.</p>

            <div class="technologies">
              <span> Technology </span>

              <span> Technology </span>
            </div>

            <div class="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Project
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="github-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>

        <!-- =====================
             PROJECT 4
        ====================== -->
        <article class="project-card">
          <div class="project-image">
            <img src="" alt="Project 4" />

            <div class="image-placeholder">Project Image</div>
          </div>

          <div class="project-content">
            <span class="project-number"> 04 </span>

            <h3>Project Name</h3>

            <p>Add a short description of your project here.</p>

            <div class="technologies">
              <span> Technology </span>

              <span> Technology </span>
            </div>

            <div class="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Project
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="github-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>

        <!-- =====================
             PROJECT 5
        ====================== -->
        <article class="project-card">
          <div class="project-image">
            <img src="" alt="Project 5" />

            <div class="image-placeholder">Project Image</div>
          </div>

          <div class="project-content">
            <span class="project-number"> 05 </span>

            <h3>Project Name</h3>

            <p>Add a short description of your project here.</p>

            <div class="technologies">
              <span> Technology </span>

              <span> Technology </span>
            </div>

            <div class="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Project
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="github-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>

        <!-- =====================
             PROJECT 6
        ====================== -->
        <article class="project-card">
          <div class="project-image">
            <img src="" alt="Project 6" />

            <div class="image-placeholder">Project Image</div>
          </div>

          <div class="project-content">
            <span class="project-number"> 06 </span>

            <h3>Project Name</h3>

            <p>Add a short description of your project here.</p>

            <div class="technologies">
              <span> Technology </span>

              <span> Technology </span>
            </div>

            <div class="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Project
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="github-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ===================================== PROJECTS PAGE ===================================== */
.projects-page {
  min-height: 100vh;
  width: 100%;
}

/* ===================================== HERO ===================================== */
.projects-hero {
  padding: 100px 8% 80px;
  text-align: center;
}
.hero-content {
  max-width: 800px;
  margin: 0 auto;
}
.small-heading {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 15px;
}
.projects-hero h1 {
  font-size: clamp(42px, 6vw, 72px);
  line-height: 1.1;
  margin: 0 0 25px;
}
.hero-description {
  max-width: 700px;
  margin: 0 auto;
  font-size: 17px;
  line-height: 1.8;
  opacity: 0.8;
}

/* ===================================== PROJECT SECTION ===================================== */
.projects-section {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0 100px;
}
.section-title {
  margin-bottom: 45px;
}
.section-title h2 {
  font-size: 38px;
  margin: 0;
}

/* ===================================== PROJECT GRID ===================================== */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 35px;
}

/* ===================================== PROJECT CARD ===================================== */
.project-card {
  overflow: hidden;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

/* ===================================== PROJECT IMAGE ===================================== */
.project-image {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  background: #f2f2f2;
}
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.image-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #777;
  background: #f2f2f2;
}

/* ===================================== PROJECT CONTENT ===================================== */
.project-content {
  padding: 30px;
}
.project-number {
  display: block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
.project-content h3 {
  font-size: 27px;
  margin: 0 0 15px;
}
.project-content p {
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 25px;
  opacity: 0.8;
}

/* ===================================== TECHNOLOGIES ===================================== */
.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
}
.technologies span {
  padding: 7px 13px;
  border-radius: 20px;
  background: #e8f5e9;
  font-size: 12px;
  font-weight: 600;
}

/* ===================================== PROJECT BUTTONS ===================================== */
.project-links {
  display: flex;
  align-items: center;
  gap: 12px;
}
.project-links a {
  display: inline-block;
  padding: 11px 18px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s ease;
}
.project-links a:first-child {
  background: #1f7a4d;
  color: #ffffff;
}
.project-links a:first-child:hover {
  opacity: 0.8;
}
.project-links .github-link {
  border: 1px solid #1f7a4d;
  color: #1f7a4d;
  background: transparent;
}
.project-links .github-link:hover {
  background: #1f7a4d;
  color: #ffffff;
}

/* ===================================== TABLET ===================================== */
@media (max-width: 900px) {
  .projects-hero {
    padding: 80px 5% 60px;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* ===================================== MOBILE ===================================== */
@media (max-width: 600px) {
  .projects-hero {
    padding: 60px 5% 50px;
  }
  .projects-section {
    width: 90%;
    padding-bottom: 70px;
  }
  .section-title h2 {
    font-size: 30px;
  }
  .project-image {
    height: 210px;
  }
  .project-content {
    padding: 22px;
  }
  .project-content h3 {
    font-size: 23px;
  }
  .project-links {
    flex-wrap: wrap;
  }
}
</style>