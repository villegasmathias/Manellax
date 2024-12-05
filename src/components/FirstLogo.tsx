import Image from 'next/image';

export const FirstLogo = ({
  src = '/img/recorte_manellax.png',
  width = 250,
  height = 200,
  alt = 'Manellax',
}) => <Image src={src} width={width} height={height} alt={alt} />;
