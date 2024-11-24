import localFont from 'next/font/local';

export const Oakes_Grotesk = localFont({
  src: [
    {
      path: "../../public/fonts/oakes-grotesk/oakes-grotesk-regular.ttf",
      weight: '400',
      style: 'normal',
    },
    {
      path: "../../public/fonts/oakes-grotesk/oakes-grotesk-medium.ttf",
      weight: '500',
      style: 'normal',
    },
    {
      path: "../../public/fonts/oakes-grotesk/oakes-grotesk-semi-bold.ttf",
      weight: '600',
      style: 'normal',
    },
    {
      path: "../../public/fonts/oakes-grotesk/oakes-grotesk-bold.ttf",
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-oakes-grotesk', 
  display: 'swap', 
});