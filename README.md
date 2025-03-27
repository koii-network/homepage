# Koii Network Homepage

## 🌊 Project Overview

Koii Network's homepage is a modern, responsive web application built to showcase the decentralized computing platform's vision, features, and ecosystem. The website serves as a comprehensive resource for developers, founders, and users interested in learning about Koii's innovative blockchain and web3 technologies.

Key highlights:
- Informative multi-page website covering different aspects of the Koii Network
- Interactive UI showcasing technology, earn opportunities, and ecosystem features
- Responsive design optimized for desktop and mobile experiences

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or Yarn

### Installation Steps
1. Clone the repository
```bash
git clone https://github.com/koii-network/homepage.git
cd homepage
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file (if needed for future environment-specific configurations)
```bash
touch .env
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## 🌐 Deployment

### Production Build
```bash
npm run build
# or 
yarn build
```

### Deployment Options
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Direct deployment support
- **Docker**: Custom containerization possible

### Generating Sitemap
```bash
npm run sitemap
# or
yarn sitemap
```

## 📂 Project Structure
```
├── components/       # Reusable React components
├── config/           # Configuration files
├── pages/            # Next.js page components
├── public/           # Static assets
├── styles/           # Global and module CSS/SCSS
└── types/            # TypeScript type definitions
```

## 🛠 Technologies Used
- **Framework**: Next.js 12
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS
  - SCSS
  - Emotion
- **Animation**: 
  - Framer Motion
  - React Spring
- **UI Components**: Material-UI
- **Development Tools**:
  - ESLint
  - Prettier
  - Husky (Git hooks)

## ✨ Feature Highlights
- Responsive, mobile-friendly design
- Multi-page navigation
- Interactive sections for:
  - About Koii Network
  - Earn opportunities
  - Founders program
  - Node capabilities
- Sitemap generation
- Performance optimized

## 🔧 Configuration
- Tailwind configuration in `tailwind.config.js`
- TypeScript configuration in `tsconfig.json`
- ESLint and Prettier configurations included

## 📄 License
This project is currently private. All rights reserved by Koii Network.

## 🤝 Contributing
Please read the contributing guidelines before submitting pull requests.

## 📞 Support
For issues or questions, please [open an issue](https://github.com/koii-network/homepage/issues) on GitHub.