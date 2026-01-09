const express = require('express');
const fs = require('fs');
const app = express();

app.get('/traffic', (req, res) => {

    let data = JSON.parse(fs.readFileSync('traffic.json'));

    // Simulate increasing traffic
    data.traffic += 30;

    fs.writeFileSync('traffic.json', JSON.stringify(data));

    if (data.traffic >= 100) {
        console.log("🚨 HIGH TRAFFIC DETECTED");
        console.log("⚙ Automated Deployment Triggered");
    }

    res.json(data);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
