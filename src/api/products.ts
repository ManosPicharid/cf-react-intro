import { z } from "zod";

const API_URL: string = import.meta.env.VITE_API_URL;
const TENANT_ID: string = import.meta.env.VITE_TENANT_ID;

export const productSchema = z.object({
  id: z.coerce.number().int(),
  name: z.string().min(1, "Required"),
  slug: z
    .string()
    .min(1, "Required")
    .regex(
      /^[a-zA-Z0-9-_]+$/,
      "Slug must use only Latin lettersm numbers, - or _"
    ),
  description: z.string().optional(),
  image: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  price: z.coerce.number().nonnegative("Must be greater than 0"),
  is_active: z.boolean(),
  is_favorite: z.boolean(),
  sort: z.coerce.number().int().min(0, "Must be greater than 0"),
  category_id: z.coerce
    .number()
    .int()
    .min(1, "Category is required")
    .optional(),
});

export const productFormSchema = productSchema.omit({ id: true });

export type ProductType = z.infer<typeof productSchema>;

export async function getProducts(): Promise<ProductType[]> {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

export async function getProduct(productId: number): Promise<ProductType> {
  const res = await fetch(
    `${API_URL}/tenants/${TENANT_ID}/products/${productId}`
  );
  if (!res.ok) throw new Error("Failed to fetch product");
  return await res.json();
}

export async function updateProduct(
  productId: number,
  data: {
    name: string;
    slug: string;
    description?: string | undefined;
    image?: string | undefined;
    price: number;
    is_active: boolean;
    is_favorite: boolean;
    sort: number;
  }
): Promise<ProductType> {
  const res = await fetch(
    `${API_URL}/tenants/${TENANT_ID}/products/${productId}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  if (!res.ok) throw new Error("Failed to update product");
  return await res.json();
}

export async function createProduct(
  data: Omit<ProductType, "id">
): Promise<ProductType> {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create product");
  return await res.json();
}

export async function deleteProduct(productId: number): Promise<void> {
  const res = await fetch(
    `${API_URL}/tenants/${TENANT_ID}/products/${productId}`,
    { method: "DELETE" }
  );
  if (!res.ok) throw new Error("Failed to delete product");
}
