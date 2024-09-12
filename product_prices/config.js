
import {config} from 'dotenv';

config();

//puerto del servidor backend
export const PORT = process.env.PORT || 8800;