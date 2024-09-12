import {PORT} from './config.js';
import app from './app.js';

//start server
app.listen(PORT, () => {
  console.log(`server running at port:${PORT}`);
});