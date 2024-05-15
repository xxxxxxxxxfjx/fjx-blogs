import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'My Awesome Project',
    description: 'A VitePress Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' },
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' },
                ],
            },
            {
                text: '前端性能优化原理与实践',
                items: [
                    {
                        text: '0开篇：知识体系与小册格局',
                        link: '/前端性能优化原理与实践/0开篇：知识体系与小册格局',
                    },
                    { text: 'External Link', link: 'https://google.com' },
                    { text: 'External Link', link: 'https://google.com' },
                    { text: 'External Link', link: 'https://google.com' },
                    { text: 'External Link', link: 'https://google.com' },
                    { text: 'External Link', link: 'https://google.com' },
                    { text: 'External Link', link: 'https://google.com' },
                    { text: 'External Link', link: 'https://google.com' },
                ],
            },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
});
