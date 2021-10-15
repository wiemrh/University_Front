import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField} from "@mui/material";
import {Gender} from "../../../../../utils/enum";

export default function UserFields({values, setValues}){

    const handleFirstNameChange = (e)=> {
        setValues({...values, firstName: e.target.value});
    }
    const handleLastNameChange = (e)=> {
        setValues({...values, lastName: e.target.value});

    }
    const handleEmailChange = (e)=> {
        setValues({...values, email: e.target.value});
    }
    const handleBirthDayChange = (e)=> {
        setValues({...values, birthDate: e.target.value});
    }
    const handlePhoneChange = (e)=> {
        setValues({...values, phone: e.target.value});
    }

    const handleGenderChange = (e)=> {
        setValues({...values, gender: e.target.value});
    }

    return <>
        <Grid item md={6}>
            <TextField
                InputLabelProps={{
                    shrink: true,
                }}
                id="first-name"
                label="First Name"
                onChange={handleFirstNameChange}
            />
        </Grid>
        <Grid item md={6}>
            <TextField
                InputLabelProps={{
                    shrink: true,
                }}
                id="last-name"
                label="Last Name"
                onChange={handleLastNameChange}
            />
        </Grid>
        <Grid item md={6}>
            <TextField
                InputLabelProps={{
                    shrink: true,
                }}
                id="birthdate"
                label="Birthday"
                type="date"
                onChange={handleBirthDayChange}
            />
        </Grid>

        <Grid item md={6}>
            <FormControl component="fieldset" onChange={handleGenderChange}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    {Object.values(Gender).map((g, index)=> <FormControlLabel key={index} value={g} control={<Radio />} label={g.toLowerCase()} />)}
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item md={6}>
            <TextField
                InputLabelProps={{
                    shrink: true,
                }}
                required
                id="email"
                label="Email"
                type="email"
                onChange={handleEmailChange}
            />
        </Grid>
        <Grid item md={6}>
            <TextField
                InputLabelProps={{
                    shrink: true,
                }}
                required
                id="phone"
                label="Phone Number"
                type="number"
                onChange={handlePhoneChange}
            />
        </Grid>

    </>
}
