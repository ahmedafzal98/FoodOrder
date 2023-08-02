import { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const submitHandler = (e) => {
        e.preventDefault()

        const entredAmount = inputCartRef.current.value
        const entredAmountNumber = +entredAmount

        if (entredAmount.trim().length === 0 || entredAmountNumber < 1 || entredAmountNumber > 5) {
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(entredAmountNumber)
    }

    const inputCartRef = useRef()
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={inputCartRef} label="Amount" input={{ min: "1", max: "5", defaultValue: "1", type: "number" }} />
            <button>+Add</button>
            {!amountIsValid && <p>Please Enter Valid Amount (1 - 5)</p>}
        </form>
    )
}
export default MealItemForm