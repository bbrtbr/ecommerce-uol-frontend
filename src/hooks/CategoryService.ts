class CategoryService {
    async getCategory() {
      try {
        const response = await fetch(`http://localhost:3000/category`);
        
        if (!response.ok) {
          throw new Error('Erro ao obter as categorias');
        }
        return await response.json();
      } catch (error) {
        console.error('Erro ao obter as categorias:', error);
        return [];
      }
      
    }
  }
  
  export default CategoryService;
  