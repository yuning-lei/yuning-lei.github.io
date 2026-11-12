/** Owner CV (20 October 2026), confirmed ORCID and official records; see docs/content-provenance.md. */
export const profile = {
  cvDate: '12 November 2026',
  cvDownload: '/files/yuning-lei-cv.pdf',
  orcid: { id: '0000-0003-0711-4476', href: 'https://orcid.org/0000-0003-0711-4476' },
  department: 'Department of Computing Science',
  group: 'Microrobotics and Control Engineering (AMiR)',
  email: 'y.lei@uol.de',
  address: ['Ammerländer Heerstraße 114–118', '26129 Oldenburg', 'Germany'],
  links: [
    { label: 'University profile', href: 'https://uol.de/en/computingscience/amir/people/dr-yuning-lei' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=Kl00YB0AAAAJ' },
    { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Yuning-Lei' },
    { label: 'SciProfiles', href: 'https://sciprofiles.com/profile/1614377' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuning-lei' },
  ],
  appointments: [
    {
      title: 'Research Associate', institution: 'University of Oldenburg', location: 'Oldenburg, Germany', period: 'April 2023 – present',
      details: ['Microrobotics and Control Engineering, Department of Computing Science.', 'Research project PI for LiCoVac (Liquid Metal Contact Angle Measurement in Vacuum).', 'Planning and management of international collaborative research and staff exchanges (EU-HORIZON-MSCA, DAAD-PPP).'],
    },
    {
      title: 'Research Engineer (Ingénieur d’étude)', institution: 'Université Bourgogne Franche-Comté', location: 'Besançon, France', period: 'October 2022 – March 2023',
      details: ['Département AS2M.'],
    },
    {
      title: 'Ph.D. Fellow', institution: 'FEMTO-ST Institute', location: 'Besançon, France', period: 'October 2019 – March 2023',
      details: ['Silica origami fabrication, robotic microassembly, characterization and actuation at the tip of an optical fiber in SEM.', 'Advisors: Cédric Clévy, Jean-Yves Rauch and Philippe Lutz.', 'Contributions to the COLAMIR and DyNaBot collaborative research projects.'],
    },
    {
      title: 'Teaching Assistant', institution: 'University of Franche-Comté', location: 'Besançon, France', period: 'October 2019 – March 2023',
      details: ['UFR de sciences et techniques.'],
    },
    {
      title: 'Research Assistant', institution: 'PRISME Laboratory', location: 'Orléans, France', period: 'March – September 2019',
      details: ['Data assimilation of parallel turbulent flows from experimental local measurements, using linearized Navier–Stokes equations and Kalman-filter-based feedback control.'],
    },
    {
      title: 'Research Assistant', institution: 'WILO Intec', location: 'Aubigny-sur-Nère, France', period: 'March 2016 – September 2017',
      details: ['Hydraulic testing of centrifugal pumps, measurement uncertainty analysis and development of an uncertainty-analysis tool.'],
    },
  ],
  education: [
    {
      title: 'Ph.D. in Engineering Science', institution: 'Université Bourgogne Franche-Comté', location: 'Besançon, France', period: 'October 2019 – March 2023',
      details: ['Dissertation: Nanorobotic Origami Unfolded at the Tip of Optical Fiber.', 'Defended on 24 March 2023 in Besançon.'],
    },
    {
      title: 'M.Sc. in Mechatronics, Autonomous, Robotics and Signal', institution: 'University of Orléans', location: 'Orléans, France', period: 'September 2017 – August 2019',
      details: ['Robotic vision, visual servoing, mobile-robot control, complex-system modeling and feedback control.'],
    },
    {
      title: 'B.Sc. in Expertise Environmental Measurements', institution: 'IUT de Bourges, University of Orléans', location: 'Bourges, France', period: 'September 2016 – August 2017',
      details: ['Environmental monitoring, physicochemical analysis, chromatography and spectrometry.'],
    },
    {
      title: 'University Technology Degree (DUT) in Physical Measurements', institution: 'IUT de Bourges, University of Orléans', location: 'Bourges, France', period: 'September 2014 – August 2016', details: [],
    },
    {
      title: 'First-year studies in Computer Science', institution: 'IUT de Lannion, University of Rennes', location: 'Lannion, France', period: 'September 2013 – June 2014',
      details: ['Completed the first year before switching to Physical Measurements.'],
    },
    {
      title: 'University Diploma (DU) — Preparation for Scientific and Technological Training', institution: 'IUT de Limoges, University of Limoges', location: 'Limoges, France', period: 'September 2012 – August 2013',
      details: ['Diplôme universitaire de préparation aux formations scientifiques et technologiques.'],
    },
  ],
  skills: [
    { title: 'SEM / FIB', description: 'Zeiss Auriga 60, Thermo Fisher APREO S, FEI Helios NanoLab, FEI Quanta 600 and Tescan Lyra2.' },
    { title: 'Microfabrication', description: 'Lithography, physical vapor deposition (PVD), wet etching and plasma etching (RIE/DRIE).' },
    { title: 'Characterization', description: 'Nanoindentation, interferometry and profilometry.' },
    { title: 'Robotics & computing', description: 'MATLAB/Simulink, LabVIEW, ROS, V-REP; C/C++, Java, Python, MATLAB and Visual Basic.' },
    { title: 'Design & simulation', description: 'SolidWorks, Creo, AutoCAD/Inventor, Blender, Inkscape, Alphacam; COMSOL and ANSYS.' },
  ],
  teaching: [
    { title: 'Force Sensing (Microrobotics I)', institution: 'AMiR, University of Oldenburg', period: 'Spring 2024–2026', format: 'Lecture', workload: '1.5 h × 1 session' },
    { title: 'Scanning Probe Microscope (Microrobotics II)', institution: 'AMiR, University of Oldenburg', period: 'Spring 2024–2026', format: 'Lecture', workload: '1.5 h × 1 session' },
    { title: 'AFM in SEM (Microrobotics II)', institution: 'AMiR, University of Oldenburg', period: 'Spring 2024–2026', format: 'Lecture', workload: '1.5 h × 1 session' },
    { title: 'Automated Nanohandling (Microrobotics II)', institution: 'AMiR, University of Oldenburg', period: 'Spring 2023', format: 'Lectures', workload: '1.5 h × 2 sessions' },
    { title: 'Digital Control', institution: 'Master MIR, UFR-ST', period: 'Fall 2021 & 2022', format: 'Tutorials', workload: '4 h × 5 sessions' },
    { title: 'Automation and Control', institution: 'ISIFC, UFC', period: 'Fall 2020 & 2021', format: 'Tutorials', workload: '4 h × 8 sessions' },
    { title: 'Servo-control with MATLAB and Simulink', institution: 'Master SAPIAA, UFR-ST', period: 'Fall 2020 & 2021', format: 'Tutorials', workload: '1.5 h × 4 sessions' },
  ],
  awards: [
    { title: '“Micron d’Or” Award', event: 'Salon Micronora 2022, Association Micronora', period: 'September 2022' },
    { title: '3rd Award — Photo Contest', event: 'CAZAC Day 2022, Carl Zeiss Application Community', period: 'March 2022' },
    { title: 'First Prize — “Breakthrough in Science” Award', event: 'Ph.D. Student Poster Competition, FEMTO-ST Institute', period: 'July 2020' },
    { title: 'French Government Doctoral Fellowship (36 months)', event: 'Ministère de l’Enseignement supérieur, de la Recherche et de l’Innovation', period: 'October 2019 – October 2022' },
  ],
  conferenceContributions: [
    {
      title: 'Nanorobotics Polyarticulated Structure with Integrated Actuator at Tapered Optical Fiber Tip',
      authors: ['Yuning Lei', 'Cédric Clévy', 'Jean-Yves Rauch', 'Philippe Lutz'],
      venue: 'MARSS 2022', year: 2022, location: 'Toronto, Canada',
      description: 'Listed in the official technical programme for 28 July 2022, in the Design and Fabrication (IV) session.',
      programme: 'https://marss-conference.org/blog/wp-content/uploads/2022/07/MARSS2022_Technical-Program_website_FINAL-VERSION____10.pdf',
      sources: ['owner-orcid-2026-11-12', 'ORCID work 142749297', 'MARSS 2022 official technical programme, page 21'],
    },
  ],
  service: [
    { title: 'MARSS Community', description: 'Publicity Chair and Program Committee member', period: 'Since November 2020' },
    { title: 'IEEE Robotics and Automation Society', description: 'Member', period: 'Since February 2021' },
    { title: 'SAGIP', description: 'Member', period: 'Since November 2020' },
    { title: 'GDR Robotique', description: 'Member', period: 'Since September 2017' },
    { title: 'GDR MACS', description: 'Member', period: 'Since November 2020' },
  ],
  languages: [
    { name: 'Chinese', description: 'Native' },
    { name: 'French', description: 'Advanced' },
    { name: 'English', description: 'B1; TOEIC 720/990 (December 2017)' },
    { name: 'German', description: 'Elementary' },
  ],
  qualification: { title: 'CNU qualification, Section 61', description: 'Qualification for Associate Professor positions in French universities.', period: 'March 2026' },
} as const;
