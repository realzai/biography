export interface Credential {
  name: string;
  shortName: string;
  mark: string;
  type: string;
  title: string;
  issued: string;
  logoSrc: string;
  logoClassName: string;
  credentialUrl: string;
  www: boolean;
  resume: boolean;
}

const credentials: Credential[] = [
  {
    name: "Harvard University",
    shortName: "Harvard",
    mark: "HU",
    type: "Certification",
    title: "Leadership and Communication",
    issued: "Apr 2025",
    logoSrc: "/logos/credentials/harvard-crest.svg",
    logoClassName: "h-10 w-10 sm:h-12 sm:w-12",
    credentialUrl:
      "https://credentials.edx.org/credentials/195da1c3a0264f63ab855f8d7cd16ab1/",
    www: true,
    resume: true,
  },
  {
    name: "Google",
    shortName: "Google",
    mark: "G",
    type: "Specialization",
    title: "Google Data Analytics",
    issued: "May 2025",
    logoSrc: "/logos/credentials/google.svg",
    logoClassName: "h-7 w-auto sm:h-8",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/RWXGPCA2N3Z7",
    www: true,
    resume: true,
  },
  {
    name: "Yale University",
    shortName: "Yale",
    mark: "YU",
    type: "Course",
    title: "Rocket Science for Everyone",
    issued: "Jun 2025",
    logoSrc: "/logos/credentials/yale.svg",
    logoClassName: "h-8 w-auto sm:h-9",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/X6JZHIKIBR2X",
    www: true,
    resume: true,
  },
  {
    name: "Meta",
    shortName: "Meta",
    mark: "M",
    type: "Specialization",
    title: "Meta Back-End Developer",
    issued: "May 2025",
    logoSrc: "/logos/credentials/meta.svg",
    logoClassName: "h-7 w-auto sm:h-8",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/QDC7Y240BP4U",
    www: true,
    resume: true,
  },
  {
    name: "Johns Hopkins University",
    shortName: "Johns Hopkins",
    mark: "JH",
    type: "Specialization",
    title: "Applied Machine Learning",
    issued: "Apr 2025",
    logoSrc: "/logos/credentials/johns-hopkins.png",
    logoClassName: "h-8 w-auto sm:h-9",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/4SYL7L0X1424",
    www: true,
    resume: true,
  },
  {
    name: "Duke University",
    shortName: "Duke",
    mark: "DU",
    type: "Specialization",
    title: "Applied Python Data Engineering",
    issued: "Apr 2025",
    logoSrc: "/logos/credentials/duke.svg",
    logoClassName: "h-8 w-auto sm:h-9",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/C5IW9QFDTKSH",
    www: true,
    resume: true,
  },
];

export default credentials;
