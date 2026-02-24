declare module '*.astro' {
    const component: (_props: Record<string, any>) => any;
    export default component;
}
