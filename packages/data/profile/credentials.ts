export interface Credential {
  name: string;
  shortName: string;
  mark: string;
  type: string;
  logoSrc: string;
  logoClassName: string;
  credentialUrl: string;
}

const credentials: Credential[] = [
  {
    name: "Harvard University",
    shortName: "Harvard",
    mark: "HU",
    type: "Certification",
    logoSrc: "/logos/credentials/harvard-crest.svg",
    logoClassName: "h-10 w-10 sm:h-12 sm:w-12",
    credentialUrl:
      "https://credentials.edx.org/credentials/195da1c3a0264f63ab855f8d7cd16ab1/",
  },
  {
    name: "Google",
    shortName: "Google",
    mark: "G",
    type: "Certified",
    logoSrc: "/logos/credentials/google.svg",
    logoClassName: "h-7 w-auto sm:h-8",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/RWXGPCA2N3Z7",
  },
  {
    name: "Yale University",
    shortName: "Yale",
    mark: "YU",
    type: "Course",
    logoSrc: "/logos/credentials/yale.svg",
    logoClassName: "h-8 w-auto sm:h-9",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/X6JZHIKIBR2X",
  },
  {
    name: "Meta",
    shortName: "Meta",
    mark: "M",
    type: "Certified",
    logoSrc: "/logos/credentials/meta.svg",
    logoClassName: "h-7 w-auto sm:h-8",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/QDC7Y240BP4U",
  },
  {
    name: "Johns Hopkins University",
    shortName: "Johns Hopkins",
    mark: "JH",
    type: "Certification",
    logoSrc: "/logos/credentials/johns-hopkins.png",
    logoClassName: "h-8 w-auto sm:h-9",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/4SYL7L0X1424",
  },
  {
    name: "Duke University",
    shortName: "Duke",
    mark: "DU",
    type: "Certified",
    logoSrc: "/logos/credentials/duke.svg",
    logoClassName: "h-8 w-auto sm:h-9",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/C5IW9QFDTKSH",
  },
];

export default credentials;
