import * as S from "./styles";

const Habilidades = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Styled Components",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"],
    },
    {
      category: "Ferramentas",
      items: ["Git", "Docker", "VS Code", "Figma", "Webpack"],
    },
    {
      category: "Soft Skills",
      items: [
        "Comunicação",
        "Liderança",
        "Criatividade",
        "Resolução de Problemas",
        "Trabalho em Equipe",
      ],
    },
  ];

  return (
    <S.HabilidadesContainer>
      <S.Header>
        <S.Title>Habilidades & Competências</S.Title>
        <S.Subtitle>Tecnologias e conhecimentos que domino</S.Subtitle>
      </S.Header>

      <S.SkillsGrid>
        {skills.map((skillGroup, index) => (
          <S.SkillCard key={index} $delay={index * 0.1}>
            <S.CategoryIcon>
              {skillGroup.category === "Frontend" && "🎨"}
              {skillGroup.category === "Backend" && "⚙️"}
              {skillGroup.category === "Ferramentas" && "🛠️"}
              {skillGroup.category === "Soft Skills" && "🧠"}
            </S.CategoryIcon>
            <S.CategoryTitle>{skillGroup.category}</S.CategoryTitle>
            <S.SkillsList>
              {skillGroup.items.map((skill, idx) => (
                <S.SkillItem key={idx} $index={idx}>
                  {skill}
                </S.SkillItem>
              ))}
            </S.SkillsList>
          </S.SkillCard>
        ))}
      </S.SkillsGrid>

      <S.ProgressSection>
        <S.ProgressTitle>Proficiência</S.ProgressTitle>
        <S.ProgressGrid>
          <S.ProgressItem>
            <S.SkillName>React & TypeScript</S.SkillName>
            <S.ProgressBar>
              <S.ProgressFill $percentage={95} />
            </S.ProgressBar>
            <S.PercentageText>95%</S.PercentageText>
          </S.ProgressItem>

          <S.ProgressItem>
            <S.SkillName>Node.js & Express</S.SkillName>
            <S.ProgressBar>
              <S.ProgressFill $percentage={85} />
            </S.ProgressBar>
            <S.PercentageText>85%</S.PercentageText>
          </S.ProgressItem>

          <S.ProgressItem>
            <S.SkillName>Banco de Dados</S.SkillName>
            <S.ProgressBar>
              <S.ProgressFill $percentage={80} />
            </S.ProgressBar>
            <S.PercentageText>80%</S.PercentageText>
          </S.ProgressItem>

          <S.ProgressItem>
            <S.SkillName>UI/UX Design</S.SkillName>
            <S.ProgressBar>
              <S.ProgressFill $percentage={75} />
            </S.ProgressBar>
            <S.PercentageText>75%</S.PercentageText>
          </S.ProgressItem>
        </S.ProgressGrid>
      </S.ProgressSection>
    </S.HabilidadesContainer>
  );
};

export default Habilidades;
