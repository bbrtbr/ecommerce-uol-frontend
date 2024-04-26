import Product from "../models/Product";

class ProductService {
  async getProducts({
    orderBy,
    orderDirection,
    pageSize,
    page,
    categoryId,
  }: {
    orderBy: string;
    orderDirection: string;
    pageSize: string;
    page: string;
    categoryId?: number;
  }): Promise<any[]> {
    try {
      const response = await fetch(
        `http://localhost:3000/product?orderBy=${orderBy}&orderDirection=${orderDirection}&pageSize=${pageSize}&page=${page}&categoryId=${categoryId}`
      );

      if (!response.ok) {
        throw new Error("Erro ao obter os produtos");
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao obter os produtos:", error);
      return [];
    }
  }
  async getLength() {
    try {
      const response = await fetch(`http://localhost:3000/product`);
      if (!response.ok) {
        throw new Error("Erro ao obter os produtos");
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao obter os produtos:", error);
      return [];
    }
  }

  async getProductsId({
    productId,
  }: {
    productId: number;
  }): Promise<Product> { 
    try {
      const response = await fetch(
        `http://localhost:3000/product/${productId}`
      );
  
      if (!response.ok) {
        throw new Error("Erro ao obter o produto");
      }
      const productData = await response.json();
      return productData;
    } catch (error) {
      console.error("Erro ao obter o produto:", error);
      throw error; 
    }
  }
  
}

export default ProductService;
