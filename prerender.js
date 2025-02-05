import { createServer } from 'vite'
import  fs from 'fs/promises'

const base =  process.env.BASE || '/';

(async () => {
    const vite = await createServer({
        root: process.cwd(),
        server: {
            port: 3000
        },
        base
    })
    
    const render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
    const template = await fs.readFile('./dist/index.html', 'utf-8')
    
    const rendered = await render(base)
    
    let html = template.replace('<!--app-html-->', rendered.html ?? '');
    
    await fs.writeFile('./dist/index.html', html)
    await vite.close()
})()
