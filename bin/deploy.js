import fs from 'fs';
import less from 'less';
import LessPluginCleanCss from 'less-plugin-clean-css';
import ejs from 'ejs';
import chalk from 'chalk';
import rimraf from 'rimraf';
import { minify as minifyHtml } from 'html-minifier';
import MarkdownIt from 'markdown-it';
import { exec } from 'child_process';
import { createElement, generateTable } from '@nbfe/js2html';
import hljs from '../src/util/highlight.js/lib';
import { DATA_NAV, DATA_META } from '../data';
import DATA_ARTICLE from '../data/db';

const timeInfo = chalk.green('✨ 构建完成, 耗时');
console.time(timeInfo);

const strLess = ['base', 'markdown', 'highlight', 'highlight-table', 'app']
    .reduce((prev, cur) => {
        prev.push(fs.readFileSync(`src/style/${cur}.less`));
        return prev;
    }, [])
    .join('')
    .toString();

const promiseLess = less.render(strLess, {
    plugins: [
        new LessPluginCleanCss({
            advanced: true
        })
    ]
});

const tempEjs = fs.readFileSync('src/template/index.ejs').toString();

rimraf.sync('docs');
fs.mkdirSync('docs');

exec('cp index.html docs/index.html');

DATA_NAV.forEach(v => fs.mkdirSync(`docs/${v.categories}`));

const MarkdownItHighlight = MarkdownIt({
    highlight: (str, language) => {
        const lang = language || 'javascript';
        const { value } = hljs.highlight(lang, str);
        if (hljs.getLanguage(lang)) {
            try {
                const data = value
                    .trim()
                    .split('\n')
                    .map((v, i) => {
                        return {
                            index: i + 1,
                            text: v
                        };
                    });
                const tableHtml = generateTable(
                    [
                        { prop: 'index', label: '索引' },
                        { prop: 'text', label: '内容', attrs: {} }
                    ],
                    data
                );
                return createElement({
                    tagName: 'pre',
                    attrs: {
                        class: `highlight language-${lang}`
                    },
                    text: tableHtml
                });
            } catch (e) {
                throw e;
            }
        }
        return '';
    }
});

const minifyHtmlOption = {
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeEmptyElements: false,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: false,
    sortAttributes: true,
    sortClassName: true,
    trimCustomFragments: true,
    useShortDoctype: true
};

const allDetail = Object.entries(DATA_ARTICLE).reduce((prev, cur) => {
    prev.push(...cur[1].map(v => `${cur[0]}/${v.name}`));
    return prev;
}, []);

const promiseDoc = path =>
    new Promise((resolve, reject) => {
        fs.readFile(`article/${path}.md`, (err, data) => {
            if (err) {
                reject(err);
            } else {
                console.log(chalk.cyan(`生成文件: docs/${path}.html`));
                resolve(data.toString());
            }
        });
    });

Promise.all([promiseLess, ...allDetail.map(v => promiseDoc(v))])
    .then(([less, ...docContent]) => {
        allDetail.map((v, i) => {
            const [categories, name] = v.split('/');
            let content = ejs.render(tempEjs, {
                DATA_NAV,
                DATA_ARTICLE,
                DATA_META,
                title: DATA_ARTICLE[categories].find(v => v.name == name).title,
                styleText: less.css,
                type: 'detail',
                categories,
                path: name,
                content: MarkdownItHighlight.render(docContent[i])
            });
            fs.writeFileSync(`docs/${v}.html`, minifyHtml(content, minifyHtmlOption));
        });
        DATA_NAV.map(v => {
            const { categories } = v;
            let content = ejs.render(tempEjs, {
                DATA_NAV,
                DATA_ARTICLE,
                DATA_META,
                title: v.title || v.text,
                styleText: less.css,
                type: 'list',
                categories: categories,
                content: (() => {
                    if (categories == 'index') {
                        return allDetail
                            .map(v => {
                                const [categories, name] = v.split('/');
                                const { title } = DATA_ARTICLE[categories].find(v => v.name == name);
                                return `<li><a href="/blog/${categories}/${name}.html">${title}</a></li>`;
                            })
                            .join('');
                    } else {
                        return DATA_ARTICLE[categories]
                            .map(v => `<li><a href="/blog/${categories}/${v.name}.html">${v.title}</a></li>`)
                            .join('');
                    }
                })()
            });
            fs.writeFileSync(`docs/${categories}/index.html`, minifyHtml(content, minifyHtmlOption));
        });
        console.timeEnd(timeInfo);
    })
    .catch(e => console.log(chalk.red(e)));
