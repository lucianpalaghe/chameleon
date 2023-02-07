import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // prerender : {
    //   entries: ['/[slug]']
    // },
    adapter: adapter(
      {
        pages: 'public',
        assets: 'public',
        fallback: 'index.html'
      }
    )
  }
};

export default config;