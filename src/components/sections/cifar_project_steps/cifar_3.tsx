import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../../styles/theme';
import step_img from "../../../assets/cifar/cifar_3.png"

const ProjectsSection = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;


const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  grid-template-columns: 1fr 2fr;
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`

  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 480px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 480px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, ${theme.colors.glass.card}, transparent);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const projects = [
  {
    id: 1,
    title: "",
    description: "",
    image: step_img,
    techStack: [],
    // githubUrl: "https://github.com",
    liveUrl: "",
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ProjectsSection id="3" role="region" aria-label="Featured Projects">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`project-title-${project.id}`}
            >
              <ProjectImage 
                imageUrl={project.image}
                role="img"
                aria-label={`Screenshot of ${project.title}`}
              />
            </ProjectCard>
            
          ))}
          <ProjectCard 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`project-title-1`}
            >
            <ProjectContent>
                <ProjectTitle id={`project-title-1`}>Discriminator Model</ProjectTitle>
                <ProjectDescription> 
                  Likewise with the Discriminator, I utilized strided convolution layers and batch normalization.<br/>
                  Several other additions include:<br/><br/>
                  - Utilizing leaky relu over relu for the activation function <br/>
                  - Binary crossentropy for the loss function as we're dealing with binary classification (real or fake image)
                </ProjectDescription>
                <TechStack role="list" aria-label={`Technologies used in Feature Engineering`}>
                {/* <TechTag role="listitem">Google Cloud</TechTag>
                <TechTag role="listitem">Docker</TechTag> */}
                </TechStack>
            </ProjectContent>
            </ProjectCard>
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
