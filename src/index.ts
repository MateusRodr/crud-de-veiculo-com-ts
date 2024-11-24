import express from 'express';
import userRoutes from './routes/userRoutes';
import sequelize from './config/database';

const app = express();
const PORT = process.env.PORT || 3011;

app.use(express.json());
app.use('/', userRoutes);

sequelize.sync().then(() => {
    console.log('database connecction successful')
    app.listen(PORT, () =>{
        console.log(`server running in ${PORT}`)
    })
}).catch(() => {
    console.log('database connection error')
});