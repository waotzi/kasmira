import CardContent from './CardContent.tsx'

interface CardProps {
	title: string;
	key: string;
	image?: string;
	id: number;
  }
  
  export default function Card({ title, key, image, id }: CardProps) {
    return (
      <li class="link-card" tabIndex={id}>
        <div class="modal">
          <CardContent title={title} image={image} key={key} closeButton />
        </div>
        <div class="content">
          <CardContent title={title} image={image} key={key} />
        </div>
      </li>
    );
  }
  
  
  
  