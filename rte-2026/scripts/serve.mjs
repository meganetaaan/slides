import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.gif':'image/gif','.woff2':'font/woff2','.md':'text/plain; charset=utf-8'};
export function createServer(){return http.createServer(async(req,res)=>{
  try{
    let name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let target=path.resolve(root,'.'+name);
    if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
    if((await stat(target)).isDirectory()) target=path.join(target,'index.html');
    res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-store'});res.end(await readFile(target));
  }catch{res.writeHead(404);res.end('Not found');}
});}
if(process.argv[1]===fileURLToPath(import.meta.url)){
  const port=Number(process.env.PORT||0);
  const server=createServer();server.listen(port,'127.0.0.1',()=>console.log(`Local presentation: http://127.0.0.1:${server.address().port}/ (Ctrl+C to stop)`));
}
