//implementasi process.env
//untuk membuat host yg berbeda di antara development dan production
//menggunakan properti NODE_ENV

const server = new Server(
    {
        host: process.env.NODE_ENV !== 'production'?'localhost':'dicoding.com',
    }
);

//CMD command to assign NODE_ENV:
//SET NODE_ENV=production && node [namafile].js