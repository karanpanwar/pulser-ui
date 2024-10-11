import Image from "next/image";

interface TableProps {
  data: {
    status: string;
    title: string;
    type: string;
    imageUrl: string;
    date: string;
    contentType: string;
  }[];
}

const Table = ({ data }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
        <tr className="text-left">
          <th className="px-4 py-2 border-b">Status</th>
          <th className="px-4 py-2 border-b">Title</th>
          <th className="px-4 py-2 border-b">Type</th>
          <th className="px-4 py-2 border-b">Image</th>
          <th className="px-4 py-2 border-b">Date</th>
          <th className="px-4 py-2 border-b">Content Type</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-4 py-2 border-b">{item.status}</td>
            <td className="px-4 py-2 border-b">{item.title}</td>
            <td className="px-4 py-2 border-b">{item.type}</td>
            <td className="px-4 py-2 border-b">
              <Image src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
            </td>
            <td className="px-4 py-2 border-b">{item.date}</td>
            <td className="px-4 py-2 border-b">{item.contentType}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
