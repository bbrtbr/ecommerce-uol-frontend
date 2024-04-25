class ProductService {
  async getProducts({ orderBy, orderDirection, pageSize, page }: { orderBy: string; orderDirection: string; pageSize: string;page: string }): Promise<any[]> {
    try {
      const response = await fetch(`http://localhost:3000/product?orderBy=${orderBy}&orderDirection=${orderDirection}&pageSize=${pageSize}&page=${page}`);
      
      if (!response.ok) {
        throw new Error('Erro ao obter os produtos');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao obter os produtos:', error);
      return [];
    }
    
  }
  async getLength(){
    try{
      const response = await fetch(`http://localhost:3000/product`);
      if (!response.ok) {
        throw new Error('Erro ao obter os produtos');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao obter os produtos:', error);
      return [];
    }
  }
  
}

export default ProductService;
