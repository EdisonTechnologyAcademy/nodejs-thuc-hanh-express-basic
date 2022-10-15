import express, {Express, Request, Response} from 'express';

const app: Express = express();
const PORT: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.end('Hello World')
})

app.listen(PORT, 'localhost', () => {
    console.log('server listening on port ' + PORT)
})
