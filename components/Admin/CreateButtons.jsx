import { Button} from "@chakra-ui/react"
import Link from "next/link";

const CreateButtons = () => {
  return (
    <>
    <Link href="/admin/CreateNote">
        <Button width="220px" colorScheme="blue">
          NUEVA NOTA
        </Button>
        </Link>
        <Link href="/admin/CreateCategory">
        <Button width="220px" colorScheme="blue">
          NUEVA CATEGORIA
        </Button>
        </Link>
        <Link href="/admin/CreateSubCategory">
        <Button width="220px" colorScheme="blue">
          NUEVA SUBCATEGORIA
        </Button>
        </Link>
    </>
  )
}

export default CreateButtons