import express from 'express';

const app = express();
import categoryRoutes from './routes/categoryRoutes';
import subcategoryRoutes from './routes/subCategoryRoutes';
import itemRoutes from './routes/itemRoutes';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/category", categoryRoutes);
app.use("/api/subcategory", subcategoryRoutes);
app.use("/api/item", itemRoutes);



// Use other routes here

app.get('/', (req, res) => {
  res.status(200).json({message:'Guestara API'});
});


export default app;
