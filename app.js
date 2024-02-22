new Vue({
    el: '#app',
    data: {
      services: ['Desenvolvimento web', 'Treinamento', 'Web design', 'Design de experiência do usuário (UX)', 'Copywriting'],
      about: {
        name: 'Laís',
        role: 'Desenvolvedora Fullstack',
        introduction: 'Olá 👋🏽, sou a Laís, uma apaixonada desenvolvedora fullstack e educadora dedicada à integração da tecnologia com a educação social...',
        skills: ['Vue.js', 'WordPress', 'Laravel', 'SASS', 'Nuxt', 'React', 'SEO', 'UX/UI'],
        contactEmail: 'dev.laisgalvao@gmail.com'
      },
      experiences: [
        {
          company: 'Shinier Soluções Tecnológicas',
          role: 'Desenvolvedor Full Stack',
          date: 'abr de 2021 - o momento',
          description: 'Desenvolvimento e manutenção de aplicações web front-end e back-end, utilizando tecnologias como MySQL, Laravel, Vue.js, AWS, Azure e Wordpress. Comunicação direta com o cliente para compreensão e atendimento de seus requisitos...'
        },
        {
          company: 'Freelance',
          role: 'Professora de informática básica',
          date: 'fev de 2022 - jun de 2022',
          description: 'Ministrei aulas de informática básica (pacote Office), redigi materiais didáticos de apoio ao aluno, ofereci suporte e ajuda aos alunos dentro das plataformas utilizadas em aula...'
        },
        {
          company: 'Galvão TI suporte de informática',
          role: 'Técnico de computador',
          date: 'fev de 2018 - mai de 2020',
          description: 'Realizei reparos e suporte técnico em equipamentos de microinformática, além de configurar redes de computadores e oferecer manutenção preventiva.'
        }
      ],
      volunteerExperiences: [
        {
          company: 'AACD',
          role: 'Criadora de conteúdo',
          date: 'nov de 2023 · 1 m',
          field: 'Serviço social',
          description: 'Atuação voluntária remota durante o Teleton 2023. Fiz parte da equipe de voluntários da @Stilingue by @Blip para acompanhamento do evento nas redes sociais em tempo real. Atuei na parte de criação de conteúdo, elaborando peças de design e copy para publicações nas redes sociais durante o evento.',
          certificate: 'Certificado war room Teleton.pdf',
          linkedInHashtags: '#teleton2023 #voluntariado #voluntariateleton2023 #warroomstilinguebyblip'
        },
        {
          company: 'Universidade Santo Amaro - Unisa',
          role: 'Multiplicadora/ monitora',
          date: 'nov de 2019 - dez de 2021 · 2 a 2 m',
          field: 'Educação',
          description: '- Lecionou cursos de informática básica (pacote Office) para alunos da universidade; - Redigiu materiais didáticos usados no projeto, incluindo planos de aula e apresentações; - Forneceu suporte técnico aos alunos durante as aulas e monitorou o progresso do curso; Realizou atividades práticas em sala de aula para melhorar o aprendizado; - Ajudou os alunos com dúvidas e problemas técnicos; - Participou de reuniões com outros professores e colaboradores do projeto para discutir o progresso e melhorias necessárias.',
          media: [
            { type: 'image', url: 'certificado_curso_word.jpg', caption: 'Certificado do curso de Word' },
            { type: 'image', url: 'capacitacao_professores.jpg', caption: 'Capacitação de professores' },
            // ... (outras mídias, se houver)
          ]
        },
        {
          company: 'Gotham',
          role: 'Redator técnico',
          date: 'jun de 2022 - fev de 2023 · 9 m',
          field: 'Ciência e tecnologia',
          description: '- Elaborou documentações técnicas para apoiar novos desenvolvedores no projeto; - Trabalhou em equipe com desenvolvedores para entender as necessidades e produzir documentação clara e precisa; - Revisou e editou documentação existente para melhorar a qualidade e usabilidade; - Participou de reuniões de equipe para discutir o progresso e as necessidades do projeto.',
          media: [
            // ... (mídia, se houver)
          ]
        }
      ]
    }
  });