import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";
import { addProduct } from "../../actions/products";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

const Form = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    name: "",
    images: [],
    categories: [],
    description: "",
    contact: "",
    price: "",
    author: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    setProductData({
      name: "",
      images: [],
      categories: [],
      description: "",
      contact: "",
      price: "",
      author: "",
    });

    dispatch(addProduct(productData));
  };

  const uploadImages = (base64Data) => {
    let imagesData = [];
    base64Data.map((data) => imagesData.push(data.base64));
    setProductData({
      ...productData,
      images: imagesData,
    });
  };

  return (
    <div className="Form" style={{ margin: "5rem 0" }}>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Paper style={{ maxWidth: "500px" }}>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant="h6">Add Product</Typography>
            <TextField
              name="name"
              variant="outlined"
              label="name"
              fullWidth
              value={productData.name}
              required
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
            />
            <TextField
              name="categories"
              variant="outlined"
              label="categories"
              fullWidth
              value={productData.categories}
              required
              onChange={(e) =>
                setProductData({
                  ...productData,
                  categories: e.target.value.split(","),
                })
              }
            />
            <TextField
              name="description"
              variant="outlined"
              label="description"
              fullWidth
              value={productData.description}
              required
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
            />
            <TextField
              name="contact"
              variant="outlined"
              label="contact"
              fullWidth
              value={productData.contact}
              required
              onChange={(e) =>
                setProductData({ ...productData, contact: e.target.value })
              }
            />
            <TextField
              name="price"
              variant="outlined"
              label="price"
              fullWidth
              value={productData.price}
              required
              onChange={(e) =>
                setProductData({ ...productData, price: e.target.value })
              }
            />
            <TextField
              name="author"
              variant="outlined"
              label="author"
              fullWidth
              value={productData.author}
              required
              onChange={(e) =>
                setProductData({ ...productData, author: e.target.value })
              }
            />
            <div style={{ margin: "2vh" }}>
              <FileBase
                key={productData.name}
                type="file"
                multiple={true}
                onDone={uploadImages}
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Form;