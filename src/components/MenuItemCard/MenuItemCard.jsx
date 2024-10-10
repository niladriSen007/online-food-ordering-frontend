import { lazy } from "react"
const ExpandMoreIcon = lazy(() => import("@mui/icons-material/ExpandMore"))
const Accordion = lazy(() => import("@mui/material/Accordion"))
const AccordionSummary = lazy(() => import("@mui/material/AccordionSummary"))
const AccordionDetails = lazy(() => import("@mui/material/AccordionDetails"))
const Button = lazy(() => import("@mui/material/Button"))

import PropTypes from "prop-types"

const MenuItemCard = ({ item }) => {
  return (
    <>
      {" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:space-x-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src={item?.images[0]}
                alt=""
              />

              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">{item?.name}</p>
                <p>₹{item?.price}</p>
                <p className="text-gray-400">{item?.description}</p>
              </div>
            </div>
            {/* <div>
  <Button onClick={handleAddItemToCart}>Add To Cart</Button>
</div> */}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form
          /*    onSubmit={handleAddItemToCart}  */
          >
            <div className="flex gap-5 flex-wrap">
              {/*   {Object.keys(categorizedIngredients(item?.ingredients))?.map(
                (category) => (
                  <div className="pr-5">
                    <p>{category}</p>
                    <FormGroup>
                      {categorizedIngredients(item?.ingredients)[category].map(
                        (ingredient, index) => (
                          <FormControlLabel
                            key={ingredient.name}
                            control={
                              <Checkbox
                                checked={selectedIngredients.includes(
                                  ingredient.name
                                )}
                                onChange={() =>
                                  handleCheckboxChange(ingredient.name)
                                }
                                disabled={!ingredient.inStoke}
                              />
                            }
                            label={ingredient.name}
                          />
                        )
                      )}
                    </FormGroup>
                  </div>
                )
              )} */}
            </div>

            <div className="pt-5">
              <Button
                variant="contained"
                disabled={!item.available}
                type="submit"
              >
                {item?.available ? "Add To Cart" : "Out of stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

MenuItemCard.propTypes = {
  item: PropTypes.object.isRequired,
}

export default MenuItemCard
