import AddFruitSection from "@/components/sections/addFruitSection";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { elysia } from "@/elysia/client";

export default async function Page() {
  const {data, error} = await elysia.api.fruit.index.get();

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="container flex flex-col mx-auto">
        <AddFruitSection />
        <Table className="mx-auto">
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Meyve</TableHead>
              <TableHead>İşlemler</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((fruit: any) => (
              <TableRow key={Math.random().toString()}>
                <TableCell  >{fruit}</TableCell>
                <TableCell>
                  <Button>Sil</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
