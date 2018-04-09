import React from "react"
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import { withStyles } from "material-ui/styles"

const styles = theme => ({
    form: {
        display: "flex",
        flexFlow: "wrap",
        padding: "60px 20px",
        height: "107px"
    },
    textField: {
        display: "flex",
        margin: 0,
        width: "48%",
        padding: "1%"
    },
    button: {
        margin: `${theme.spacing.unit}px 1%`,
        width: "100%"
    }
})

const Form = props => (
    <form className={props.classes.form} onSubmit={props.getWeather}>
        <TextField
            className={props.classes.textField}
            label="City Name"
            margin="normal"
            name="city"
            type="text"
            InputLabelProps={{
                required: true
            }}
        />
        <TextField
            className={props.classes.textField}
            label="Country"
            margin="normal"
            name="country"
            type="text"
            InputLabelProps={{
                required: true
            }}
        />
        <Button
            className={props.classes.button}
            color="primary"
            type="submit"
            variant="raised"
        >
            Get Weather
        </Button>
    </form>
)

export default withStyles(styles)(Form)
