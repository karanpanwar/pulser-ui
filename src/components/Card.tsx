import { Sparkles } from "lucide-react";
import Image from "next/image";

interface CardProps {
  status: string;
  title: string;
  type: string;
  imageUrl: string;
  date: string;
  contentType: string;
}

const Card = ({ status, title, type, imageUrl, date, contentType }: CardProps) => {
  return (
    <div className="border rounded-lg shadow-md w-full">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold">{status}</span>
          <Sparkles className="ml-2 bg-pink-400 rounded-sm text-white p-1" />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <span className="inline-block bg-primary-foreground text-primary text-xs px-2 py-1 rounded-full mt-2">
          {type}
        </span>
        <Image
          src={imageUrl}
          alt={title}
          width={'150'}
          height={'150'}
          className="w-full h-32 object-cover mt-4 rounded-lg"
        />
      </div>
      <hr />
      <div className="bg-gray-100 p-4">
        <div className="text-sm text-gray-600">
          <span className="font-semibold text-black">Content Date: </span>{date}
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-semibold text-black">Content Type: </span>{contentType}
        </div>
      </div>
    </div>
  );
};

export default Card;
