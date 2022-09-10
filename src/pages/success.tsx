import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Purchase made</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Helder Correia</strong>, yout <strong>T- shir</strong>it is on its way to your house.
      </p>

      <Link href="/">
          Back to catalog
      </Link>
    </SuccessContainer>
  )
}