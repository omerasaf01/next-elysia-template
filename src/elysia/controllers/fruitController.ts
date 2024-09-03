import Elysia, { t } from "elysia";

const fruitList: string[] = [];

export const fruitController = new Elysia({ prefix: "fruit" })
    .get("/", () => fruitList)
    .post("/", ({ body }) => fruitList.push(body.name), {
        body: t.Object({
            name: t.String()
        })
    })

export default fruitController;