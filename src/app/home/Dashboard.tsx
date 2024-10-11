"use client";

import { useState } from "react";
import MainLayout from "@/app/mainLayout";
import Card from "@/components/Card";
import Table from "@/components/Table";
import cardData from "@/data/cardData.json";
import { Button } from "@/components/ui/button";
import {Table as TableIcon} from  "lucide-react";
import {LayoutGrid as LayoutGridIcon} from "lucide-react";


const Dashboard = () => {
  const [view, setView] = useState<"card" | "table">("card");

  return (
    <MainLayout>
      <div className="flex gap-2 mb-4">
        <Button variant={view === "card" ? "default" : "outline"} onClick={() => setView("card")}>
          <LayoutGridIcon className="h-5 w-5 mr-2"/>
          Card
        </Button>
        <Button variant={view === "table" ? "default" : "outline"} onClick={() => setView("table")}>
          <TableIcon className="h-5 w-5 mr-2" />
          Table
        </Button>
      </div>
      {view === "card" ? (
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
      ) : (
        <Table data={cardData} />
      )}
    </MainLayout>
  );
};

export default Dashboard;
