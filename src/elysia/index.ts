import { Elysia, t } from "elysia";
import fruitController from "./controllers/fruitController";
import swagger from "@elysiajs/swagger";

export const elysiaApp = new Elysia({ prefix: "/api" })
    .use(swagger)
    .use(fruitController)
    .onError(({ code, error }) => {
        console.log(code);
        return new Response(JSON.stringify({ error: error.toString() }), {
        status: 500,
        });
    });

export type TElysiaApp = typeof elysiaApp;
