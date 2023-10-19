import { Box, Typography, Divider } from "@mui/material"
import "./ItemDetails.sass"
import { Item } from "../../Catalogue"

type ItemDetailsProps = {
  item: Item
}

export const ItemDetails = ({ item }: ItemDetailsProps) => {
  console.log(item)
  return (
    <Box className="item-details-wrapper">
      <Box className="item-details-header">
        <Typography variant="h4">{item!.name}</Typography>
      </Box>
      <Divider className="divider" />
      <Box className="item-details-content"></Box>
    </Box>
  )
}
