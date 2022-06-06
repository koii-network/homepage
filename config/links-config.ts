export enum FormLinks {
  PARTNERSHIP = "https://share.hsforms.com/1_HHcmivaTDaI9O1gX3DZngc20dg",
  INVESTOR = "https://share.hsforms.com/14iIe1UZZTUqF-dPNONXc0Qc20dg",
  GRANT = "https://share.hsforms.com/1ATBOuLeqSCa-WCEBU8Ky0Ac20dg",
  PREREGISTER = "https://share.hsforms.com/1kLtk8rfURZ-HY2xnKRTfCgc20dg",
  JOBS = "https://share.hsforms.com/142u1Vp02TGuojOXCTUBGGQc20dg",
  SUPORT = "https://share.hsforms.com/1Nmy8p6zWSN2J2skJn5EcOQc20dg",
  FAUCET_SUPPORT = "https://share.hsforms.com/1C0zJsC7tTYe4s1fhtxE3-Qc20dg",
}

export const companyLinks = [
  { label: "About", url: "/" },
  { label: "Earn", url: "/" },
  { label: "Blog", url: "https://blog.koii.network" },
  { label: "Jobs", url: FormLinks.PREREGISTER },
  { label: "Developers Docs", url: "https://docs.koii.network" },
  { label: "Leaderboard", url: "https://koi.rocks/" },
  { label: "Support", url: FormLinks.SUPORT },
  // { label: "FAQ", url: "https://koii.network/faq" },
];

export const getInvolvedLinks = [
  { label: "Run a Node", url: FormLinks.PREREGISTER },
  { label: "Get Finnie", url: "https://koii.me/finnie" },
  { label: "Apply for a Grant", url: FormLinks.GRANT },
  { label: "Become a Partner", url: FormLinks.PARTNERSHIP },
  { label: "Join the Waitlist", url: FormLinks.INVESTOR },
  {
    label: "Content Collectives",
    url: "https://blog.koii.network/Content-Collective",
  },
];

export const getInTouchLinks = [
  { label: "hello@koii.network", url: "mailto:hello@koii.network" },
  { label: "press@koii.network", url: "mailto:press@koii.network" },
];
