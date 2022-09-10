import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>T-shirt X</h1>
        <span>35.00 £</span>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aliquid rerum exercitationem facere a molestiae ut sed velit non mollitia? Officiis hic velit assumenda aspernatur nihil, sint sed laboriosam tempora?</p>

        <button>
          Buy
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}