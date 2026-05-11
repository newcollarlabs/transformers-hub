import { useCachedImage } from '../hooks/useCachedImage';

interface BotImageProps {
  botId: string;
  initialUrl: string;
  prompt: string;
  alt: string;
  className?: string;
}

export default function BotImage({ botId, initialUrl, prompt, alt, className }: BotImageProps) {
  const { imageUrl } = useCachedImage(botId, initialUrl, prompt);
  return <img src={imageUrl} alt={alt} className={className} />;
}
