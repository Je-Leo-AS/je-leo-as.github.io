
export const GLOBAL_VARS = {
  linkedInUrl: "https://www.linkedin.com/in/leonardo-20-as/",
  lattesUrl: "https://lattes.cnpq.br/2911002601216607",
  dpdUrl: "https://jpm.ufpr.br/wp-content/uploads/2024/12/15.pdf",
  trngUrl:
    "https://jpm.ufpr.br/wp-content/uploads/2024/05/semicro-pr_2022_paper_11.pdf",
};

export const translations = {
  pt: {
    home: "Home",
    about: "Sobre",
    tools: "Ferramentas & Linguagens",
    education: "Formação",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contato",
    hero_subtitle:
      "Engenheiro de Sistemas Embarcados, Firmware, IoT e Ciência de Dados",
    contact_button: "Entre em Contato",
    about_title: "Sobre Mim",
    about_text:
      "Sou Leonardo Santos, um engenheiro elétrico apaixonado por tecnologia e inovação. Minha trajetória combina experiências acadêmicas, profissionais e projetos pessoais desafiadores. Durante a graduação, fui monitor de Eletrônica Digital e Microeletrônica, auxiliei em um curso de Python para Engenharia Química e organizei a Semana de Atualização Acadêmica de Engenharia Elétrica (Seatel). No Programa de Educação Tutorial (PET), liderei projetos como IoPET (IoT e firmware), BigPET (machine learning) e PET3D (design e impressão 3D). Participei de um projeto de veículo off-road, desenvolvendo o subsistema elétrico, com conquistas como 1º lugar no projeto elétrico no Regional Sul 2019, 11º lugar nacional no Baja SAE 2020 e 2º lugar no Regional Sul 2020. Atualmente, desenvolvo firmware em C e C++ para máquinas agrícolas, otimizo análises de dados espaciais com algoritmos de ciência de dados e integro sistemas back-end e front-end. Nos meus projetos pessoais, construí um servidor caseiro com Proxmox, Tailscale VPN e máquinas virtuais rodando OpenWebUI, TrueNAS e outros serviços para IA e armazenamento seguro. Explore meu portfólio para saber mais!",
    education_title: "Formação Acadêmica",
    education_ufpr: "Engenharia Elétrica - UFPR, Curitiba, PR",
    education_bachelor: "Licenciatura",
    education_master: "Maestría",
    education_bachelor_description:
      "Durante minha graduação, mergulhei no universo da engenharia elétrica, desenvolvendo habilidades sólidas em projetos de circuitos elétricos para sistemas embarcados e residenciais. Minha paixão por tecnologia me levou a dominar programação em C++ e desenvolvimento de firmware para microprocessadores, criando soluções eficientes e inovadoras. Como parte do meu Trabalho de Conclusão de Curso (TCC), projetei um circuito integrado e implementei um pré-distorcedor digital baseado em polinômio de memória, enfrentando desafios técnicos que reforçaram minha capacidade de resolver problemas complexos. Além das disciplinas obrigatórias, busquei eletivas que ampliaram meu horizonte técnico, como aprendizado de máquina com Python, bancos de dados com SQL e desenvolvimento para Android. Essas experiências me proporcionaram uma visão abrangente, permitindo atuar em projetos multidisciplinares com confiança. Participei ativamente de projetos de extensão, aplicando conhecimentos teóricos em iniciativas práticas que impactaram comunidades acadêmicas e locais. Minha dedicação também se refletiu em apresentações de projetos em seminários e eventos institucionais, onde aprimorei minha habilidade de comunicar ideias técnicas de forma clara e envolvente.",
    education_master_description:
      "Atualmente, estou cursando mestrado com foco em circuitos integrados, especificamente no desenvolvimento de pré-distorcedores digitais (DPDs) para sistemas de comunicação. Dando continuidade ao meu Trabalho de Conclusão de Curso (TCC), minha pesquisa propõe avanços na identificação de coeficientes para um pré-distorcedor digital baseado em polinômio de memória (MP), considerando as restrições de implementação em FPGA. Isso inclui manipular apenas números inteiros, utilizar somadores e multiplicadores de duas entradas, e manter a mesma quantidade de bits na entrada e saída dos multiplicadores, com a remoção de metade dos bits após cada multiplicação, uma operação não linear. No meu TCC, o código de validação utilizava coeficientes previamente conhecidos e replicava operações de FPGA. Agora, o desafio central do mestrado é desenvolver um otimizador não linear inteiro capaz de identificar esses coeficientes, garantindo que sejam números inteiros e adequados às restrições de hardware. Para alcançar esse objetivo, foram propostas três atividades, sendo a terceira o foco principal: construir e implementar esse otimizador. As duas primeiras atividades, opcionais, envolvem a preparação e validação das bases teóricas e práticas para essa implementação. Além disso, apresentei a proposta do mestrado por e-mail e, se necessário, reuniões remotas serão agendadas para discutir os próximos passos. Essa pesquisa fortalece minhas competências em design de circuitos integrados, programação para hardware e otimização não linear, consolidando minha capacidade de desenvolver soluções inovadoras para problemas técnicos complexos.",
    experience_gics: "Pesquisador Científico - GICS, Curitiba, PR",
    experience_gics_description:
      "O Grupo de Concepção de Circuitos e Sistemas Integrados (GICS) da UFPR tem como objetivo atuar na pesquisa e no desenvolvimento de circuitos e sistemas integrados de radiofrequência (RF), analógicos, mistos e digitais, contribuindo tanto para o avanço científico da área quanto para a formação de profissionais altamente especializados. Entre os projetos desenvolvidos pelo grupo, destacam-se: O design de um circuito integrado de um gerador de números verdadeiramente aleatórios baseado em osciladores em anel. A modelagem e o design de um pré-distorcedor digital baseado no Polinômio de Memória.",
    experience_lactec: "Estagiário de Engenharia - Curitiba, PR",
    experience_lactec_description:
      "Durante o estágio, auxiliei na instrumentação do projeto de desenvolvimento de um gerador de energia ondomotriz. Colaborei no desenvolvimento de sensores, como o sensor de nível de água, utilizando tecnologia capacitiva para medições precisas, e o sensor de fluxo, implementado com um motor elétrico, para monitorar e otimizar o desempenho do sistema. Essa experiência me permitiu aprimorar habilidades em eletrônica, programação de microcontroladores e integração de sistemas, contribuindo significativamente para o avanço do projeto.",
    experience_baja: "Projeto de Extensão - Baja SAE, UFPR",
    experience_baja_description:
      "Participei de um projeto de extensão focado no desenvolvimento de um veículo off-road para aplicar, na prática, o conhecimento adquirido em sala de aula. O projeto era dividido em subsistemas, cada um responsável por uma etapa do desenvolvimento do carro. Atuei no subsistema elétrico, responsável pelos testes e validação dos demais subsistemas, além do projeto do chicote elétrico, representando o sistema elétrico do veículo. Nesse projeto, tive meu primeiro contato com eletrônica prática, envolvendo design de PCBs e programação de firmware. Também desenvolvi habilidades em modelagem 3D usando o software Catia para o projeto do chicote elétrico. Durante o tempo no projeto, alcançamos as seguintes colocações nas competições Baja SAE: Regional Sul 2019: 1º lugar de projeto elétrico; Nacional 2020: 11º lugar de projeto elétrico; Regional Sul 2020: 2º lugar de projeto elétrico Na competição Baja SAE BRASIL, os alunos formam equipes para representar sua Instituição de Ensino Superior, participando de avaliações anuais comparativas de seus projetos. No Brasil, a etapa nacional é chamada Competição Baja SAE BRASIL, e as regionais incluem as etapas Sul, Sudeste e Nordeste.",
    experience_PET: "Projeto de Extensão Tutorial - PET, UFPR",
    experience_PET_description:
      "O Programa de Educação Tutorial (PET) tem como compromisso fundamental aprimorar os cursos de graduação. Participei ativamente dos seguintes projetos: IoPET: projeto focado no desenvolvimento de atividades relacionadas à Internet das Coisas (IoT), programação de software e firmware. BigPET: projeto que envolve o estudo de machine learning e o desenvolvimento de propostas e desafios nessa área. Fui o líder desse projeto. PET3D: projeto voltado para a familiarização com ferramentas de design, modelagem e impressão 3D, no qual também exerci a função de líder. Além disso, contribuí organizando cursos durante a semana acadêmica e atuei como monitor nas disciplinas de Eletrônica Digital e Microeletrônica.",
    experience_title: "Experiência Profissional",
    experience_iotag: "Desenvolvedor de Software - IOTAG, Curitiba, PR",
    experience_iotag_description:
      "Na empresa, nosso objetivo é desenvolver soluções inovadoras em agricultura de precisão, com foco em firmware, algoritmos de aprendizado de máquina e sistemas embarcados, com vistas a aumentar a eficiência e a automação no setor agrícola. Participei ativamente da implementação de firmware em C e C++ para a criação da interface do terminal virtual para máquinas agrícolas, além de desenvolver algoritmos de ciência de dados aplicados a dados espaciais e coleta de dados de equipamentos. Também criei serviços que integram bancos de dados e plataformas de computação em nuvem, como AWS, garantindo a escalabilidade e a eficiência das soluções desenvolvidas.",
    projects_title: "Projetos",
    project_DPD: "Pré-distorcedor Digital",
    project_DPD_description:
      "Este projeto consiste na implementação de um pré-distorcedor digital (DPD) em VHDL baseado em polinômio com memória para compensar não-linearidades em amplificadores de potência (PA) de rádio frequência, visando eficiência energética em comunicações sem fio como IoT. Modelado inicialmente em Python com polinômio de segundo grau e sinal WCDMA, alcançando NMSE de -23,57 dB em vírgula flutuante e otimizado para vírgula fixa com 8 bits. Implementado em FPGA Virtex5 XC5VLX50T, utilizando 150 registradores, 692 LUTs e 4 DSP48E, operando a 61,5 MHz. Artigo disponível no link a seguir: <a href='" +
      GLOBAL_VARS.dpdUrl +
      "' class='text-blue-400 hover:underline'>artigo</a>!",
    project_assistant: "Assistente Virtual Multimodal",
    project_assistant_description:
      "Um assistente virtual que entende e processa múltiplas formas de entrada, incluindo texto, voz e gestos.",
    project_lock: "Fechadura Eletrônica Inteligente",
    project_lock_description:
      "Este projeto consiste em uma fechadura eletrônica inteligente baseada em IoT (Internet das Coisas), projetada para controle remoto de acesso. O sistema utiliza um módulo ESP-01 (baseado no ESP8266) como componente principal de conectividade, que se comunica via Wi-Fi e recebe comandos de um servidor MQTT implementado com o broker Mosquitto. Isso permite o acionamento da fechadura de forma segura e remota, por exemplo, através de aplicativos móveis ou integrações com assistentes virtuais. A estrutura física da fechadura foi modelada no software Autodesk Fusion 360, garantindo um design preciso e personalizado. Os componentes foram fabricados por meio de impressão 3D, resultando em uma caixa protetora robusta e compacta que abriga o mecanismo de trava, o ESP-01 e outros elementos eletrônicos como relés e sensores. O projeto enfatiza simplicidade, baixo custo e escalabilidade, ideal para aplicações residenciais ou comerciais de automação de segurança.",
    project_trng: "Circuito Integrado TRNG",
    project_trng_description:
      "Este projeto consiste no design de um circuito integrado dedicado para um TRNG baseado em anéis osciladores, desenvolvido na tecnologia BiCMOS 8HP de 130 nm. O gerador utiliza 20 anéis osciladores (quatro por estágio), cada um com 3 portas inversoras, operando a uma frequência máxima de 200 MHz. A fonte de entropia é o jitter nos atrasos das portas, garantindo aleatoriedade verdadeira. Inicialmente implementado em FPGA e descrito em VHDL, o design seguiu o fluxo VLSI com ferramentas Cadence (NCLaunch, Genus, Innovus), resultando em 53 células lógicas, área de 653 µm² e consumo de potência de 32 µW. As sequências geradas foram validadas pelo NIST Test Suite, tornando-o adequado para aplicações criptográficas seguras. Artigo disponível no link a seguir: <a href='" +
      GLOBAL_VARS.trngUrl +
      "' class='text-blue-400 hover:underline'>Artigo</a>!",
    project_fake_news: "Detector de Fake News",
    project_fake_news_description:
      "Este projeto desenvolveu um detector de fake news baseado em aprendizado de máquina, treinado com uma ampla coleção de textos reais e falsos. Utilizando técnicas de lemmatização, o sistema processa e analisa o conteúdo para identificar padrões que distinguem notícias verdadeiras de falsas, oferecendo alta precisão na classificação.",
    projects_invite:
      "Quer saber mais sobre meus projetos? Visite meu <a href='" +
      GLOBAL_VARS.LinkedinUrl +
      "' class='text-blue-400 hover:underline'>LinkedIn</a> e <a href='" +
      GLOBAL_VARS.LattesUrl +
      "' class='text-blue-400 hover:underline'>Lattes</a>!",
    skills_title: "Habilidades Técnicas",
    skills_programming: "Linguagens de Programação",
    skills_programming_list: "Python, C, C++, Java, JavaScript, HTML/CSS",
    skills_circuits: "Design de Circuitos",
    skills_circuits_list: "Cadence, ADS, Altium Designer, Proteus",
    skills_3d: "Modelagem 3D",
    skills_3d_list: "SolidWorks, Fusion 360, Catia",
    skills_frameworks: "Frameworks",
    skills_frameworks_list: "OpenCV, FastAPI, LangChain",
    skills_databases: "Bancos de Dados",
    skills_databases_list: "SQL, integração com AWS",
    skills_others: "Outros",
    skills_others_list:
      "Desenvolvimento web, simulação de circuitos, comunicação, gestão de tempo",
    contact_title: "Conecte-se Comigo",
    contact_lattes: "Perfil Lattes",
    contact_linkedin: "Perfil LinkedIn",
    contact_phone: "Telefone: (41) 98826-7727",
    footer: "© 2025 Leonardo Santos. Todos os direitos reservados.",
    curriculo_pt: "Currículo em Português",
    curriculo_en: "Currículo em Inglês",
    curriculo_es: "Currículo em Espanhol",
    nav_home: "Home",
    nav_about: "Sobre",
    nav_education: "Formação",
    nav_experience: "Experiência",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    portifolio_title: "Portfólio de Leonardo Santos",
  },
  en: {
    home: "Home",
    about: "About",
    tools: "Tools & Languages",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    hero_subtitle: "Embedded Systems Engineer, Firmware, IoT & Data Science",
    contact_button: "Get in Touch",
    about_title: "About Me",
    about_text:
      "I am Leonardo Santos, an electrical engineer passionate about technology and innovation. My journey blends academic, professional, and personal projects. During my undergraduate studies, I served as a teaching assistant for Digital Electronics and Microelectronics, taught a Python course for Chemical Engineering students, and organized the Electrical Engineering Academic Update Week (Seatel). In the Tutorial Education Program (PET), I led projects like IoPET (IoT and firmware), BigPET (machine learning), and PET3D (3D design and printing). I contributed to an off-road vehicle project, developing its electrical subsystem, achieving 1st place in the electrical project at Regional Sul 2019, 11th place nationally at Baja SAE 2020, and 2nd place at Regional South 2020. Currently, I develop firmware in C and C++ for agricultural machinery, optimize spatial data analysis with data science algorithms, and integrate back-end and front-end systems. In my personal projects, I built a home server with Proxmox, Tailscale VPN, and virtual machines running OpenWebUI, TrueNAS, and other services for AI and secure storage. Check out my portfolio to learn more!",
    education_title: "Academic Background",
    experience_title: "Professional Experience",
    experience_iotag: "Software Developer - IOTAG, Curitiba, PR",
    experience_iotag_description:
      "At the company, our goal is to develop innovative solutions in precision agriculture, focusing on firmware, machine learning algorithms, and embedded systems, with a view to increasing efficiency and automation in the agricultural sector. I actively participated in the implementation of firmware in C and C++ for the creation of the virtual terminal interface for agricultural machinery, in addition to developing data science algorithms applied to spatial data and equipment data collection. I also created services that integrate databases and cloud computing platforms, such as AWS, ensuring the scalability and efficiency of the solutions developed.",
    education_ufpr: "Electrical Engineering - UFPR, Curitiba, PR",
    education_bachelor: "bachelor's degree",
    education_master: "master's degree",
    education_bachelor_description:
      "During my undergraduate studies, I immersed myself in the world of electrical engineering, developing solid skills in electrical circuit design for embedded and residential systems. My passion for technology led me to master C++ programming and firmware development for microprocessors, creating efficient and innovative solutions. As part of my final project, I designed an integrated circuit and implemented a digital pre-distortion based on memory polynomials, facing technical challenges that reinforced my ability to solve complex problems. In addition to the required courses, I sought out electives that broadened my technical horizons, such as machine learning with Python, databases with SQL, and Android development. These experiences gave me a comprehensive view, allowing me to work on multidisciplinary projects with confidence. I actively participated in extension projects, applying theoretical knowledge to practical initiatives that impacted academic and local communities. My dedication was also reflected in project presentations at seminars and institutional events, where I improved my ability to communicate technical ideas clearly and engagingly.",
    education_master_description:
      "I am currently pursuing a master's degree with a focus on integrated circuits, specifically on the development of digital pre-distorters (DPDs) for communication systems. Continuing my final project, my research proposes advances in the identification of coefficients for a memory polynomial (MP)-based digital predistorter, considering the implementation constraints in FPGA. This includes manipulating only integers, using two-input adders and multipliers, and maintaining the same number of bits at the input and output of the multipliers, with the removal of half of the bits after each multiplication, a nonlinear operation. In my final project, the validation code used previously known coefficients and replicated FPGA operations. Now, the central challenge of the master's degree is to develop an integer nonlinear optimizer capable of identifying these coefficients, ensuring that they are integers and suitable for hardware constraints. To achieve this goal, three activities were proposed, the third being the main focus: to build and implement this optimizer. The first two activities, which are optional, involve preparing and validating the theoretical and practical bases for this implementation. In addition, I submitted the master's proposal by email, and if necessary, remote meetings will be scheduled to discuss the next steps. This research strengthens my skills in integrated circuit design, hardware programming, and nonlinear optimization, consolidating my ability to develop innovative solutions to complex technical problems.",
    experience_gics: "Scientific Researcher - GICS, Curitiba, PR",
    experience_gics_description:
      "The Circuit and Integrated Systems Design Group (GICS) at UFPR aims to conduct research and development in radio frequency (RF), analog, mixed, and digital integrated circuits and systems, contributing both to scientific advancement in the field and to the training of highly specialized professionals. Among the projects developed by the group, the following stand out: The design of an integrated circuit for a truly random number generator based on ring oscillators. The modeling and design of a digital pre-distortion based on Memory Polynomial.",
    experience_lactec: "Engineering Intern - Curitiba, PR",
    experience_lactec_description:
      "During my internship, I assisted in the instrumentation of a wave energy generator development project. I collaborated in the development of sensors, such as the water level sensor, using capacitive technology for accurate measurements, and the flow sensor, implemented with an electric motor, to monitor and optimize system performance. This experience allowed me to improve my skills in electronics, microcontroller programming, and systems integration, contributing significantly to the advancement of the project.",
    experience_baja: "Extension Project - Baja SAE, UFPR",
    experience_baja_description:
      "I participated in an extension project focused on developing an off-road vehicle to apply the knowledge acquired in the classroom in practice. The project was divided into subsystems, each responsible for a stage of the car's development. I worked on the electrical subsystem, responsible for testing and validating the other subsystems, in addition to designing the wiring harness, representing the vehicle's electrical system. In this project, I had my first contact with practical electronics, involving PCB design and firmware programming. I also developed skills in 3D modeling using Catia software for the design of the wiring harness. During my time on the project, we achieved the following rankings in the Baja SAE competitions: 2019 Southern Regional: 1st place in electrical design; 2020 National: 11th place in electrical design; 2020 Southern Regional: 2nd place in electrical design In the Baja SAE BRAZIL competition, students form teams to represent their higher education institution, participating in annual comparative evaluations of their projects. In Brazil, the national stage is called the Baja SAE BRAZIL Competition, and the regional stages include the South, Southeast, and Northeast.",
    experience_PET: "Extension Project - PET, UFPR",
    experience_PET_description:
      "The Tutorial Education Program (PET) is fundamentally committed to improving undergraduate courses. I actively participated in the following projects: IoPET: a project focused on the development of activities related to the Internet of Things (IoT), software programming, and firmware. BigPET: a project involving the study of machine learning and the development of proposals and challenges in this area. I was the leader of this project. PET3D: a project aimed at familiarizing students with design, modeling, and 3D printing tools, in which I also served as leader. In addition, I contributed by organizing courses during the academic week and served as a teaching assistant in the subjects of Digital Electronics and Microelectronics.",
    project_DPD: "Digital Pré Distorsor",
    project_DPD_description:
      "This project consists of implementing a digital predistortion (DPD) in VHDL based on a polynomial with memory to compensate for nonlinearities in radio frequency power amplifiers (PA), aiming at energy efficiency in wireless communications such as IoT. Initially modeled in Python with a second-degree polynomial and WCDMA signal, achieving NMSE of -23.57 dB in floating point and optimized for 8-bit fixed point. Implemented in FPGA Virtex5 XC5VLX50T, using 150 registers, 692 LUTs, and 4 DSP48E, operating at 61.5 MHz. Article available at the following link: <a href='" +
      GLOBAL_VARS.dpdUrl +
      "' class='text-blue-400 hover:underline'>article</a>!",
    projects_title: "Projects",
    project_assistant: "Multimodal Virtual Assistant",
    project_assistant_description:
      "A virtual assistant that understands and processes multiple forms of input, including text, voice, and gestures.",
    project_lock: "Smart Electronic Lock",
    project_lock_description:
      "This project consists of an IoT (Internet of Things)-based smart electronic lock designed for remote access control. The system uses an ESP-01 module (based on ESP8266) as its main connectivity component, which communicates via Wi-Fi and receives commands from an MQTT server implemented with the Mosquitto broker. This allows the lock to be activated securely and remotely, for example, through mobile applications or integrations with virtual assistants. The physical structure of the lock was modeled in Autodesk Fusion 360 software, ensuring a precise and customized design. The components were manufactured using 3D printing, resulting in a robust and compact protective case that houses the locking mechanism, the ESP-01, and other electronic elements such as relays and sensors. The project emphasizes simplicity, low cost, and scalability, ideal for residential or commercial security automation applications.",
    project_trng: "TRNG Integrated Circuit",
    project_trng_description:
      " This project consists of the design of a dedicated integrated circuit for a TRNG based on oscillator rings, developed in 130 nm BiCMOS 8HP technology. The generator uses 20 oscillator rings (four per stage), each with three inverter gates, operating at a maximum frequency of 200 MHz. The source of entropy is the jitter in the gate delays, ensuring true randomness. Initially implemented in FPGA and described in VHDL, the design followed the VLSI flow with Cadence tools (NCLaunch, Genus, Innovus), resulting in 53 logic cells, an area of 653 µm², and power consumption of 32 µW. The generated sequences were validated by the NIST Test Suite, making it suitable for secure cryptographic applications. Article available at the following link: <a href='" +
      GLOBAL_VARS.trngUrl +
      "' class='text-blue-400 hover:underline'>Article</a>!",
    project_fake_news: "Fake News Detector",
    project_fake_news_description:
      "This project developed a fake news detector based on machine learning, trained with a large collection of real and fake texts. Using lemmatization techniques, the system processes and analyzes content to identify patterns that distinguish real news from fake news, offering high accuracy in classification.",
    projects_invite:
      'Want to know more about my projects? Visit my <a href="' +
      GLOBAL_VARS.LinkedinUrl +
      '" class="text-blue-400 hover:underline">LinkedIn</a> and <a href="' +
      GLOBAL_VARS.LattesUrl +
      '" class="text-blue-400 hover:underline">Lattes</a>!',
    skills_title: "Technical Skills",
    skills_programming: "Programming Languages",
    skills_programming_list: "Python, C, C++, Java, JavaScript, HTML/CSS",
    skills_circuits: "Circuit Design",
    skills_circuits_list: "Cadence, ADS, Altium Designer, Proteus",
    skills_3d: "3D Modeling",
    skills_3d_list: "SolidWorks, Fusion 360, Catia",
    skills_frameworks: "Frameworks",
    skills_frameworks_list: "OpenCV, FastAPI, LangChain",
    skills_databases: "Databases",
    skills_databases_list: "SQL, AWS integration",
    skills_others: "Others",
    skills_others_list:
      "Web development, circuit simulation, communication, time management",
    contact_title: "Connect with Me",
    contact_lattes: "Lattes Profile",
    contact_linkedin: "LinkedIn Profile",
    contact_phone: "Phone: (41) 98826-7727",
    footer: "© 2025 Leonardo Santos. All rights reserved.",
    curriculo_pt: "Resume in Portuguese",
    curriculo_en: "Resume in English",
    curriculo_es: "Resume in Spanish",
    nav_home: "Home",
    nav_about: "About",
    nav_education: "Education",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",
    portifolio_title: "Resume of Leonardo Santos",
  },
  es: {
    home: "Inicio",
    about: "Sobre Mí",
    tools: "Herramientas & Lenguajes",
    education: "Formación",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    hero_subtitle:
      "Ingeniero de Sistemas Embebidos, Firmware, IoT y Ciencia de Datos",
    contact_button: "Contacta Conmigo",
    about_title: "Sobre Mí",
    about_text:
      "Soy Leonardo Santos, un ingeniero eléctrico apasionado por la tecnología y la innovación. Mi trayectoria combina experiencias académicas, profesionales y proyectos personales desafiantes. Durante mi carrera universitaria, fui monitor de Electrónica Digital y Microelectrónica, asistí en un curso de Python para Ingeniería Química y organicé la Semana de Actualización Académica de Ingeniería Eléctrica (Seatel). En el Programa de Educación Tutorial (PET), lideré proyectos como IoPET (IoT y firmware), BigPET (aprendizaje automático) y PET3D (diseño e impresión 3D). Participé en un proyecto de vehículo todoterreno, desarrollando el subsistema eléctrico, con logros como el 1er lugar en el proyecto eléctrico en el Regional Sur 2019, 11º lugar nacional en el Baja SAE 2020 y 2º lugar en el Regional Sur 2020. Actualmente, desarrollo firmware en C y C++ para máquinas agrícolas, optimizo análisis de datos espaciales con algoritmos de ciencia de datos e integro sistemas back-end y front-end. En mis proyectos personales, construí un servidor doméstico con Proxmox, Tailscale VPN y máquinas virtuales ejecutando OpenWebUI, TrueNAS y otros servicios para IA y almacenamiento seguro. ¡Explora mi portafolio para saber más!",
    education_title: "Formación Académica",
    education_ufpr: "Ingeniería Eléctrica - UFPR, Curitiba, PR",
    education_bachelor: "Bacharelado",
    education_master: "Mestrado",
    education_bachelor_description:
      "Durante mi grado, me sumergí en el universo de la ingeniería eléctrica, desarrollando habilidades sólidas en proyectos de circuitos eléctricos para sistemas embebidos y residenciales. Mi pasión por la tecnología me llevó a dominar la programación en C++ y el desarrollo de firmware para microprocesadores, creando soluciones eficientes e innovadoras. Como parte de mi Trabajo de Conclusión de Curso (TCC), diseñé un circuito integrado e implementé un predistorsionador digital basado en polinomio de memoria, enfrentando desafíos técnicos que reforzaron mi capacidad para resolver problemas complejos. Además de las asignaturas obligatorias, busqué electivas que ampliaron mi horizonte técnico, como aprendizaje automático con Python, bases de datos con SQL y desarrollo para Android. Estas experiencias me proporcionaron una visión integral, permitiéndome actuar en proyectos multidisciplinarios con confianza. Participé activamente en proyectos de extensión, aplicando conocimientos teóricos en iniciativas prácticas que impactaron comunidades académicas y locales. Mi dedicación también se reflejó en presentaciones de proyectos en seminarios y eventos institucionales, donde perfeccioné mi habilidad para comunicar ideas técnicas de forma clara y atractiva.",
    education_master_description:
      "Actualmente, estoy cursando un máster con enfoque en circuitos integrados, específicamente en el desarrollo de predistorsionadores digitales (DPDs) para sistemas de comunicación. Continuando con mi Trabajo de Conclusión de Curso (TCC), mi investigación propone avances en la identificación de coeficientes para un predistorsionador digital basado en polinomio de memoria (MP), considerando las restricciones de implementación en FPGA. Esto incluye manipular solo números enteros, usar sumadores y multiplicadores de dos entradas, y mantener la misma cantidad de bits en la entrada y salida de los multiplicadores, con la eliminación de la mitad de los bits después de cada multiplicación, una operación no lineal. En mi TCC, el código de validación usaba coeficientes previamente conocidos y replicaba operaciones de FPGA. Ahora, el desafío central del máster es desarrollar un optimizador no lineal entero capaz de identificar esos coeficientes, garantizando que sean números enteros y adecuados a las restricciones de hardware. Para alcanzar este objetivo, se propusieron tres actividades, siendo la tercera el enfoque principal: construir e implementar este optimizador. Las dos primeras actividades, opcionales, involucran la preparación y validación de las bases teóricas y prácticas para esta implementación. Además, presenté la propuesta del máster por correo electrónico y, si es necesario, se programarán reuniones remotas para discutir los próximos pasos. Esta investigación fortalece mis competencias en diseño de circuitos integrados, programación para hardware y optimización no lineal, consolidando mi capacidad para desarrollar soluciones innovadoras para problemas técnicos complejos.",
    experience_gics: "Investigador Científico - GICS, Curitiba, PR",
    experience_gics_description:
      "El Grupo de Concepción de Circuitos y Sistemas Integrados (GICS) de la UFPR tiene como objetivo actuar en la investigación y desarrollo de circuitos y sistemas integrados de radiofrecuencia (RF), analógicos, mixtos y digitales, contribuyendo tanto al avance científico del área como a la formación de profesionales altamente especializados. Entre los proyectos desarrollados por el grupo, destacan: El diseño de un circuito integrado de un generador de números verdaderamente aleatorios basado en osciladores en anillo. La modelización y diseño de un predistorsionador digital basado en el Polinomio de Memoria.",
    experience_lactec: "Pasante de Ingeniería - Curitiba, PR",
    experience_lactec_description:
      "Durante la pasantía, asistí en la instrumentación del proyecto de desarrollo de un generador de energía undimotriz. Colaboré en el desarrollo de sensores, como el sensor de nivel de agua, utilizando tecnología capacitiva para mediciones precisas, y el sensor de flujo, implementado con un motor eléctrico, para monitorear y optimizar el rendimiento del sistema. Esta experiencia me permitió perfeccionar habilidades en electrónica, programación de microcontroladores e integración de sistemas, contribuyendo significativamente al avance del proyecto.",
    experience_baja: "Proyecto de Extensión - Baja SAE, UFPR",
    experience_baja_description:
      "Participé en un proyecto de extensión enfocado en el desarrollo de un vehículo todoterreno para aplicar, en la práctica, el conocimiento adquirido en el aula. El proyecto se dividía en subsistemas, cada uno responsable de una etapa del desarrollo del vehículo. Actué en el subsistema eléctrico, encargado de los ensayos y validación de los demás subsistemas, además del diseño del arnés eléctrico, representando el sistema eléctrico del vehículo. En este proyecto, tuve mi primer contacto con la electrónica práctica, involucrando diseño de PCBs y programación de firmware. También desarrollé habilidades en modelado 3D utilizando el software Catia para el diseño del arnés eléctrico. Durante el tiempo en el proyecto, alcanzamos las siguientes posiciones en las competiciones Baja SAE: Regional Sur 2019: 1er lugar en proyecto eléctrico; Nacional 2020: 11º lugar en proyecto eléctrico; Regional Sur 2020: 2º lugar en proyecto eléctrico. En la competición Baja SAE BRASIL, los estudiantes forman equipos para representar a su institución de enseñanza superior, participando en evaluaciones anuales comparativas de sus proyectos. En Brasil, la etapa nacional se llama Competencia Baja SAE BRASIL, y las regionales incluyen las etapas Sur, Sudeste y Nordeste.",
    experience_PET: "Proyecto de Extensión Tutorial - PET, UFPR",
    experience_PET_description:
      "El Programa de Educación Tutorial (PET) tiene como compromiso fundamental mejorar los cursos de grado. Participé activamente en los siguientes proyectos: IoPET: proyecto enfocado en el desarrollo de actividades relacionadas con el Internet de las Cosas (IoT), programación de software y firmware. BigPET: proyecto que involucra el estudio de aprendizaje automático y el desarrollo de propuestas y desafíos en esa área. Fui el líder de este proyecto. PET3D: proyecto orientado a la familiarización con herramientas de diseño, modelado e impresión 3D, en el que también ejercí la función de líder. Además, contribuí organizando cursos durante la semana académica y actué como monitor en las asignaturas de Electrónica Digital y Microelectrónica.",
    experience_title: "Experiencia Profesional",
    experience_iotag: "Desarrollador de Software - IOTAG, Curitiba, PR",
    experience_iotag_description:"En la empresa, nuestro objetivo es desarrollar soluciones innovadoras en agricultura de precisión, centrándonos en firmware, algoritmos de aprendizaje automático y sistemas integrados, con el fin de aumentar la eficiencia y la automatización en el sector agrícola. Participé activamente en la implementación de firmware en C y C++ para la creación de la interfaz del terminal virtual para maquinaria agrícola, además de desarrollar algoritmos de ciencia de datos aplicados a datos espaciales y recopilación de datos de equipos. También creé servicios que integran bases de datos y plataformas de computación en la nube, como AWS, garantizando la escalabilidad y la eficiencia de las soluciones desarrolladas.",
    projects_title: "Proyectos",
    project_DPD: "Predistorsionador Digital",
    project_DPD_description:
      "Este proyecto consiste en la implementación de un predistorsionador digital (DPD) en VHDL basado en polinomios con memoria para compensar las no linealidades en los amplificadores de potencia (PA) de radiofrecuencia, con el objetivo de lograr la eficiencia energética en las comunicaciones inalámbricas como el IoT. Modelado inicialmente en Python con polinomio de segundo grado y señal WCDMA, alcanzando un NMSE de -23,57 dB en coma flotante y optimizado para coma fija con 8 bits. Implementado en FPGA Virtex5 XC5VLX50T, utilizando 150 registros, 692 LUT y 4 DSP48E, operando a 61,5 MHz. Artículo disponible en el siguiente enlace: <a href='" +
      GLOBAL_VARS.dpdUrl +
      "' class='text-blue-400 hover:underline'>artículo</a>!",
    project_assistant: "Asistente Virtual Multimodal",
    project_assistant_description:
      "Un asistente virtual que entiende y procesa múltiples formas de entrada, incluyendo texto, voz y gestos.",
    project_lock: "Cerradura Electrónica Inteligente",
    project_lock_description:
      "Este proyecto consiste en una cerradura electrónica inteligente basada en IoT (Internet de las cosas), diseñada para el control remoto del acceso. El sistema utiliza un módulo ESP-01 (basado en ESP8266) como componente principal de conectividad, que se comunica a través de Wi-Fi y recibe comandos de un servidor MQTT implementado con el bróker Mosquitto. Esto permite accionar la cerradura de forma segura y remota, por ejemplo, a través de aplicaciones móviles o integraciones con asistentes virtuales. La estructura física de la cerradura se modeló en el software Autodesk Fusion 360, lo que garantiza un diseño preciso y personalizado. Los componentes se fabricaron mediante impresión 3D, lo que dio como resultado una caja protectora robusta y compacta que alberga el mecanismo de cierre, el ESP-01 y otros elementos electrónicos como relés y sensores. El proyecto hace hincapié en la simplicidad, el bajo costo y la escalabilidad, ideal para aplicaciones residenciales o comerciales de automatización de seguridad.",
    project_trng: "Circuito Integrado TRNG",
    project_trng_description:
      " Este proyecto consiste en el diseño de un circuito integrado dedicado para un TRNG basado en anillos osciladores, desarrollado con tecnología BiCMOS 8HP de 130 nm. El generador utiliza 20 anillos osciladores (cuatro por etapa), cada uno con 3 puertas inversoras, que operan a una frecuencia máxima de 200 MHz. La fuente de entropía es la fluctuación en los retrasos de las puertas, lo que garantiza una verdadera aleatoriedad. Implementado inicialmente en FPGA y descrito en VHDL, el diseño siguió el flujo VLSI con herramientas Cadence (NCLaunch, Genus, Innovus), lo que dio como resultado 53 celdas lógicas, un área de 653 µm² y un consumo de energía de 32 µW. Las secuencias generadas fueron validadas por NIST Test Suite, lo que lo hace adecuado para aplicaciones criptográficas seguras. Artículo disponible en el siguiente enlace: <a href='" +
      GLOBAL_VARS.trngUrl +
      "' class='text-blue-400 hover:underline'>Artículo</a>!",
    project_fake_news: "Detector de Fake News",
    project_fake_news_description:
      "Este proyecto desarrolló un detector de noticias falsas basado en el aprendizaje automático, entrenado con una amplia colección de textos reales y falsos. Utilizando técnicas de lematización, el sistema procesa y analiza el contenido para identificar patrones que distinguen las noticias verdaderas de las falsas, ofreciendo una alta precisión en la clasificación.",
    projects_invite:
      "¿Quieres saber más sobre mis proyectos? ¡Visita mi <a href='" +
      GLOBAL_VARS.LinkedinUrl +
      "' class='text-blue-400 hover:underline'>LinkedIn</a> y <a href='" +
      GLOBAL_VARS.LattesUrl +
      "' class='text-blue-400 hover:underline'>Lattes</a>!",
    skills_title: "Habilidades Técnicas",
    skills_programming: "Lenguajes de Programación",
    skills_programming_list: "Python, C, C++, Java, JavaScript, HTML/CSS",
    skills_circuits: "Diseño de Circuitos",
    skills_circuits_list: "Cadence, ADS, Altium Designer, Proteus",
    skills_3d: "Modelado 3D",
    skills_3d_list: "SolidWorks, Fusion 360, Catia",
    skills_frameworks: "Frameworks",
    skills_frameworks_list: "OpenCV, FastAPI, LangChain",
    skills_databases: "Bases de Datos",
    skills_databases_list: "SQL, integración con AWS",
    skills_others: "Otros",
    skills_others_list:
      "Desarrollo web, simulación de circuitos, comunicación, gestión del tiempo",
    contact_title: "Conéctate Conmigo",
    contact_lattes: "Perfil Lattes",
    contact_linkedin: "Perfil LinkedIn",
    contact_phone: "Teléfono: (41) 98826-7727",
    footer: "© 2025 Leonardo Santos. Todos los derechos reservados.",
    curriculo_pt: "Currículum en Portugués",
    curriculo_en: "Currículum en Inglés",
    curriculo_es: "Currículum en Español",
    nav_home: "Inicio",
    nav_about: "Sobre Mí",
    nav_education: "Formación",
    nav_experience: "Experiencia",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    portifolio_title: "Portafolio de Leonardo Santos",
  },
};
