module.exports = {
    addons: ['@storybook/addon-actions', {
        name: '@storybook/addon-postcss',
        options: {
            postcssLoaderOptions: {
                implementation: require('postcss'),
            },
        },
    },],
    stories: ['../stories/*.stories.tsx'],
    typescript: {
        check: false,
        checkOptions: {},
    },
};