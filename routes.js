const fs = require('fs');

const requestHandler = (req, res) => {
    const webTitle = '<h1 style = "background-color: grey">Welcome to my website</h1>';
    const webContent = '<p>This is a response from the node server</p>';
    const method = req.method;
    const url = req.url;

    if(url === '/'){
    res.write('<html>');
    res.write('<head><title>My website</title></head>');
    res.write('<body>');
    res.write('<form action = "/message" method ="POST"><input type ="text" name = "message-sent"> <button type = "summit">Enter main page</button></button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    }
    
    if(url === "/message" && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);

        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('README.txt', message);
            res.statusCode = 302;
            res.setHeader('location', '/');
            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My website</title></head>');
    res.write('<body>');
    res.write(webTitle + webContent);
    res.write('</body>');
    res.write('</html>');
    res.end();
}


exports.request = requestHandler;