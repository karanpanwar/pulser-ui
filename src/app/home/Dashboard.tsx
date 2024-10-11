import MainLayout from "@/app/mainLayout";
import Card from "@/components/Card";
import cardData from "@/data/cardData.json";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            status={card.status}
            title={card.title}
            type={card.type}
            imageUrl={card.imageUrl}
            date={card.date}
            contentType={card.contentType}
          />
        ))}
      </div>
    </MainLayout>
  );
}

export default Dashboard;
