import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Tab,
    Tabs,
} from "@mui/material";
import { useState} from "react";
import UserFields from "./Components/UserFields";
import {StudentSubject, TeacherSubject} from "../../../utils/enum";
import {createStudentAPI} from "../../../services/students/student-create/api";
import {createTeacherAPI} from "../../../services/teachers/teacher-create/api";

export default function CreateUserPage(){
    const [value, setValue] = useState('one');
    const [selectValue, setSelectValue] = useState("");
    const [values, setValues] = useState({});
    const [message, setMessage] = useState("");

    const handleChange = (event, newValue) => {
setValue(newValue)
    }

    const handleSelectChange = (e)=> {
        setSelectValue(e.target.value)
    }

    const onSubmit = () => {
        const data = {user: values, subject: selectValue}
        if(value === "one"){
            createStudentAPI(data).then(r => setMessage( `Student created!`)).catch((error)=> setMessage(error.message))
        }else {
            createTeacherAPI(data).then(r => setMessage(`Teacher created!`)).catch((error)=> setMessage(error.message))
        }

       // console.log({...values, subject: selectValue})
    }


    return <Container maxWidth="sm">
        <Box sx={{ p: 2, border: '5px solid grey' }}>

    <Grid container spacing={2}>
        <Grid item md={12}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
            >
                <Tab
                    value="one"
                    label="Student"
                    wrapped
                />
                <Tab value="two" label="Teacher" />
            </Tabs>
        </Grid>

        <UserFields values={values} setValues={setValues}/>

        <Grid item md={12}>
            <FormControl fullWidth>
                <InputLabel id="subject">Subject</InputLabel>
                <Select
                    labelId="subject"
                    id="subject-select"
                    value={selectValue}
                    label="Subject"
                    defaultValue=""
                    displayEmpty
                    onChange={handleSelectChange}
                >
                    <MenuItem value="" disabled>
                        <em>Choose an option</em>
                    </MenuItem>
                    {Object.values(value === "one" ?StudentSubject: TeacherSubject).map((s, index) =>  <MenuItem key={index} value={s}>{s.toLowerCase()}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Grid>
        <Grid item md={12}>
            <Button variant="contained" onClick={onSubmit}>Submit</Button>
        </Grid>

        <Grid item md={4}>
            <div>{message}</div>
        </Grid>
    </Grid>
        </Box>
    </Container>
}
