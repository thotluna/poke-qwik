# Poke - Qwik

This is a web application that allows you to view information about pokemons using the Pokeapi API. It was developed using Typescript and Qwik, and deployed on Cloudflare. Tailwind was also used for interface design.

## SSR

pokemon list
This page allows you to see a paginated listing of 20 pokemons per page, using the URL. The pokemon API call is made on the server, and the server delivers the full HTML to be rendered by the client with SSR.

## Game

This page allows you to view detailed information about a particular pokemon. No server is required to run, and no pokemon API calls are made.

## CSR

This page allows you to see a list of pokemons with infinite scroll. The request is made both on the server and on the client.

facility
Clone this repository.
Run npm install to install the dependencies.
Run npm run dev to start the app in development mode.
contributions
If you want to help improve this app, please send a pull request or open an issue. All contributions are welcome!

---

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── game/
    │   └── ...
    ├── home/
    │   └── ...
    ├── list-client/
    │   └── ...
    ├── list-ssr/
    │   └── ...
    └── routes/
        └── ...
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
pnpm preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
pnpm build # or `yarn build`
```

## Cloudflare Pages

Cloudflare's [wrangler](https://github.com/cloudflare/wrangler) CLI can be used to preview a production build locally. To start a local server, run:

```
pnpm serve
```

Then visit [http://localhost:8787/](http://localhost:8787/)
