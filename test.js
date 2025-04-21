const cron = require('node-cron');

// Runs every minute
cron.schedule('* * * * *', () => {
  console.log('Running task every minute:', new Date().toLocaleTimeString());
});
