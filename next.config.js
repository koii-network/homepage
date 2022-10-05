/** @type {import('next').NextConfig} */

const blog = "https://blog.koii.network/";
const docs = "https://docs.koii.network/";
const jobsForm = "/career";
const faucetForm = "https://share.hsforms.com/1C0zJsC7tTYe4s1fhtxE3-Qc20dg";
const creatorStudioForm =
  "https://share.hsforms.com/1U0Fat-BvSiK7JJ9IRCQz4Qc20dg";
const grantForm = "https://share.hsforms.com/1ATBOuLeqSCa-WCEBU8Ky0Ac20dg";
const partnershipForm =
  "https://share.hsforms.com/1_HHcmivaTDaI9O1gX3DZngc20dg";
const nodePreregisterForm =
  "https://share.hsforms.com/1kLtk8rfURZ-HY2xnKRTfCgc20dg";
const supportForm = "https://share.hsforms.com/1Nmy8p6zWSN2J2skJn5EcOQc20dg";
const investorForm = "https://share.hsforms.com/14iIe1UZZTUqF-dPNONXc0Qc20dg";

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return redirectConfig.map((config) => ({ ...config, permanent: true }));
  },
};

module.exports = nextConfig;

const redirectConfig = [
  {
    source: "/jobs/blockchaindevlead.html",
    destination: jobsForm,
  },
  {
    source: "/jobs/blockchainprotocoldev.html",
    destination: jobsForm,
  },
  {
    source: "/jobs/communitymanager.html",
    destination: jobsForm,
  },
  {
    source: "/jobs/graphicdesigner.html",
    destination: jobsForm,
  },
  {
    source: "/jobs/marketinggrowthmanager.html",
    destination: jobsForm,
  },
  {
    source: "/news/Koiisaprotocol.html",
    destination: blog,
  },
  {
    source: "/news/yieldfarming.html",
    destination: blog,
  },
  {
    source: "/news/koiprincipled.html",
    destination: blog,
  },
  {
    source: "/news/thekoiieco.html",
    destination: blog,
  },
  {
    source: "/news/welcometokoi.html",
    destination: blog,
  },
  {
    source: "/news/freekoi.html",
    destination: blog,
  },
  {
    source: "/news/getfreear.html",
    destination: blog,
  },
  {
    source: "/news/maythe4th.html",
    destination: blog,
  },
  {
    source: "/news/thesnowdenproblem.html",
    destination: blog,
  },
  {
    source: "/news/inthenodekoi.html",
    destination: blog,
  },
  {
    source: "/news/iamthepruduct.html",
    destination: blog,
  },
  {
    source: "/news/Backupopensea.html",
    destination: blog,
  },
  {
    source: "/news/almostinfinite.html",
    destination: blog,
  },
  {
    source: "/news/catchupwithkoi.html",
    destination: blog,
  },
  {
    source: "/news/CoinListseed.html",
    destination: blog,
  },
  {
    source: "/news/theultimatenonfungible.html",
    destination: blog,
  },
  {
    source: "/news/whatistheattentioneconomy.html",
    destination: blog,
  },
  {
    source: "/news/introducingfinnie.html",
    destination: blog,
  },
  {
    source: "/news/massiverebrand.html",
    destination: blog,
  },
  {
    source: "/news/communitycall.html",
    destination: blog,
  },
  {
    source: "/news/censorshipresistance.html",
    destination: blog,
  },
  {
    source: "/learn/about.html",
    destination: docs,
  },
  { source: "/form/career", destination: jobsForm },
  { source: "/earn/careers", destination: jobsForm },
  {
    source: "/connect.html",
    destination: "https://discord.gg/koii",
  },
  {
    source: "/form/creator-studio",
    destination: creatorStudioForm,
  },
  {
    source: "/earn/creators",
    destination: "/#ways-to-earn",
  },
  {
    source: "/earn/developers",
    destination:
      "https://docs.koii.network/build-dapps-with-koii/welcome-to-koii-x",
  },
  {
    source: "/downloads",
    destination: "/",
  },
  {
    source: "/ethdenver",
    destination:
      "https://docs.koii.network/build-dapps-with-koii/welcome-to-koii-x",
  },
  {
    source: "/earn/everyone.html",
    destination: "/#ways-to-earn",
  },
  {
    source: "/explore.html",
    destination:
      "https://docs.koii.network/build-dapps-with-koii/welcome-to-koii-x",
  },
  {
    source: "/faq",
    destination: docs,
  },
  { source: "/form/faucet", destination: faucetForm },
  {
    source: "/framework.html",
    destination:
      "https://docs.koii.network/build-dapps-with-koii/welcome-to-koii-x",
  },
  {
    source: "/getFinnie",
    destination:
      "https://chrome.google.com/webstore/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj",
  },
  { source: "/form/grant", destination: grantForm },
  {
    source: "/form/handbook",
    destination:
      "https://docs.koii.network/microservices-and-tasks/what-are-tasks",
  },
  {
    source: "/DID",
    destination:
      "https://chrome.google.com/webstore/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj",
  },
  {
    source: "/form/investor",
    destination: investorForm,
  },
  {
    source: "/investors.html",
    destination: "/#partners",
  },
  { source: "/jobs", destination: jobsForm },
  {
    source: "/koii",
    destination: "/",
  },
  {
    source: "/learn/mission.html",
    destination: docs,
  },
  {
    source: "/learn/news",
    destination: blog,
  },
  {
    source: "/form/partnership",
    destination: partnershipForm,
  },
  {
    source: "/form/pre-register",
    destination: nodePreregisterForm,
  },
  {
    source: "/resources",
    destination: docs,
  },
  {
    source: "/earn/everyone",
    destination: "/#ways-to-earn",
  },
  {
    source: "/services",
    destination: docs,
  },
  {
    source: "/form/support",
    destination: supportForm,
  },
  {
    source: "/team",
    destination: "/#partners",
  },
  {
    source: "/Gradual-Consensus-1.pdf",
    destination:
      "https://docs.koii.network/microservices-and-tasks/gradual-consensus",
  },
  {
    source: "/Re-brand_release_1.pdf",
    destination:
      "https://blog.koii.network/Introducing-Finnie-the-Infinite-Fis/",
  },
  {
    source: "/gradual-consensus.pdf",
    destination:
      "https://docs.koii.network/microservices-and-tasks/gradual-consensus",
  },
  {
    source: "/koi-ecosystem.pdf",
    destination: "https://docs.koii.network/#what-is-koii",
  },
  {
    source: "/koi-primer.pdf",
    destination: docs,
  },
  {
    source: "/koi-protocol.pdf",
    destination: docs,
  },
  {
    source: "/koii-protocol.pdf",
    destination: docs,
  },
  {
    source: "/lightpaper.pdf",
    destination: docs,
  },
  {
    source: "/proofs-of-real-traffic.pdf",
    destination: "https://docs.koii.network/#the-koii-token",
  },
  {
    source: "/summary.pdf",
    destination: docs,
  },
  {
    source: "/tokenomics.pdf",
    destination: docs,
  },
  {
    source: "/universal-content-registry.pdf",
    destination: "https://docs.koii.network/earning-koii/registering-content",
  },
  {
    source: "/whitepaper-b.pdf",
    destination: docs,
  },
  {
    source: "/whitepaper.pdf",
    destination: docs,
  },
  {
    source: "/one-pager",
    destination: "https://docsend.com/view/imrrbbnprzxxwrju",
  },
];
