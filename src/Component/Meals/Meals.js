import { Fragment } from "react"
import MealsSummary from './MealsSummay'
import AvailableMeals from "./AvailableMeals"
const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
}
export default Meals