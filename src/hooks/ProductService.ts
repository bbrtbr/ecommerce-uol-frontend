class ProductService {
    async getProducts(): Promise<any[]> {
      try {
        const response = await fetch('http://localhost:3000/product');
        
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