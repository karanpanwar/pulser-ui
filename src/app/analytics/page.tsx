import MainLayout from "@/app/mainLayout";
import {Button} from "@/components/ui/button";

const Analytics = () => {
  return (
    <MainLayout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">Title</h3>
          <p className="text-sm text-muted-foreground">
            description
          </p>
          <Button className="mt-4">Button</Button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Analytics;
