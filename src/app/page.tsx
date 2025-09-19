"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

const navLinks = [
  { id: 'hero', name: 'MemeTech' },
  { id: 'about', name: 'About' },
  { id: 'how-to-buy', name: 'How to Buy' },
  { id: 'tokenomics', name: 'Tokenomics' },
  { id: 'footer', name: 'Footer' },
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple navItems={navLinks} logoSrc="/images/logo.svg" logoAlt="MemeTech Logo" brandName="MemeTech" />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Introducing MemeTech Coin"
          subtitle="The future of meme currencies"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy"
          copiedText="Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="MemeTech Coin embraces the spirit of memes and technology, creating a vibrant and engaging ecosystem."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="reveal"
          steps={[
            { title: 'Step 1', description: 'Get your wallet ready!', image: '', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Purchase MemeTech Coin!', image: '', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Join the community!', image: '', position: 'right', isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="MemeTech Tokenomics"
          description="Transparent and accessible token distribution."
          tokenData={[
            { value: '1 Billion', description: 'Total Supply' },
            { value: '50%', description: 'Allocated for Community' },
            { value: '20%', description: 'Reserved for Development' },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MemeTech Logo"
          logoText="MemeTech"
          columns={[
            { items: [
              { label: 'Privacy Policy', onClick: () => console.log('Privacy Policy Clicked') },
            ] },
            { items: [
              { label: 'Terms & Conditions', onClick: () => console.log('Terms Clicked') },
            ] },
            { items: [
              { label: 'Contact', onClick: () => console.log('Contact Clicked') },
            ] },
          ]}
          copyrightText="© 2023 MemeTech. All rights reserved."
          onPrivacyClick={() => console.log('Privacy Policy Clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}