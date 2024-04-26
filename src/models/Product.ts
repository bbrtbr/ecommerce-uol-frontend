interface Product {
  id?: number;
  name?: string;
  sku?: string;
  description?: string;
  large_description?: string;
  price?: string;
  discount_price?: string | null;
  discount_percent?: number | null;
  is_new?: boolean;
  image_link?: string;
  other_images_link?: string[] | null;
  create_date?: string;
  updated_date?: string;
}

export default Product;
