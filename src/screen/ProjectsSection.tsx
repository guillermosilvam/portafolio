import { ProjectCard } from '../components/ProjectCard'

export const Projects = () => (
    <section>
        <ProjectCard
          images={['/img1.jpg', '/img2.jpg']}
          title="Mi Proyecto"
          description="Una breve descripción del proyecto"
          tags={['React', 'TypeScript', 'Node.js']}
          githubLink="https://github.com/usuario/proyecto"
        />
    </section>
)