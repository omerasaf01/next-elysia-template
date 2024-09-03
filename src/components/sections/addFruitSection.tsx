"use client";

import { elysia } from "@/elysia/client";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";

export default function AddFruitSection() {
    const [state, setState] = useState("")

    const addFruit = async () => {
        await elysia.api.fruit.index.post({ name: state });
    };

  return (
    <div className="w-full flex justify-start items-center">
      <Input
        placeholder="Meyve Adı Giriniz"
        onChange={(e) => setState(e.currentTarget.value)}
      />
      <Button onClick={addFruit}>Kaydet</Button>
    </div>
  );
}
